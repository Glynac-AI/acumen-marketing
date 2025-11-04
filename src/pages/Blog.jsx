// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getBlogPosts, getBlogCategories, getStrapiImageUrl } from '@/services/strapiService';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [categories, setCategories] = useState(['All']);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    // Fetch blog posts and categories on component mount
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [posts, cats] = await Promise.all([
                getBlogPosts(selectedCategory),
                getBlogCategories()
            ]);
            setBlogPosts(posts);
            setCategories(cats);
            setLoading(false);
        };

        fetchData();
    }, [selectedCategory]);

    // Format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Blog | Acumen Labs - Wealth Management Marketing Insights</title>
                <meta
                    name="description"
                    content="Expert insights on wealth management marketing, RIA lead generation, compliance, and digital marketing strategies for financial advisors."
                />
                <meta
                    name="keywords"
                    content="wealth management blog, RIA marketing, financial advisor marketing, compliance marketing"
                />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF]">
                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                    <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Insights & Resources
                        </motion.span>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Wealth Management Marketing{" "}
                            <span className="text-ph font-normal">Intelligence</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Industry insights, trends, and strategies to accelerate your firm's growth
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-ph text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block w-16 h-16 border-4 border-ph border-t-transparent rounded-full animate-spin"></div>
                            <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
                        </div>
                    ) : blogPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-foreground">No blog posts found.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => {
                                if (!post) return null;

                                // Support both Strapi-style (with attributes) and flat API data
                                const attributes = post.attributes || post;

                                return (
                                    <motion.article
                                        key={post.id}
                                        className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        {/* Featured Image */}
                                        {attributes.featuredImage ? (
                                            <Link to={`/blog/${attributes.slug}`}>
                                                <img
                                                    src={getStrapiImageUrl(attributes.featuredImage)}
                                                    alt={attributes.title}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </Link>
                                            
                                        ) : (
                                            <div className="w-full h-48 bg-gradient-to-br from-ph/10 to-ph/5 flex items-center justify-center">
                                                <span className="text-ph text-4xl font-light">AL</span>
                                            </div>
                                        )}

                                        {console.log(getStrapiImageUrl(attributes.featuredImage))}

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Category Badge */}
                                            {attributes.category && (
                                                <span className="inline-block px-3 py-1 bg-ph/10 text-ph text-xs font-medium rounded-full mb-3">
                                                    {attributes.category}
                                                </span>
                                            )}

                                            {/* Title */}
                                            <Link to={`/blog/${attributes.slug}`}>
                                                <h2 className="text-xl font-semibold text-foreground mb-3 hover:text-ph transition-colors line-clamp-2">
                                                    {attributes.title}
                                                </h2>
                                            </Link>

                                            {/* Excerpt */}
                                            {attributes.excerpt && (
                                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                                    {attributes.excerpt}
                                                </p>
                                            )}

                                            {/* Meta Info */}
                                            <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                                                {attributes.author && (
                                                    <div className="flex items-center">
                                                        <User className="w-4 h-4 mr-1" />
                                                        {attributes.author}
                                                    </div>
                                                )}
                                                {attributes.publishedDate && (
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        {formatDate(attributes.publishedDate)}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Read More Link */}
                                            <Link
                                                to={`/blog/${attributes.slug}`}
                                                className="inline-flex items-center text-ph font-medium hover:underline"
                                            >
                                                Read More
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Blog;