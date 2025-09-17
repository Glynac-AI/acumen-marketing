// src/components/about/AboutHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const AboutHero = () => {
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
                        <span className="text-sm text-ph font-medium uppercase tracking-wider">Who We Are</span>
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
                                Marketing
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span> Experts for
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight">
                            <span className="text-ph font-normal">Wealth Management</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle with fade up animation */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.4
                        }}
                    >
                        Acumen Marketing combines deep industry knowledge with modern marketing
                        execution to help wealth management firms build trust, generate leads,
                        and grow AUM.
                    </motion.p>

                    {/* Key metrics with premium card styling */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-12 mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.6
                        }}
                    >
                        {[
                            { value: "15+", label: "Years of Experience" },
                            { value: "$8B+", label: "AUM Influenced" },
                            { value: "100+", label: "Wealth Firms Served" }
                        ].map((metric, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-white/50 backdrop-blur-sm px-8 py-5 rounded-sm border border-gray-100 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                <div className="text-3xl md:text-4xl font-display text-ph mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Refined scroll indicator */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{
                            duration: 1.2,
                            delay: 1
                        }}
                    >
                        <motion.div
                            className="flex flex-col items-center text-muted-foreground hover:text-ph transition-colors duration-300 cursor-pointer"
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                                repeatDelay: 0.5
                            }}
                            onClick={() => {
                                document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="text-sm mb-2">Our Story</span>
                            <ArrowDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;