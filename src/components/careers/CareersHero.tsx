// src/components/careers/CareersHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const CareersHero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-white to-[#EDF3FF] z-0"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ph/10 text-ph mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Briefcase className="w-8 h-8" />
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Build Your Career in{" "}
                        <span className="text-ph font-normal">Wealth Management Marketing</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Join a team of specialists dedicated exclusively to helping RIAs, family offices, and wealth management firms grow through compliance-first digital marketing
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-100">
                            <div className="text-3xl font-light text-ph mb-2">Remote-First</div>
                            <div className="text-sm text-muted-foreground">Work from anywhere in the US</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-100">
                            <div className="text-3xl font-light text-ph mb-2">Growth Focus</div>
                            <div className="text-sm text-muted-foreground">Professional development budget</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-100">
                            <div className="text-3xl font-light text-ph mb-2">Industry Experts</div>
                            <div className="text-sm text-muted-foreground">Specialized wealth management team</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CareersHero;