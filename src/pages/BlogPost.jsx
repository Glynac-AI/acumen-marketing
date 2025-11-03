// src/pages/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts, getStrapiImageUrl } from '@/services/strapiService';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const postData = await getBlogPostBySlug(slug);

            if (postData) {
                setPost(postData);

                const attributes = postData.attributes || postData;

                const related = await getRelatedPosts(
                    attributes.category,
                    attributes.slug,
                    3
                );
                setRelatedPosts(related);
            }

            setLoading(false);
            window.scrollTo(0, 0); // Scroll to top
        };

        fetchPost();
    }, [slug]);

    // Format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="inline-block w-16 h-16 border-4 border-ph border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
                    <Link to="/blog" className="text-ph hover:underline">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const attributes = post.attributes || post;


    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{attributes.seoTitle || attributes.title}</title>
                <meta
                    name="description"
                    content={attributes.seoDescription || attributes.excerpt}
                />
                <meta
                    name="keywords"
                    content={attributes.seoKeywords}
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content={attributes.seoTitle || attributes.title} />
                <meta property="og:description" content={attributes.ogDescription || attributes.excerpt} />
                <meta property="og:type" content="article" />
                {attributes.ogImage && (
                    <meta property="og:image" content={getStrapiImageUrl(attributes.ogImage)} />
                )}
            </Helmet>

            {/* Back to Blog Link */}
            <section className="pt-32 pb-8 bg-white">
                <div className="container mx-auto px-6">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-ph hover:underline font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </section>

            {/* Blog Post Content */}
            <article className="pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 bg-ph/10 text-ph text-sm font-medium rounded-full mb-6">
                            {attributes.category}
                        </span>

                        {/* Title */}
                        <motion.h1
                            className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {attributes.title}
                        </motion.h1>

                        {/* Meta Info */}
                        <motion.div
                            className="flex items-center text-muted-foreground mb-8 space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                {attributes.author}
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                {formatDate(attributes.publishedDate)}
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        {attributes.featuredImage && (
                            <motion.div
                                className="mb-12 rounded-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <img
                                    src={getStrapiImageUrl(attributes.featuredImage)}
                                    alt={attributes.title}
                                    className="w-full h-auto"
                                />
                                {console.log(getStrapiImageUrl(attributes.featuredImage))}
                            </motion.div>
                        )}
                        

                        {/* Content */}
                        <motion.div
                            className="prose prose-lg max-w-none space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {Array.isArray(attributes.content) ? (
                                attributes.content.map((block, index) => {
                                    if (block.type === 'paragraph') {
                                        const text = block.children?.map((child) => child.text).join(' ');
                                        return (
                                            <p key={index} className="text-gray-700 leading-relaxed">
                                                {text}
                                            </p>
                                        );
                                    }
                                    return null;
                                })
                            ) : (
                                <div dangerouslySetInnerHTML={{ __html: attributes.content }} />
                            )}
                        </motion.div>

                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-[#F8FAFF]">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-display font-light text-foreground mb-12 text-center">
                            Related <span className="text-ph font-normal">Articles</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.attributes.slug}`}
                                    className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    {relatedPost.attributes.featuredImage?.data ? (
                                        <img
                                            src={getStrapiImageUrl(relatedPost.attributes.featuredImage)}
                                            alt={relatedPost.attributes.title}
                                            className="w-full h-40 object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-40 bg-gradient-to-br from-ph/10 to-ph/5"></div>
                                    )}

                                    <div className="p-6">
                                        <span className="text-xs text-ph font-medium">
                                            {relatedPost.attributes.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-foreground mt-2 line-clamp-2">
                                            {relatedPost.attributes.title}
                                        </h3>
                                        <div className="flex items-center text-ph font-medium mt-4">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default BlogPost;