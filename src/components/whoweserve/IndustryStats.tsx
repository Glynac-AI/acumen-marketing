// src/components/whoweserve/IndustryStats.tsx
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, TrendingUp, Shield, Target } from "lucide-react";

const IndustryStats = () => {
    // Industry statistics from draft
    const industryStats = [
        {
            stat: "100,000",
            label: "Advisor shortage by 2034",
            icon: <AlertCircle className="w-5 h-5" />
        },
        {
            stat: "$83.5T",
            label: "Wealth transfer by 2048",
            icon: <TrendingUp className="w-5 h-5" />
        },
        {
            stat: "55%",
            label: "of HNW clients prioritize digital capabilities",
            icon: <Target className="w-5 h-5" />
        },
        {
            stat: "33%",
            label: "of HNWIs dissatisfied with current digital services",
            icon: <Shield className="w-5 h-5" />
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF]">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-light text-foreground mb-4">
                            Industry <span className="text-ph font-normal">Landscape</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            The wealth management industry is at a critical inflection point
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industryStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-lg border border-gray-100 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ph/10 text-ph mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-display font-light text-ph mb-2">
                                    {stat.stat}
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryStats;