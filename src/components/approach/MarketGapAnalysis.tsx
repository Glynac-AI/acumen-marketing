// src/components/approach/MarketGapAnalysis.tsx
import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const MarketGapAnalysis = () => {
    const comparisonData = [
        {
            category: "Pricing",
            traditional: "Opaque pricing",
            acumen: "Transparent pricing",
            advantage: true
        },
        {
            category: "Target Market",
            traditional: "Enterprise-only focus",
            acumen: "Mid-market RIA focus",
            advantage: true
        },
        {
            category: "Approach",
            traditional: "PR-first approach",
            acumen: "Performance-first approach",
            advantage: true
        },
        {
            category: "Specialization",
            traditional: "Generic financial services",
            acumen: "Exclusive wealth management",
            advantage: true
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
                            Competitive Positioning
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            <span className="text-ph font-normal">Market Gap Analysis</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            How Acumen Labs differs from traditional marketing agencies serving financial services
                        </p>
                    </motion.div>

                    {/* Comparison Table */}
                    <motion.div
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-[#F8FAFF] border-b border-gray-200">
                            <div className="p-6 font-medium text-foreground">
                                Category
                            </div>
                            <div className="p-6 font-medium text-foreground border-l border-gray-200">
                                Traditional Agencies
                            </div>
                            <div className="p-6 font-medium text-ph border-l border-gray-200">
                                Acumen Labs
                            </div>
                        </div>

                        {/* Table Body */}
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-3 border-b border-gray-100 last:border-b-0"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="p-6 font-medium text-foreground bg-gray-50">
                                    {row.category}
                                </div>
                                <div className="p-6 border-l border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">{row.traditional}</span>
                                    </div>
                                </div>
                                <div className="p-6 border-l border-gray-200 bg-ph/5">
                                    <div className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-ph flex-shrink-0" />
                                        <span className="text-foreground font-medium">{row.acumen}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Summary */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            While traditional agencies serve a broad range of financial services clients with opaque pricing and enterprise focus,
                            Acumen Labs specializes exclusively in wealth management with transparent pricing and a performance-first approach
                            designed for mid-market RIAs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketGapAnalysis;