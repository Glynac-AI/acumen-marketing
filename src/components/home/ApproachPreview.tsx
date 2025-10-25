// src/components/home/ApproachPreview.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Shield, TrendingUp, Users, ArrowRight } from "lucide-react";

const ApproachPreview = () => {
    const pillars = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Exclusive Focus",
            description: "Only RIAs, IARs, Family Offices & Custodians"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Compliance-First",
            description: "FINRA/SEC embedded in every strategy"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Results-Driven",
            description: "AUM growth, not vanity metrics"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Trust-Building",
            description: "Educational content & thought leadership"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            Our Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Performance-First Marketing Built for{" "}
                            <span className="text-ph font-normal">Wealth Management</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            A compliance-first, results-driven methodology designed exclusively for financial services
                        </p>
                    </motion.div>

                    {/* Four Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100 text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="w-14 h-14 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-5 group-hover:bg-ph group-hover:text-white transition-all">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link
                            to="/approach"
                            className="inline-flex items-center text-ph font-medium hover:text-ph-dark transition-colors text-lg"
                        >
                            Learn About Our Complete Methodology
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ApproachPreview;