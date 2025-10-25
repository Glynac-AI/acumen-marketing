// src/components/home/ProblemSolution.tsx
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
    const challenges = [
        "100,000 advisor shortage by 2034",
        "70% of next-gen clients will switch advisors",
        "Mid-market RIAs underserved by traditional agencies"
    ];

    const solutions = [
        {
            title: "Exclusive Focus on Wealth Management",
            description: "We only work with RIAs, IARs, Family Offices & Custodians—no generic financial services"
        },
        {
            title: "FINRA/SEC Compliance-First",
            description: "Every strategy is built with regulatory compliance embedded from day one"
        },
        {
            title: "Educational Webinar Strategies",
            description: "Trust-building content that converts prospects without hard-sell tactics"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* The Challenge */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-6">
                                <AlertCircle className="w-6 h-6" />
                            </div>

                            <h2 className="text-3xl font-display font-light tracking-tight text-foreground mb-6">
                                The <span className="text-red-600 font-normal">Challenge</span>
                            </h2>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Wealth management firms face unprecedented marketing challenges in an evolving landscape:
                            </p>

                            <div className="space-y-4">
                                {challenges.map((challenge, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start bg-red-50 p-4 rounded-lg border border-red-100"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{challenge}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Our Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ph/10 text-ph mb-6">
                                <CheckCircle className="w-6 h-6" />
                            </div>

                            <h2 className="text-3xl font-display font-light tracking-tight text-foreground mb-6">
                                Our <span className="text-ph font-normal">Solution</span>
                            </h2>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Acumen Labs delivers specialized marketing solutions designed specifically for wealth management:
                            </p>

                            <div className="space-y-6">
                                {solutions.map((solution, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#F8FAFF] p-6 rounded-lg border border-gray-100"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -3 }}
                                    >
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-ph mr-3 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-medium text-foreground mb-2">
                                                    {solution.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {solution.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;