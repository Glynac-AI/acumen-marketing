// src/services/strapiService.js

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN || '';
const WEBSITE_NAME = 'Acumen Labs';

// Helper function to create authenticated fetch headers
const getAuthHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
    };

    // Add bearer token if available
    if (STRAPI_TOKEN) {
        headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    return headers;
};

// Helper function to get full image URL
export const getStrapiImageUrl = (imageData) => {
    if (!imageData) return null;

    let url = null;

    if (imageData.data?.attributes?.url) {
        url = imageData.data.attributes.url;
    } else if (imageData.url) {
        url = imageData.url;
    } else {
        return null;
    }

    if (url.startsWith('/')) {
        return `${STRAPI_URL}${url}`;
    }

    return url;
};

// Fetch all blog posts for this website
export const getBlogPosts = async (category = null) => {
    try {
        const params = new URLSearchParams({
            'filters[website]': WEBSITE_NAME,
            'filters[publishStatus]': 'Published',
            'sort[0]': 'publishedDate:desc',
            'populate': '*'
        });

        if (category && category !== 'All') {
            params.append('filters[category]', category);
        }

        const url = `${STRAPI_URL}/api/blog-posts?${params.toString()}`;

        const response = await fetch(url, {
            headers: getAuthHeaders(),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to fetch blog posts');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
};

// Fetch single blog post by slug
export const getBlogPostBySlug = async (slug) => {
    try {
        const params = new URLSearchParams({
            'filters[slug]': slug,
            'filters[website]': WEBSITE_NAME,
            'filters[publishStatus]': 'Published',
            'populate': '*'
        });

        const response = await fetch(
            `${STRAPI_URL}/api/blog-posts?${params.toString()}`,
            {
                headers: getAuthHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch blog post');
        }

        const data = await response.json();
        return data.data[0] || null;
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
};

// Fetch all categories
export const getBlogCategories = async () => {
    try {
        const posts = await getBlogPosts();
        const categories = [...new Set(
            posts
                .filter(post => post?.attributes?.category)
                .map(post => post.attributes.category)
        )];
        return ['All', ...categories.filter(Boolean)];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return ['All'];
    }
};

// Fetch related posts
export const getRelatedPosts = async (category, currentSlug, limit = 3) => {
    try {
        const params = new URLSearchParams({
            'filters[website]': WEBSITE_NAME,
            'filters[publishStatus]': 'Published',
            'filters[category]': category,
            'filters[slug][$ne]': currentSlug,
            'sort[0]': 'publishedDate:desc',
            'pagination[limit]': limit,
            'populate': '*'
        });

        const response = await fetch(
            `${STRAPI_URL}/api/blog-posts?${params.toString()}`,
            {
                headers: getAuthHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch related posts');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching related posts:', error);
        return [];
    }
};

// Fetch all press releases
export const getPressReleases = async () => {
    try {
        const params = new URLSearchParams({
            'filters[publishStatus]': 'Published',
            'sort[0]': 'releaseDate:desc',
            'populate': '*'
        });

        const url = `${STRAPI_URL}/api/press-releases?${params.toString()}`;

        const response = await fetch(url, {
            headers: getAuthHeaders(),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to fetch press releases');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching press releases:', error);
        return [];
    }
};

// Fetch single press release by slug
export const getPressReleaseBySlug = async (slug) => {
    try {
        const params = new URLSearchParams({
            'filters[slug]': slug,
            'filters[publishStatus]': 'Published',
            'populate': '*'
        });

        const response = await fetch(
            `${STRAPI_URL}/api/press-releases?${params.toString()}`,
            {
                headers: getAuthHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch press release');
        }

        const data = await response.json();
        return data.data[0] || null;
    } catch (error) {
        console.error('Error fetching press release:', error);
        return null;
    }
};

// Fetch featured press releases
export const getFeaturedPressReleases = async (limit = 3) => {
    try {
        const params = new URLSearchParams({
            'filters[publishStatus]': 'Published',
            'filters[featured]': true,
            'sort[0]': 'releaseDate:desc',
            'pagination[limit]': limit,
            'populate': '*'
        });

        const response = await fetch(
            `${STRAPI_URL}/api/press-releases?${params.toString()}`,
            {
                headers: getAuthHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch featured press releases');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching featured press releases:', error);
        return [];
    }
};

// Fetch all job postings
export const getJobPostings = async (department = null, status = 'Open') => {
    try {
        const params = new URLSearchParams({
            'filters[website]': WEBSITE_NAME,
            'filters[jobPositionstatus]': status,
            'sort[0]': 'createdAt:desc',
            'populate': '*'
        });

        if (department && department !== 'All') {
            params.append('filters[department]', department);
        }

        const url = `${STRAPI_URL}/api/job-postings?${params.toString()}`;

        const response = await fetch(url, {
            headers: getAuthHeaders(),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to fetch job postings');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching job postings:', error);
        return [];
    }
};

// Fetch single job posting by slug
export const getJobPostingBySlug = async (slug) => {
    try {
        const params = new URLSearchParams({
            'filters[slug]': slug,
            'filters[website]': WEBSITE_NAME,
            'populate': '*'
        });

        const response = await fetch(
            `${STRAPI_URL}/api/job-postings?${params.toString()}`,
            {
                headers: getAuthHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch job posting');
        }

        const data = await response.json();
        return data.data[0] || null;
    } catch (error) {
        console.error('Error fetching job posting:', error);
        return null;
    }
};

// Fetch all departments
export const getJobDepartments = async () => {
    try {
        const jobs = await getJobPostings();
        const departments = [...new Set(
            jobs
                .filter(job => job?.attributes?.department)
                .map(job => job.attributes.department)
        )];
        return ['All', ...departments.filter(Boolean)];
    } catch (error) {
        console.error('Error fetching departments:', error);
        return ['All'];
    }
};