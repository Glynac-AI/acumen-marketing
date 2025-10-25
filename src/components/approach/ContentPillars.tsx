// src/components/approach/ContentPillars.tsx
import React from "react";
import { motion } from "framer-motion";
import { PiggyBank, TrendingUp, Leaf, Users2, FileText } from "lucide-react";

const ContentPillars = () => {
    const pillars = [
        {
            icon: <PiggyBank className="w-6 h-6" />,
            title: "Retirement Planning & Wealth Transfer",
            description: "Content addressing retirement readiness, income planning, and intergenerational wealth transfer strategies that resonate with clients approaching or in retirement."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Tax-Efficient Strategies",
            description: "Educational content on tax optimization, Roth conversions, tax-loss harvesting, and other strategies that help clients minimize tax burden."
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "ESG and Alternative Investments",
            description: "Thought leadership on environmental, social, and governance investing, plus alternative asset classes that diversify portfolios."
        },
        {
            icon: <Users2 className="w-6 h-6" />,
            title: "Generational Wealth Management",
            description: "Content focused on family wealth dynamics, educating next-generation wealth holders, and preparing for generational transitions."
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Regulatory Updates & Compliance",
            description: "Timely updates on regulatory changes, compliance requirements, and their impact on wealth management strategies."
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative">
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
                            Educational Marketing Strategy
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Content Pillars for{" "}
                            <span className="text-ph font-normal">Wealth Management</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Strategic content themes that address the key concerns and interests of high-net-worth prospects
                        </p>
                    </motion.div>

                    {/* Content Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-lg border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="w-14 h-14 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-5">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Context */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            These content pillars form the foundation of our educational marketing strategy,
                            ensuring every piece of content addresses real client concerns while positioning
                            your firm as a trusted advisor.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContentPillars;