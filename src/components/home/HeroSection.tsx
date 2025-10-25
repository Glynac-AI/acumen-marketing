// src/components/home/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
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

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-10 py-5 bg-ph text-white text-lg font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg shadow-ph/20"
                                >
                                    Book Your 90-Day Growth Sprint
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/pricing"
                                    className="inline-flex items-center px-10 py-5 bg-white text-foreground text-lg font-medium rounded-lg border-2 border-gray-200 hover:border-ph transition-all"
                                >
                                    View Our Packages
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;