// src/components/pricing/PricingHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Shield, BarChart, Users } from "lucide-react";

const PricingHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-40 pb-32 overflow-visible">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Sophisticated background elements */}
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
                        <span className="text-sm text-ph font-medium uppercase tracking-wider">Investment in Growth</span>
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
                                Transparent
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span> Pricing for
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
                        Flexible service packages designed specifically for wealth management firms
                        at every stage of growth. No hidden fees, just clear value.
                    </motion.p>

                    {/* Value propositions with premium card styling */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-8 mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.6
                        }}
                    >
                        {[
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Compliance-First",
                                description: "Built-in regulatory compliance with every package"
                            },
                            {
                                icon: <BarChart className="w-6 h-6" />,
                                title: "Results-Driven",
                                description: "Clear reporting on performance and ROI"
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: "Specialized Teams",
                                description: "Industry experts dedicated to your success"
                            }
                        ].map((prop, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/70 backdrop-blur-sm px-6 py-5 rounded-sm border border-gray-100 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 flex-shrink-0">
                                        {prop.icon}
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground">{prop.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{prop.description}</p>
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
                                document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="text-sm mb-2">Explore Our Plans</span>
                            <ArrowDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingHero;