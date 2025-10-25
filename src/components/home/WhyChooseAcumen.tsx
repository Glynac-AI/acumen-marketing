// src/components/home/WhyChooseAcumen.tsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Shield, TrendingUp, Users } from "lucide-react";

const WhyChooseAcumen = () => {
    const pillars = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Industry Specialization",
            description: "We exclusively serve wealth management firms—no generic financial services, no learning curve. Every strategy is built on deep industry expertise."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Compliance-Aware",
            description: "FINRA/SEC regulations are embedded in every strategy from day one. We work hand-in-hand with your compliance team to ensure all marketing is fully compliant."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Results-Driven",
            description: "We focus on metrics that matter: AUM growth, qualified leads, and client acquisition—not vanity metrics like impressions or social media followers."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Trust-Building Focus",
            description: "Educational content and thought leadership that positions your firm as a trusted advisor, not aggressive sales tactics that turn off HNW prospects."
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Why Choose{" "}
                            <span className="text-ph font-normal">Acumen Labs</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We're not a typical marketing agency—we're wealth management marketing specialists
                        </p>
                    </motion.div>

                    {/* Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-4">
                                    {pillar.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseAcumen;