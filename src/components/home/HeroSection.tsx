// src/components/home/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Main Hero Content */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Accelerate AUM Growth for Your{" "}
                            <span className="text-ph font-normal">Wealth Management Firm</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Compliance-first digital marketing exclusively for RIAs, IARs, Family Offices & Custodians.
                            Generate 15-120 MQLs monthly with transparent pricing and measurable ROI.
                        </motion.p>

                        {/* CTA Buttons - UPDATED */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg shadow-ph/20"
                                >
                                    Book Your 90-Day Growth Sprint
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/pricing"
                                    className="inline-flex items-center px-8 py-4 bg-white text-foreground font-medium rounded-lg border-2 border-gray-200 hover:border-ph transition-all"
                                >
                                    View Our Packages
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust Indicators - UPDATED WITH EXACT METRICS */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {[
                                {
                                    metric: "92%",
                                    label: "Client Satisfaction Rate"
                                },
                                {
                                    metric: "$200-400",
                                    label: "Cost Per Lead (Below Industry Average of $461)"
                                },
                                {
                                    metric: "32%",
                                    label: "Average AUM Growth in Year 1"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                                >
                                    <div className="flex items-center justify-center mb-2">
                                        <CheckCircle className="w-5 h-5 text-ph mr-2" />
                                        <div className="text-3xl font-display font-light text-ph">
                                            {item.metric}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground text-center">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;