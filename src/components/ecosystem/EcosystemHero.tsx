// src/components/ecosystem/EcosystemHero.tsx
import React from "react";
import { motion } from "framer-motion";

const EcosystemHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Subtle decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            The Acumen Ecosystem
                        </motion.span>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Integrated Growth Solutions for{" "}
                            <span className="text-ph font-normal">Wealth Management</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Nine specialized companies working together to provide comprehensive support
                            for wealth management firms—from marketing and recruiting to strategy and technology.
                        </motion.p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-gray-100">
                            <div className="text-4xl font-light text-ph mb-2">9</div>
                            <div className="text-sm text-muted-foreground">Specialized Companies</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-gray-100">
                            <div className="text-4xl font-light text-ph mb-2">3x</div>
                            <div className="text-sm text-muted-foreground">Better Results vs. Fragmented Solutions</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-gray-100">
                            <div className="text-4xl font-light text-ph mb-2">100%</div>
                            <div className="text-sm text-muted-foreground">Wealth Management Focus</div>
                        </div>
                    </motion.div>

                   
                </div>
            </div>
        </section>
    );
};

export default EcosystemHero;