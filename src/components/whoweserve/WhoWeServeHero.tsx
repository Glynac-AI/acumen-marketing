// src/components/whoweserve/WhoWeServeHero.tsx
import React from "react";
import { motion } from "framer-motion";

const WhoWeServeHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Eyebrow text */}
                    <motion.span
                        className="inline-block text-sm font-medium text-ph tracking-wider uppercase mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Who We Serve
                    </motion.span>

                    {/* Main headline */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight text-[#0A2540] mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        Exclusively Serving{" "}
                        <span className="text-ph font-normal">Wealth Management Firms</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    >
                        Specialized expertise for the unique challenges of RIAs, IARs, Family Offices & Custodians
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServeHero;