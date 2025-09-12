// src/components/home/HeroSection.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, BarChart2, FileText, Target } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const words = ['Strategic', 'Data-Driven', 'Compliance-Aware'];

    // Cycle through words on interval
    React.useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Features list with icons and text
    const features = [
        {
            icon: <Shield className="w-5 h-5" />,
            text: "Compliance-Aware"
        },
        {
            icon: <BarChart2 className="w-5 h-5" />,
            text: "Data-Driven Results"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            text: "Content Strategy"
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Wealth Management Focus"
        }
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8faff] to-white"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                {/* Sophisticated grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(79,107,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.03)_1px,transparent_1px)] bg-[length:80px_80px]"></div>

                {/* Elegant gradient accent */}
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-ph/5 to-transparent opacity-50"></div>

                {/* Subtle accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    className="min-h-screen flex flex-col justify-center items-center"
                    style={{ opacity: contentOpacity }}
                >
                    <div className="max-w-5xl w-full mx-auto">
                        {/* Top badge */}
                        <motion.div
                            className="flex justify-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="inline-block py-1.5 px-4 bg-ph/10 text-ph font-medium rounded-md text-sm">
                                Specialized for Wealth Management
                            </span>
                        </motion.div>

                        {/* Two-column layout for headline and description */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left column: Headline */}
                            <motion.div
                                className="lg:col-span-7"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-[#0A2540] leading-[1.1]">
                                    <span className="block">Marketing Solutions</span>
                                    <div className="h-20 relative mt-2 mb-2 overflow-hidden">
                                        {words.map((word, index) => (
                                            <motion.span
                                                key={word}
                                                className="absolute inset-0 text-ph font-normal"
                                                initial={{ opacity: 0, y: 40 }}
                                                animate={{
                                                    opacity: activeIndex === index ? 1 : 0,
                                                    y: activeIndex === index ? 0 : 40
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: [0.22, 1, 0.36, 1]
                                                }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <span className="block">for Wealth Management</span>
                                </h1>

                                {/* Feature tags - horizontal layout */}
                                <motion.div
                                    className="mt-10 flex flex-wrap gap-x-6 gap-y-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="flex items-center justify-center w-8 h-8 bg-ph/10 rounded-md mr-3">
                                                <div className="text-ph">{feature.icon}</div>
                                            </div>
                                            <span className="text-gray-600">{feature.text}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Right column: Description and CTA */}
                            <motion.div
                                className="lg:col-span-5"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="bg-white/80 backdrop-blur-sm p-8 border border-gray-100 rounded-xl shadow-sm">
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        Helping RIAs, family offices, and financial advisors grow through strategy-led, compliance-aware marketing that builds trust and generates qualified leads.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1"
                                        >
                                            <Link
                                                to="/contact"
                                                className="w-full group relative overflow-hidden rounded-md bg-[#4F6BFF] px-6 py-3 text-white shadow-sm flex items-center justify-center gap-2"
                                            >
                                                <span className="relative z-10 text-base font-medium">Get in Touch</span>
                                                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                                                <motion.span
                                                    className="absolute inset-0 bg-gradient-to-r from-[#4F6BFF] to-[#3A56E8]"
                                                    initial={{ x: "100%" }}
                                                    whileHover={{ x: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                            </Link>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1"
                                        >
                                            <Link
                                                to="/services"
                                                className="w-full group relative rounded-md border border-[#E5E7EB] px-6 py-3 text-[#0A2540] hover:border-[#4F6BFF]/30 transition-colors flex items-center justify-center"
                                            >
                                                <span className="text-base font-medium">Our Services</span>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Subtle divider */}
                                <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>

                                {/* Trust indicators */}
                                <motion.div
                                    className="mt-10 grid grid-cols-3 gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <div className="text-center">
                                        <div className="text-3xl font-light text-[#0A2540] mb-1">100%</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Compliance Rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-light text-[#0A2540] mb-1">3.2x</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Avg. ROI</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-light text-[#0A2540] mb-1">40+</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Wealth Firms</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>
        </section>
    );
};

export default HeroSection;