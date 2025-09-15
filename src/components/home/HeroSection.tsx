// src/components/home/HeroSection.tsx
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Rotating value propositions
    const valueProps = [
        "Strengthen digital presence",
        "Generate qualified leads",
        "Build trust with clients",
        "Scale outreach & visibility"
    ];

    // Smooth rotation through marketing pillars
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % valueProps.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Animation variants for staggered reveal
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const fadeInUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Special text reveal animation for the main headline
    const textRevealVariants: Variants = {
        hidden: { y: 100 },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative py-24 md:py-32 bg-[#F8FAFF]">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#F0F4FF] -z-10"></div>

            {/* Subtle background pattern that fades in */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(rgba(79,107,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.01)_1px,transparent_1px)] bg-[length:50px_50px] -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            ></motion.div>

            {/* Very subtle animated gradient blob */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-b from-ph/5 to-transparent blur-3xl opacity-30 -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: [0.8, 1.2, 0.9],
                    opacity: [0, 0.3, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="container mx-auto px-6">
                {/* Main content with staggered animation */}
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Main headline with text reveal animation */}
                    <div className="mb-8">
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] tracking-tight text-[#0A2540]"
                                variants={textRevealVariants}
                            >
                                <span className="block mb-3">Marketing Solutions</span>
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] tracking-tight text-[#0A2540]"
                                variants={textRevealVariants}
                                transition={{ delay: 0.1 }}
                            >
                                <span className="block mb-3">Built for the <span className="text-ph font-normal">
                                    Wealth Management
                                </span></span>
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] tracking-tight text-[#0A2540]"
                                variants={textRevealVariants}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="block">Industry</span>
                            </motion.h1>
                        </div>
                    </div>

                    {/* Subtitle with fade in animation */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
                        variants={fadeInUpVariants}
                        transition={{ delay: 0.4 }}
                    >
                        Acumen Marketing (AM) helps RIAs, family offices, and financial advisors grow through strategy-led, compliance-aware marketing.
                    </motion.p>

                    {/* Animated rotating text */}
                    <motion.div
                        className="relative h-10 mb-12 overflow-hidden"
                        variants={fadeInUpVariants}
                        transition={{ delay: 0.6 }}
                    >
                        {valueProps.map((prop, index) => (
                            <motion.div
                                key={prop}
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    y: activeIndex === index ? 0 : 20
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-lg text-muted-foreground flex items-center">
                                    <motion.span
                                        className="w-2 h-2 rounded-full bg-ph mr-3"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    ></motion.span>
                                    {prop}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA button with subtle hover effect */}
                    <motion.div
                        className="flex justify-center"
                        variants={fadeInUpVariants}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-ph text-white font-medium transition-all"
                            >
                                Discover how we can help you grow
                                <motion.div
                                    className="ml-2"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Client types with staggered fade in */}
                    <motion.div
                        className="mt-16 flex justify-center"
                        variants={fadeInUpVariants}
                        transition={{ delay: 1 }}
                    >
                        <div className="flex flex-wrap justify-center gap-3">
                            {["RIAs", "Family Offices", "Financial Advisors"].map((client, index) => (
                                <motion.span
                                    key={client}
                                    className="px-4 py-1 rounded-full bg-white border border-gray-200 text-muted-foreground text-sm"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + (index * 0.1) }}
                                >
                                    {client}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;