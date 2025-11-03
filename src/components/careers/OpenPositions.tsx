// src/components/careers/OpenPositions.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Calendar, ArrowRight } from "lucide-react";
import { getJobPostings, getJobDepartments } from "@/services/strapiService";

const OpenPositions = () => {
    const [jobs, setJobs] = useState([]);
    const [departments, setDepartments] = useState(['All']);
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [jobData, depts] = await Promise.all([
                getJobPostings(selectedDepartment),
                getJobDepartments()
            ]);
            setJobs(jobData);
            setDepartments(depts);
            setLoading(false);
        };

        fetchData();
    }, [selectedDepartment]);

    // Helper to render rich text content
    const renderText = (content) => {
        if (!Array.isArray(content)) return '';
        return content.map((block) => {
            if (block.type === 'paragraph') {
                return block.children?.map((child) => child.text).join(' ');
            }
            return '';
        }).join(' ');
    };

    return (
        <section className="py-24 bg-[#F8FAFF]">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            Open Positions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Current <span className="text-ph font-normal">Opportunities</span>
                        </h2>
                    </motion.div>

                    {/* Department Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedDepartment === dept
                                        ? 'bg-ph text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>

                    {/* Job Listings */}
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block w-16 h-16 border-4 border-ph border-t-transparent rounded-full animate-spin"></div>
                            <p className="mt-4 text-muted-foreground">Loading positions...</p>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-lg border border-gray-100">
                            <p className="text-xl text-muted-foreground mb-4">No open positions at the moment.</p>
                            <p className="text-muted-foreground">Check back soon or send us your resume for future opportunities.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {jobs.map((job, index) => {
                                const attributes = job.attributes || job;
                                return (
                                    <motion.div
                                        key={job.id}
                                        className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-medium text-foreground mb-3">
                                                    {attributes.title}
                                                </h3>
                                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                                    {renderText(attributes.description)}
                                                </p>
                                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center">
                                                        <MapPin className="w-4 h-4 mr-2 text-ph" />
                                                        {attributes.location}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Briefcase className="w-4 h-4 mr-2 text-ph" />
                                                        {attributes.jobType}
                                                    </div>
                                                    {attributes.department && (
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-2 text-ph" />
                                                            {attributes.department}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <Link
                                                    to={`/careers/${attributes.slug}`}
                                                    className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all"
                                                >
                                                    View Details
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;