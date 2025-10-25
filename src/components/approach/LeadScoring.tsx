// src/components/approach/LeadScoring.tsx
import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Zap, Database, GitBranch } from "lucide-react";

const LeadScoring = () => {
    const scoringElements = [
        {
            icon: <Database className="w-6 h-6" />,
            title: "Progressive Profiling in Lead Capture",
            description: "Gradually collect more information about prospects over multiple interactions without overwhelming them at first touch."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Behavioral Tracking",
            description: "Monitor email opens, webinar attendance, website activity, and content downloads to gauge prospect interest and engagement level."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Dynamic Lead Scoring Based on Engagement",
            description: "Automatically adjust lead scores in real-time as prospects interact with your marketing materials and demonstrate buying intent."
        },
        {
            icon: <GitBranch className="w-6 h-6" />,
            title: "Automated Qualification Workflows",
            description: "Route high-scoring leads directly to sales while continuing to nurture prospects who need more education and touchpoints."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "CRM Integration for Sales Handoff",
            description: "Seamless integration with your CRM ensures sales teams receive complete prospect information and engagement history."
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative">
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
                            <span className="text-ph font-normal">Lead Scoring</span> & Qualification
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Intelligent lead scoring ensures your sales team focuses on the most qualified prospects
                        </p>
                    </motion.div>

                    {/* Scoring Elements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {scoringElements.map((element, index) => (
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
                </div>
            </div>
        </section>
    );
};

export default LeadScoring;