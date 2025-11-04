// src/components/press/PressReleases.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, FileText, ArrowRight } from "lucide-react";
import { getPressReleases } from "@/services/strapiService";

const PressReleases = () => {
    const [releases, setReleases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReleases = async () => {
            setLoading(true);
            const data = await getPressReleases();
            setReleases(data);
            setLoading(false);
        };

        fetchReleases();
    }, []);

    // Format date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Get excerpt from content
    const getExcerpt = (content: any, maxLength = 200) => {
        if (!Array.isArray(content)) return '';

        let text = '';
        for (const block of content) {
            if (block.type === 'paragraph') {
                const paragraphText = block.children?.map((child: any) => child.text).join('');
                text += paragraphText + ' ';
                if (text.length >= maxLength) break;
            }
        }

        return text.trim().substring(0, maxLength) + (text.length > maxLength ? '...' : '');
    };

    if (loading) {
        return (
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center py-20">
                        <div className="inline-block w-16 h-16 border-4 border-ph border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-muted-foreground">Loading press releases...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
                            Press <span className="text-ph font-normal">Releases</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Latest news and announcements from Acumen Labs
                        </p>
                    </motion.div>

                    {/* Press Releases List */}
                    {releases.length === 0 ? (
                        <div className="text-center py-20">
                            <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                            <p className="text-xl text-muted-foreground">No press releases available at this time.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {releases.map((release: any, index: number) => {
                                const attributes = release.attributes || release;

                                return (
                                    <motion.article
                                        key={release.id}
                                        className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-lg hover:border-ph/20 transition-all duration-300"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        {/* Header */}
                                        <div className="mb-4">
                                            {attributes.featured && (
                                                <span className="inline-block px-3 py-1 bg-ph/10 text-ph text-xs font-medium rounded-full mb-3">
                                                    Featured
                                                </span>
                                            )}

                                            <Link to={`/press/${attributes.slug}`}>
                                                <h3 className="text-2xl font-display font-light text-foreground mb-3 hover:text-ph transition-colors">
                                                    {attributes.title}
                                                </h3>
                                            </Link>

                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                {attributes.releaseDate && (
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-2" />
                                                        {formatDate(attributes.releaseDate)}
                                                    </div>
                                                )}
                                                {attributes.location && (
                                                    <div className="flex items-center">
                                                        <MapPin className="w-4 h-4 mr-2" />
                                                        {attributes.location}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Excerpt */}
                                        <p className="text-foreground leading-relaxed mb-6">
                                            {getExcerpt(attributes.content)}
                                        </p>

                                        {/* Read More Link */}
                                        <Link
                                            to={`/press/${attributes.slug}`}
                                            className="inline-flex items-center text-ph hover:text-ph-dark font-medium transition-colors group"
                                        >
                                            Read Full Release
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PressReleases;