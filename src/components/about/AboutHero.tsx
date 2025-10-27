// src/components/about/AboutHero.tsx
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Eyebrow text */}
                    <motion.span
                        className="inline-block text-sm font-medium text-ph tracking-wider uppercase mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        About Acumen Labs
                    </motion.span>

                    {/* Main headline with sophisticated animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2
                        }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight text-[#0A2540] mb-3">
                            The{" "}
                            <span className="relative inline-block">
                                Wealth Management
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span>
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight">
                            <span className="text-ph font-normal">Marketing Specialists</span>
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
                        Former RIA marketers and fintech operators dedicated exclusively to your growth
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
                            { value: "92%", label: "Client Satisfaction" },
                            { value: "32%", label: "Average AUM Growth" },
                            { value: "100+", label: "Wealth Firms Served" }
                        ].map((metric, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-white/50 backdrop-blur-sm px-8 py-5 rounded-sm border border-gray-100 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.8 + index * 0.1
                                }}
                            >
                                <div className="text-3xl font-display font-light text-ph mb-1">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;