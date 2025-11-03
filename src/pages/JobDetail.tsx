// src/pages/JobDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MapPin, Briefcase, Calendar, Clock, CheckCircle, Send } from 'lucide-react';
import { getJobPostingBySlug } from '@/services/strapiService';

const JobDetail = () => {
    const { slug } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showApplicationForm, setShowApplicationForm] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            setLoading(true);
            const jobData = await getJobPostingBySlug(slug);
            setJob(jobData);
            setLoading(false);
            window.scrollTo(0, 0);
        };

        fetchJob();
    }, [slug]);

    // Helper to render rich text content
    const renderContent = (content) => {
        if (!Array.isArray(content)) return null;
        return content.map((block, index) => {
            if (block.type === 'paragraph') {
                const text = block.children?.map((child) => child.text).join('');
                return text ? (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {text}
                    </p>
                ) : null;
            }
            return null;
        });
    };

    // Format date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="inline-block w-16 h-16 border-4 border-ph border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Job Posting Not Found</h1>
                    <Link to="/careers" className="text-ph hover:underline">
                        ← Back to Careers
                    </Link>
                </div>
            </div>
        );
    }

    const attributes = job.attributes || job;

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{attributes.seoTitle || attributes.title}</title>
                <meta
                    name="description"
                    content={attributes.seoDescription}
                />
                <meta
                    name="keywords"
                    content={attributes.seoKeywords}
                />
            </Helmet>

            {/* Back to Careers Link */}
            <section className="pt-32 pb-8 bg-white">
                <div className="container mx-auto px-6">
                    <Link
                        to="/careers"
                        className="inline-flex items-center text-ph hover:underline font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Careers
                    </Link>
                </div>
            </section>

            {/* Job Detail Content */}
            <article className="pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Job Title */}
                        <motion.h1
                            className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {attributes.title}
                        </motion.h1>

                        {/* Job Meta Info */}
                        <motion.div
                            className="flex flex-wrap gap-6 text-muted-foreground mb-8 pb-8 border-b border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-ph" />
                                {attributes.location}
                            </div>
                            <div className="flex items-center">
                                <Briefcase className="w-5 h-5 mr-2 text-ph" />
                                {attributes.jobType}
                            </div>
                            {attributes.department && (
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-ph" />
                                    {attributes.department}
                                </div>
                            )}
                            {attributes.applicationDeadline && (
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2 text-ph" />
                                    Apply by {formatDate(attributes.applicationDeadline)}
                                </div>
                            )}
                        </motion.div>

                        {/* Apply Button */}
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <button
                                onClick={() => setShowApplicationForm(true)}
                                className="inline-flex items-center px-8 py-4 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Apply for This Position
                            </button>
                        </motion.div>

                        {/* Job Description */}
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-medium text-foreground mb-4">About the Role</h2>
                            <div className="prose prose-lg max-w-none">
                                {renderContent(attributes.description)}
                            </div>
                        </motion.div>

                        {/* Requirements */}
                        {attributes.requirements && (
                            <motion.div
                                className="mb-12 bg-[#F8FAFF] p-8 rounded-lg border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <h2 className="text-2xl font-medium text-foreground mb-6">Requirements</h2>
                                <div className="space-y-3">
                                    {renderContent(attributes.requirements)}
                                </div>
                            </motion.div>
                        )}

                        {/* Responsibilities */}
                        {attributes.responsibilities && (
                            <motion.div
                                className="mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >
                                <h2 className="text-2xl font-medium text-foreground mb-6">Responsibilities</h2>
                                <div className="space-y-3">
                                    {renderContent(attributes.responsibilities)}
                                </div>
                            </motion.div>
                        )}

                        {/* Benefits */}
                        {attributes.benefits && (
                            <motion.div
                                className="mb-12 bg-gradient-to-br from-ph/5 to-ph/10 p-8 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                <h2 className="text-2xl font-medium text-foreground mb-6">Benefits & Perks</h2>
                                <div className="space-y-3">
                                    {renderContent(attributes.benefits)}
                                </div>
                            </motion.div>
                        )}

                        {/* Apply CTA */}
                        <motion.div
                            className="text-center py-12 bg-white border-t border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                        >
                            <h3 className="text-2xl font-medium text-foreground mb-4">
                                Ready to Join Our Team?
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Apply now and start building your career in wealth management marketing
                            </p>
                            <button
                                onClick={() => setShowApplicationForm(true)}
                                className="inline-flex items-center px-8 py-4 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Apply for This Position
                            </button>
                        </motion.div>
                    </div>
                </div>
            </article>

            {/* Application Form Modal */}
            {showApplicationForm && (
                <ApplicationFormModal
                    jobTitle={attributes.title}
                    onClose={() => setShowApplicationForm(false)}
                />
            )}
        </>
    );
};

// Application Form Modal Component
const ApplicationFormModal = ({ jobTitle, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        resume: null,
        coverLetter: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                onClose();
            }, 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Close Button */}
                    <div className="flex justify-end p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-8">
                        <h2 className="text-3xl font-display font-light text-foreground mb-2">
                            Apply for <span className="text-ph">{jobTitle}</span>
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Fill out the form below and we'll get back to you within 2-3 business days
                        </p>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-medium text-foreground mb-2">Application Submitted!</h3>
                                <p className="text-muted-foreground">
                                    Thank you for your interest. We'll review your application and get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ph focus:border-transparent"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ph focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ph focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        LinkedIn Profile URL
                                    </label>
                                    <input
                                        type="url"
                                        name="linkedIn"
                                        value={formData.linkedIn}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ph focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Resume/CV * (PDF, DOC, DOCX)
                                    </label>
                                    <input
                                        type="file"
                                        name="resume"
                                        onChange={handleChange}
                                        accept=".pdf,.doc,.docx"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ph focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Cover Letter *
                                    </label>
                                    <textarea
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ph focus:border-transparent resize-none"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 px-6 py-3 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Submit Application
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default JobDetail;