// src/components/about/AboutHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#F8FAFF] overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#F0F4FF] -z-10"></div>

            {/* Subtle background pattern that fades in */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(rgba(79,107,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.01)_1px,transparent_1px)] bg-[length:50px_50px] -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5 }}
            ></motion.div>

            {/* Animated gradient blob */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-b from-ph/5 to-transparent blur-3xl opacity-30 -z-10"
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
                <div className="max-w-5xl mx-auto">
                    {/* Pre-title */}
                    <motion.div
                        className="flex items-center justify-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="h-px w-8 bg-ph/40 mr-3"></div>
                        <span className="text-sm text-ph font-medium uppercase tracking-wider">Who We Are</span>
                        <div className="h-px w-8 bg-ph/40 ml-3"></div>
                    </motion.div>

                    {/* Main title with text reveal animation */}
                    <div className="text-center mb-8">
                        <motion.div
                            className="overflow-hidden mb-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] tracking-tight text-[#0A2540]"
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            >
                                Marketing Experts for
                            </motion.h1>
                        </motion.div>

                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] tracking-tight"
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            >
                                <span className="text-ph font-normal">Wealth Management</span>
                            </motion.h1>
                        </motion.div>
                    </div>

                    {/* Subtitle with fade in animation */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Acumen Marketing combines deep industry knowledge with modern marketing
                        execution to help wealth management firms build trust, generate leads,
                        and grow AUM.
                    </motion.p>

                    {/* Key metrics in elegant pills */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-8 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {[
                            { value: "15+", label: "Years of Experience" },
                            { value: "$8B+", label: "AUM Influenced" },
                            { value: "100+", label: "Wealth Firms Served" }
                        ].map((metric, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
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

                    {/* Scroll indicator */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <motion.div
                            className="flex flex-col items-center text-muted-foreground hover:text-ph transition-colors duration-300 cursor-pointer"
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
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