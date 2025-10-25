// src/components/approach/MultiTouchAttribution.tsx
import React from "react";
import { motion } from "framer-motion";
import { GitMerge, DollarSign, BarChart3, Map, LineChart } from "lucide-react";

const MultiTouchAttribution = () => {
    const attributionElements = [
        {
            icon: <GitMerge className="w-6 h-6" />,
            title: "UTM Parameter Tracking for All Campaigns",
            description: "Comprehensive tracking codes on every marketing link to understand exactly which campaigns drive results."
        },
        {
            icon: <Map className="w-6 h-6" />,
            title: "Attribution Models to Understand Customer Journeys",
            description: "Multiple attribution models (first-touch, last-touch, linear) reveal how prospects interact with your marketing before converting."
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "ROI Calculation Per Marketing Channel",
            description: "Precise cost-per-lead and cost-per-acquisition metrics for each channel inform budget allocation decisions."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Lead Source Reporting and Analysis",
            description: "Detailed reporting shows which traffic sources generate the highest quality leads and best conversion rates."
        },
        {
            icon: <LineChart className="w-6 h-6" />,
            title: "Conversion Path Analysis",
            description: "Visualize the complete journey prospects take from first touch to qualified lead, identifying optimization opportunities."
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
                            Strategic Framework
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            <span className="text-ph font-normal">Multi-Touch Attribution</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Understand the complete customer journey and optimize every touchpoint
                        </p>
                    </motion.div>

                    {/* Attribution Elements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {attributionElements.map((element, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                    {element.icon}
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-3">
                                    {element.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {element.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Value Proposition */}
                    <motion.div
                        className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center max-w-3xl mx-auto">
                            <h3 className="text-xl font-medium text-foreground mb-4">
                                Data-Driven Marketing Decisions
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                With comprehensive attribution tracking, you'll know exactly which marketing activities drive the best results, allowing you to allocate budget to the highest-performing channels and continuously improve your marketing ROI.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MultiTouchAttribution;