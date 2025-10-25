// src/components/ecosystem/EcosystemValue.tsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";

const EcosystemValue = () => {
    const benefits = [
        "Comprehensive client acquisition, engagement, and retention",
        "Data sharing across brands improves targeting and results",
        "Seamless hand-offs between services create better client experiences",
        "Cross-selling opportunities increase lifetime value",
        "Coordinated strategies align all growth initiatives",
        "Reduced vendor management overhead"
    ];

    const stats = [
        {
            value: "3x",
            label: "Better Results",
            description: "vs. single-point solutions"
        },
        {
            value: "5",
            label: "Specialized Brands",
            description: "Working together"
        },
        {
            value: "100%",
            label: "Wealth Management",
            description: "Exclusive focus"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-ph to-ph-dark text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight mb-6">
                            The Acumen{" "}
                            <span className="font-normal">Advantage</span>
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            While others offer fragmented services, Acumen delivers an end-to-end growth engine
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="text-5xl md:text-6xl font-light mb-3">
                                    {stat.value}
                                </div>
                                <div className="text-xl font-medium mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-white/70">
                                    {stat.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Benefits Grid */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-medium mb-8 text-center">
                            Integrated Ecosystem Benefits
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-white/90 leading-relaxed">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Value Proposition Statement */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                            Our integrated ecosystem provides <strong>3x better results</strong> than single-point solutions,
                            driving comprehensive client acquisition, engagement, and retention for your wealth management firm.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemValue;