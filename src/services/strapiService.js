// src/services/strapiService.js

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const WEBSITE_NAME = 'Acumen Labs'; // Change this for each website

// Helper function to get full image URL
export const getStrapiImageUrl = (imageData) => {
    if (!imageData) return null;

    // Handle nested structure 
    let url = null;

    if (imageData.data?.attributes?.url) {
        // Nested structure from populate
        url = imageData.data.attributes.url;
    } else if (imageData.url) {
        // Flat structure (direct image object)
        url = imageData.url;
    } else {
        return null;
    }

    // If URL starts with '/', it's a local upload - add Strapi base URL
    if (url.startsWith('/')) {
        return `${STRAPI_URL}${url}`;
    }

    // If absolute URL (S3, etc.), return as-is
    return url;
};

// Fetch all blog posts for this website
export const getBlogPosts = async (category = null) => {
    try {
        // Using publishStatus instead of status
        const params = new URLSearchParams({
            'filters[website]': WEBSITE_NAME,
            'filters[publishStatus]': 'Published',
            'sort[0]': 'publishedDate:desc',
            'populate': '*'
        });

        // Add category filter if provided
        if (category && category !== 'All') {
            params.append('filters[category]', category);
        }

        const url = `${STRAPI_URL}/api/blog-posts?${params.toString()}`;
        console.log('Fetching from:', url); // Debug log

        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to fetch blog posts');
        }

        const data = await response.json();
        console.log('Fetched posts:', data.data); // Debug log
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
            `${STRAPI_URL}/api/blog-posts?${params.toString()}`
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

// Fetch all categories (unique list)
export const getBlogCategories = async () => {
  try {
    const posts = await getBlogPosts();
    const categories = [...new Set(
      posts
        .filter(post => post?.attributes?.category) // Filter out posts without category
        .map(post => post.attributes.category)
    )];
    return ['All', ...categories.filter(Boolean)];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['All'];
  }
};

// Fetch related posts (same category, exclude current post)
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
            `${STRAPI_URL}/api/blog-posts?${params.toString()}`
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

// Fetch all job postings for this website
export const getJobPostings = async (department = null, status = 'Open') => {
    try {
        const params = new URLSearchParams({
            'filters[website]': WEBSITE_NAME,
            'filters[jobPositionstatus]': status,
            'sort[0]': 'createdAt:desc',
            'populate': '*'
        });

        // Add department filter if provided
        if (department && department !== 'All') {
            params.append('filters[department]', department);
        }

        const url = `${STRAPI_URL}/api/job-postings?${params.toString()}`;
        console.log('Fetching jobs from:', url);

        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to fetch job postings');
        }

        const data = await response.json();
        console.log('Fetched jobs:', data.data);
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
            `${STRAPI_URL}/api/job-postings?${params.toString()}`
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

// Fetch all departments (unique list)
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


// Fetch all press releases for this website
export const getPressReleases = async () => {
    try {
        const params = new URLSearchParams({
            'filters[publishStatus]': 'Published',
            'sort[0]': 'releaseDate:desc',
            'populate': '*'
        });

        const url = `${STRAPI_URL}/api/press-releases?${params.toString()}`;
        console.log('Fetching press releases from:', url);

        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to fetch press releases');
        }

        const data = await response.json();
        console.log('Fetched press releases:', data.data);
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
            `${STRAPI_URL}/api/press-releases?${params.toString()}`
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
            `${STRAPI_URL}/api/press-releases?${params.toString()}`
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