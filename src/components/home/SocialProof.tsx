// src/components/home/SocialProof.tsx
import React from "react";
import { motion } from "framer-motion";
import { Quote, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SocialProof = () => {
    const caseStudyPreviews = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            client: "Everest Wealth Advisors",
            type: "Independent RIA • $750M AUM",
            metric: "28%",
            metricLabel: "Increase in Qualified HNW Leads",
            result: "$150M in AUM added in year one"
        },
        {
            icon: <Users className="w-6 h-6" />,
            client: "Legacy Wealth Management",
            type: "Multi-Family Office • $2.3B AUM",
            metric: "68%",
            metricLabel: "Increase in Qualified Prospects",
            result: "35% reduction in client acquisition cost"
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            client: "Tri-State Financial Services",
            type: "Regional Custodian • 150+ RIAs",
            metric: "41%",
            metricLabel: "Reduction in CAC",
            result: "50+ new RIA partnerships in 12 months"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Featured Testimonial */}
                    <motion.div
                        className="mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="bg-gradient-to-br from-ph to-ph-dark text-white p-12 rounded-2xl relative overflow-hidden">
                            {/* Decorative quote */}
                            <div className="absolute top-8 right-8 opacity-10">
                                <Quote className="w-24 h-24" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-2xl font-light leading-relaxed mb-8">
                                    "We saw 28% more qualified HNW leads and added $150M in AUM in year one.
                                    Their compliance expertise saved us from regulatory headaches while driving real growth."
                                </p>

                                <div className="flex items-center">
                                    <div>
                                        <div className="font-medium text-lg">Michael Thompson</div>
                                        <div className="text-white/80">Managing Partner, Everest Wealth Advisors</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Case Study Preview Cards */}
                    <div className="mb-12">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl font-display font-light text-foreground mb-4">
                                Proven Results Across{" "}
                                <span className="text-ph font-normal">Wealth Management</span>
                            </h2>
                            <p className="text-muted-foreground">
                                Real outcomes from firms we've helped grow
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {caseStudyPreviews.map((study, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#F8FAFF] p-6 rounded-lg border border-gray-100"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                        {study.icon}
                                    </div>

                                    <h3 className="text-lg font-medium text-foreground mb-2">
                                        {study.client}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4">
                                        {study.type}
                                    </p>

                                    <div className="mb-4">
                                        <div className="text-3xl font-light text-ph mb-1">
                                            {study.metric}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {study.metricLabel}
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        {study.result}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Aggregate Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white border border-gray-100 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center">
                            <div className="text-3xl font-light text-ph mb-2">32%</div>
                            <div className="text-sm text-muted-foreground">Average AUM Growth</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-light text-ph mb-2">68%</div>
                            <div className="text-sm text-muted-foreground">Increase in Qualified HNW Leads</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-light text-ph mb-2">41%</div>
                            <div className="text-sm text-muted-foreground">Reduction in CAC</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-light text-ph mb-2">92%</div>
                            <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;