// src/components/pricing/PricingHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Shield, BarChart, Zap } from "lucide-react";

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
                    className="absolute top-[50%] right-[40%] w-16 h-16 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                ></motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center justify-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <span className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm">
                            Transparent Pricing
                        </span>
                    </motion.div>

                    {/* Main headline - Updated from draft */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.2] tracking-tight text-foreground mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2
                        }}
                    >
                        Transparent, Scalable Pricing for{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-ph font-normal">
                                Wealth Management Growth
                            </span>
                            <motion.span
                                className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                            />
                        </span>
                    </motion.h1>

                    {/* Subheadline - Updated from draft */}
                    <motion.p
                        className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.4
                        }}
                    >
                        Choose the package that fits your firm's AUM growth goals. All packages include FINRA/SEC compliance, webinar funnel optimization, and monthly reporting.
                    </motion.p>

                    {/* Value propositions with premium card styling - Updated icons and content */}
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
                                title: "FINRA/SEC Compliance",
                                description: "Built-in regulatory compliance with every package"
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "Webinar Funnel Optimization",
                                description: "Educational marketing strategies that convert"
                            },
                            {
                                icon: <BarChart className="w-6 h-6" />,
                                title: "Monthly Reporting",
                                description: "Clear visibility on performance and ROI"
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
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <span className="text-sm text-muted-foreground mb-2">Explore Packages</span>
                        <motion.div
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ArrowDown className="w-5 h-5 text-ph" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingHero;