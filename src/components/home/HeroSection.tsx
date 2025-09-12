// src/components/home/HeroSection.tsx
import React from "react";
import { motion, easeInOut } from "framer-motion";
import { ArrowRight, Briefcase, Building, ChartBar, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: easeInOut
            }
        }
    };

    // Features list with icons and text
    const features = [
        {
            icon: <Building className="w-5 h-5 text-ph" />,
            text: "RIAs & Family Offices"
        },
        {
            icon: <Briefcase className="w-5 h-5 text-ph" />,
            text: "Financial Advisors"
        },
        {
            icon: <ChartBar className="w-5 h-5 text-ph" />,
            text: "Wealth Management Firms"
        },
        {
            icon: <Shield className="w-5 h-5 text-ph" />,
            text: "Compliance-Aware"
        }
    ];

    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
            {/* Abstract background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large gradient circle */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-ph/5 rounded-full transform translate-x-1/2 -translate-y-1/4"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: "linear-gradient(#4F6BFF 1px, transparent 1px), linear-gradient(to right, #4F6BFF 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}></div>

                {/* Additional design elements */}
                <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-ph/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-ph/5 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Subtle overhead label */}
                    <motion.div
                        className="inline-block mb-6 px-4 py-1.5 bg-ph/10 text-ph text-sm font-medium rounded-full"
                        variants={itemVariants}
                    >
                        Specialized for Wealth Management
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-display font-light tracking-tight text-foreground mb-6"
                        variants={itemVariants}
                    >
                        Marketing Solutions Built for <br className="hidden sm:block" />
                        <span className="text-ph font-normal">the Wealth Management Industry</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
                        variants={itemVariants}
                    >
                        Acumen Marketing helps RIAs, family offices, and financial advisors grow
                        through strategy-led, compliance-aware marketing.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        variants={itemVariants}
                    >
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-ph text-white font-medium rounded-lg shadow-sm hover:bg-ph-dark transition-colors"
                            >
                                Get in Touch
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white text-foreground font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                Our Services
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Feature list */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-x-12 gap-y-4"
                        variants={itemVariants}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center"
                            >
                                <div className="flex items-center justify-center w-8 h-8 bg-ph/10 rounded-full mr-3">
                                    {feature.icon}
                                </div>
                                <span className="text-muted-foreground">{feature.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;