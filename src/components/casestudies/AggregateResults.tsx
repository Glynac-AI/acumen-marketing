// src/components/casestudies/AggregateResults.tsx
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Star } from "lucide-react";

const AggregateResults = () => {
    // Aggregate metrics from draft
    const aggregateMetrics = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            stat: "32%",
            label: "Average AUM Growth",
            description: "Across all client engagements"
        },
        {
            icon: <Users className="w-8 h-8" />,
            stat: "68%",
            label: "Increase in Qualified HNW Leads",
            description: "For wealth management firms"
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            stat: "41%",
            label: "Reduction in Client Acquisition Cost",
            description: "Below industry average"
        },
        {
            icon: <Star className="w-8 h-8" />,
            stat: "92%",
            label: "Client Satisfaction Rate",
            description: "Consistently high ratings"
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
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-display font-light mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Aggregate <span className="font-normal">Impact</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-white/90 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Consistent, measurable results across our wealth management client portfolio
                        </motion.p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aggregateMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center h-full">
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6">
                                        {metric.icon}
                                    </div>

                                    {/* Stat */}
                                    <div className="text-5xl font-display font-light mb-3">
                                        {metric.stat}
                                    </div>

                                    {/* Label */}
                                    <div className="text-lg font-medium mb-2">
                                        {metric.label}
                                    </div>

                                    {/* Description */}
                                    <div className="text-sm text-white/70">
                                        {metric.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AggregateResults;