// src/components/approach/ApproachHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Shield, TrendingUp, Users } from "lucide-react";

const ApproachHero = () => {
    const pillars = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Exclusive Focus",
            description: "We only work with RIAs, IARs, Family Offices & Custodians"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Compliance-First",
            description: "FINRA/SEC embedded in every strategy"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Results-Driven",
            description: "AUM growth and HNW acquisition, not vanity metrics"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Trust-Building",
            description: "Educational content, thought leadership, relationship marketing"
        }
    ];

    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Our Approach
                        </motion.span>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Performance-First Marketing Built for{" "}
                            <span className="text-ph font-normal">Wealth Management</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            A compliance-first, results-driven methodology designed exclusively for financial services
                        </motion.p>
                    </motion.div>

                    {/* Four Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm p-6 border border-gray-100 rounded-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachHero;