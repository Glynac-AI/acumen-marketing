// src/pages/PressReleaseDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, MapPin, Mail, Phone, User, Download, ExternalLink } from 'lucide-react';
import { getPressReleaseBySlug } from '@/services/strapiService';

const PressReleaseDetail = () => {
    const { slug } = useParams();
    const [release, setRelease] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRelease = async () => {
            setLoading(true);
            const releaseData = await getPressReleaseBySlug(slug);
            setRelease(releaseData);
            setLoading(false);
            window.scrollTo(0, 0);
        };

        fetchRelease();
    }, [slug]);

    // Format date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Render rich text content
    const renderContent = (content: any) => {
        if (!Array.isArray(content)) return null;
        return content.map((block: any, index: number) => {
            if (block.type === 'paragraph') {
                const text = block.children?.map((child: any) => child.text).join('');
                return text ? (
                    <p key={index} className="mb-4 leading-relaxed">
                        {text}
                    </p>
                ) : null;
            }
            return null;
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-32">
                <div className="inline-block w-16 h-16 border-4 border-ph border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!release) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-32">
                <div className="text-center">
                    <h1 className="text-3xl font-display font-light text-foreground mb-4">
                        Press Release Not Found
                    </h1>
                    <Link to="/press" className="text-ph hover:text-ph-dark">
                        ← Back to Press & Media
                    </Link>
                </div>
            </div>
        );
    }

    const attributes = release.attributes || release;

    return (
        <>
            <Helmet>
                <title>{attributes.seoTitle || attributes.title} | Acumen Labs</title>
                <meta
                    name="description"
                    content={attributes.seoDescription || attributes.title}
                />
                {attributes.seoKeywords && (
                    <meta name="keywords" content={attributes.seoKeywords} />
                )}
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                to="/press"
                                className="inline-flex items-center text-ph hover:text-ph-dark transition-colors mb-8"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Press & Media
                            </Link>
                        </motion.div>

                        {/* Featured Badge */}
                        {attributes.featured && (
                            <motion.span
                                className="inline-block px-3 py-1 bg-ph/10 text-ph text-xs font-medium rounded-full mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Featured Release
                            </motion.span>
                        )}

                        {/* Title */}
                        <motion.h1
                            className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {attributes.title}
                        </motion.h1>

                        {/* Meta Information */}
                        <motion.div
                            className="flex flex-wrap gap-6 text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {attributes.releaseDate && (
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    {formatDate(attributes.releaseDate)}
                                </div>
                            )}
                            {attributes.location && (
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    {attributes.location}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="prose prose-lg max-w-none"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="text-foreground">
                                {renderContent(attributes.content)}
                            </div>
                        </motion.div>

                        {/* PDF Attachment */}
                        {attributes.pdfAttachment?.data && (
                            <motion.div
                                className="mt-12 p-6 bg-[#F8FAFF] border border-gray-100 rounded-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Download className="w-6 h-6 text-ph mr-3" />
                                        <div>
                                            <h4 className="font-medium text-foreground">Download Press Release</h4>
                                            <p className="text-sm text-muted-foreground">PDF Format</p>
                                        </div>
                                    </div>
                                    <a
                                        href={`${import.meta.env.VITE_STRAPI_URL}${attributes.pdfAttachment.data.attributes.url}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button-primary inline-flex items-center"
                                    >
                                        Download
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section >

            {/* Media Contact Section */}
            < section className="py-16 bg-[#F8FAFF]" >
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="bg-white p-8 rounded-lg border border-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-display font-light text-foreground mb-6">
                                Media <span className="text-ph font-normal">Contact</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Contact Person */}
                                {attributes.contactName && (
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 flex-shrink-0">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Contact</div>
                                            <div className="font-medium text-foreground">{attributes.contactName}</div>
                                        </div>
                                    </div>
                                )}

                                {/* Email */}
                                {attributes.contactEmail && (
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 flex-shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Email</div>
                                            <a
                                                href={`mailto:${attributes.contactEmail}`}
                                                className="font-medium text-ph hover:text-ph-dark transition-colors break-all"
                                            >
                                                {attributes.contactEmail}
                                            </a>
                                        </div>
                                    </div >
                                )}


                                {/* Phone */}
                                {attributes.contactPhone && (
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 flex-shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Phone</div>
                                            <a
                                            href={`tel:${attributes.contactPhone.replace(/\D/g, '')}`}
                                            className="font-medium text-ph hover:text-ph-dark transition-colors"
                                            >
                                            {attributes.contactPhone}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                </motion.div>
            </div>
        </div>
            </section >

    {/* About Acumen Labs Section */ }
    < section className = "py-16 bg-white" >
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="border-t border-gray-100 pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <h4 className="text-lg font-medium text-foreground mb-4">About Acumen Labs</h4>
                    <p className="text-muted-foreground leading-relaxed">
                        Acumen Labs is a specialized digital marketing agency exclusively serving wealth management firms.
                        With a focus on compliance-first strategies and measurable results, Acumen Labs helps RIAs, IARs,
                        family offices, and custodians accelerate growth through targeted marketing campaigns, educational
                        content, and thought leadership positioning.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/about"
                            className="text-ph hover:text-ph-dark font-medium transition-colors"
                        >
                            Learn more about Acumen Labs →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
            </section >
        </>
    );
};

export default PressReleaseDetail;