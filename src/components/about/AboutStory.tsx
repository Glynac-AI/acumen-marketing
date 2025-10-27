// src/components/about/AboutStory.tsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const AboutStory = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            Our Story
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Built by <span className="text-ph font-normal">Wealth Management</span> Experts
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Acumen Labs was founded with a singular focus: to provide specialized marketing services exclusively for the wealth management industry
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        {/* Left column - Company Story */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h3 className="text-2xl font-display font-light text-foreground mb-8">
                                Company Founding Story
                            </h3>

                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    Acumen Labs was founded by former RIA marketers and fintech operators who recognized a critical gap in the marketing industry: wealth management firms were being underserved by generic marketing agencies that didn't understand their unique challenges.
                                </p>
                                <p>
                                    Having experienced firsthand the complexities of marketing within FINRA/SEC regulatory constraints, our founders set out to create an agency exclusively dedicated to the wealth management ecosystem.
                                </p>
                                <p>
                                    Today, Acumen Labs serves RIAs, IARs, Family Offices, and Custodians, bringing deep industry expertise and compliance-first marketing strategies that drive measurable AUM growth.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right column - Mission, Vision, and Values */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Mission statement - EXACT from draft */}
                            <div className="mb-12">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-display font-light text-foreground">
                                        Our Mission
                                    </h3>
                                </div>

                                <div className="bg-[#F8FAFF] p-8 border-l-4 border-ph">
                                    <p className="text-lg text-foreground leading-relaxed">
                                        Accelerate AUM growth for wealth management firms through compliance-first, performance-driven digital marketing
                                    </p>
                                </div>
                            </div>

                            {/* Vision statement - EXACT from draft */}
                            <div className="mb-12">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                        <Eye className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-display font-light text-foreground">
                                        Our Vision
                                    </h3>
                                </div>

                                <div className="bg-[#F8FAFF] p-8 border-l-4 border-ph">
                                    <p className="text-lg text-foreground leading-relaxed">
                                        To be the most trusted growth partner for RIAs, IARs, Family Offices, and Custodians
                                    </p>
                                </div>
                            </div>

                            {/* Core values */}
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                        <Heart className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-display font-light text-foreground">
                                        Core Values
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "Exclusive Focus",
                                            description: "We only work with wealth management firms, developing unmatched depth of expertise"
                                        },
                                        {
                                            title: "Compliance-First",
                                            description: "FINRA/SEC compliance embedded in every strategy and deliverable"
                                        },
                                        {
                                            title: "Results-Driven",
                                            description: "Measured by AUM growth and qualified leads, not vanity metrics"
                                        },
                                        {
                                            title: "Transparency",
                                            description: "Published pricing, clear deliverables, and real-time reporting"
                                        }
                                    ].map((value, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-ph mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <h4 className="font-medium text-foreground mb-1">{value.title}</h4>
                                                <p className="text-sm text-muted-foreground">{value.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;