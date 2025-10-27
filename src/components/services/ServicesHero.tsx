// src/components/services/ServicesHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ServicesHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-white to-[#EDF3FF] z-0"></div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center justify-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm">
                            Our Services
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight text-[#0A2540] mb-3">
                            Comprehensive Wealth Management
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight">
                            <span className="relative inline-block text-ph font-normal">
                                Marketing Services
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mt-8 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    >
                        14 integrated service categories designed to drive measurable AUM growth
                    </motion.p>

                    {/* Service categories pills */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                    >
                        {[
                            "Strategy",
                            "Paid Media",
                            "Content & Creative",
                            "Organic Growth",
                            "Conversion",
                            "Analytics",
                            "Operations"
                        ].map((category, index) => (
                            <motion.div
                                key={category}
                                className="px-5 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-foreground hover:border-ph/30 hover:bg-ph/5 transition-all cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {category}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <span className="text-sm text-muted-foreground mb-2">Explore Services</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-5 h-5 text-ph" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;