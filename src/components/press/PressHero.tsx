// src/components/press/PressHero.tsx
import React from "react";
import { motion } from "framer-motion";

const PressHero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Subtle decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Press & Media
                    </motion.span>

                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Acumen Labs in the{" "}
                        <span className="text-ph font-normal">News</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Press releases, media coverage, and brand resources for journalists and partners
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default PressHero;