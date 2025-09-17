// src/components/home/HeroSection.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

// Define value propositions for elegant transition
const valueProps = [
    "Strengthen digital presence",
    "Generate qualified leads",
    "Enhance client acquisition",
    "Build trusted relationships",
    "Drive measurable AUM growth"
];

const HeroSection = () => {
    const [currentValueProp, setCurrentValueProp] = useState(0);

    // Rotate through value propositions with smooth transitions
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentValueProp((prev) => (prev + 1) % valueProps.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-40 pb-32 overflow-visible">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Sophisticated background elements inspired by Acumen Recruiting */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Elegant abstract shapes */}
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>

                {/* Subtle circles that add depth without distraction */}
                <motion.div
                    className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>

                <motion.div
                    className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                ></motion.div>

                <motion.div
                    className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                ></motion.div>
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Pre-title with elegant fade up animation */}
                    <motion.div
                        className="flex items-center justify-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="h-px w-8 bg-ph/40 mr-3"></div>
                        <span className="text-sm text-ph font-medium uppercase tracking-wider">Marketing For Wealth Management</span>
                        <div className="h-px w-8 bg-ph/40 ml-3"></div>
                    </motion.div>

                    {/* Main title with sophisticated text highlight animations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2
                        }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight text-[#0A2540] mb-3">
                            <span className="relative inline-block">
                                Strategic
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span> Marketing to
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight">
                            <span className="text-ph font-normal">Grow AUM</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle with fade up animation */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.4
                        }}
                    >
                        Specialized marketing services for wealth management firms, RIAs,
                        family offices, and financial advisors.
                    </motion.p>

                    {/* Value proposition with elegant crossfade effect */}
                    <motion.div
                        className="h-12 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.6
                        }}
                    >
                        <div className="relative h-full flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentValueProp}
                                    className="text-ph font-medium absolute left-0 right-0"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    {valueProps[currentValueProp]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* CTA Buttons with premium hover effects */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.8
                        }}
                    >
                        <motion.div
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="/services"
                                className="group inline-flex items-center px-8 py-4 bg-ph text-white font-medium shadow-sm transition-all duration-300"
                            >
                                <span>Explore Our Services</span>
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-white text-foreground font-medium border border-gray-200 shadow-sm transition-all duration-300 hover:border-ph/30"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Client types with elegant card effects similar to Acumen Recruiting */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 1
                        }}
                    >
                        <p className="text-sm text-muted-foreground mb-4">Trusted by:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["RIAs", "Family Offices", "Wealth Management Firms", "Financial Advisors"].map((client, index) => (
                                <motion.span
                                    key={client}
                                    className="inline-block px-4 py-1 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-muted-foreground shadow-sm"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                                    whileHover={{
                                        y: -3,
                                        boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)",
                                        borderColor: "rgba(79,107,255,0.3)",
                                        color: "#4F6BFF"
                                    }}
                                >
                                    {client}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                   
                </div>
            </div>
        </section>
    );
};

export default HeroSection;