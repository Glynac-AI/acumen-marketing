// src/components/pricing/PricingTabs.tsx
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PricingTabs = ({ activeTab, setActiveTab }) => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    return (
        <section
            ref={sectionRef}
            className="py-12 relative bg-white"
            id="pricing-plans"
        >
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-12"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Flexible Options
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Choose Your <span className="text-ph">Engagement Model</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Select the approach that best aligns with your wealth management firm's needs and goals
                    </motion.p>
                </motion.div>

                {/* Tab selection */}
                <div className="max-w-3xl mx-auto mb-16">
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { id: "retainers", label: "Monthly Retainers", description: "Ongoing marketing partnership with dedicated support" },
                            { id: "projects", label: "Project-Based", description: "Focused initiatives for specific marketing objectives" },
                            { id: "advisory", label: "Strategic Advisory", description: "Expert guidance for firms with internal execution teams" }
                        ].map((tab) => (
                            <motion.div
                                key={tab.id}
                                className={`cursor-pointer p-6 border transition-all duration-300 ${activeTab === tab.id
                                        ? "border-ph bg-[#F8FAFF] shadow-sm"
                                        : "border-gray-200 bg-white hover:border-ph/30"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className={`text-lg font-medium mb-2 ${activeTab === tab.id ? "text-ph" : "text-foreground"
                                    }`}>
                                    {tab.label}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {tab.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTabs;