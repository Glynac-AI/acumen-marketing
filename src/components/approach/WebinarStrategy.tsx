// src/components/approach/WebinarStrategy.tsx
import React from "react";
import { motion } from "framer-motion";
import { Video, Users, TrendingUp, CheckCircle } from "lucide-react";

const WebinarStrategy = () => {
    const benefits = [
        "Educational content builds trust with HNW prospects",
        "Compliance-approved presentation frameworks",
        "60% average webinar show rate",
        "Positions advisors as thought leaders",
        "Creates reusable content assets",
        "Enables personalized follow-up sequences"
    ];

    const contentPillars = [
        {
            title: "Retirement Planning & Wealth Transfer",
            description: "Address the concerns of clients approaching retirement and planning intergenerational wealth transfer"
        },
        {
            title: "Tax-Efficient Strategies",
            description: "Demonstrate expertise in tax optimization, Roth conversions, and tax-loss harvesting"
        },
        {
            title: "ESG & Alternative Investments",
            description: "Showcase knowledge in emerging investment trends that appeal to next-gen wealth holders"
        },
        {
            title: "Regulatory Updates & Compliance",
            description: "Keep clients informed on changing regulations and their impact on wealth management"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
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
                            Educational Marketing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Our{" "}
                            <span className="text-ph font-normal">Webinar-First</span> Approach
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Educational webinars are the cornerstone of our lead generation strategy,
                            building trust and demonstrating expertise to high-net-worth prospects
                        </p>
                    </motion.div>

                    {/* Why Webinars Work */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="bg-white p-8 rounded-lg border border-gray-100 h-full">
                                <Video className="w-12 h-12 text-ph mb-6" />
                                <h3 className="text-2xl font-medium text-foreground mb-4">
                                    Why Webinars Work for Wealth Management
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    High-net-worth individuals don't respond to traditional hard-sell tactics.
                                    They need education, trust-building, and demonstrated expertise before
                                    they'll consider switching advisors or engaging new financial services.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our webinar strategy positions your firm as a trusted authority, providing
                                    genuine value while naturally leading prospects toward a consultation.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="bg-white p-8 rounded-lg border border-gray-100 h-full">
                                <TrendingUp className="w-12 h-12 text-ph mb-6" />
                                <h3 className="text-2xl font-medium text-foreground mb-4">
                                    Proven Results
                                </h3>
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-ph mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Pillars */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
                            Content Pillars for Wealth Management
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {contentPillars.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-lg border border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                                >
                                    <h4 className="text-lg font-medium text-foreground mb-3">
                                        {pillar.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Post-Webinar Nurture */}
                    <motion.div
                        className="mt-12 bg-gradient-to-br from-ph to-ph-dark text-white p-8 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-start gap-4">
                            <Users className="w-8 h-8 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-medium mb-3">
                                    Post-Webinar Nurture Sequences
                                </h3>
                                <p className="text-white/90 leading-relaxed mb-4">
                                    The webinar is just the beginning. Our automated nurture sequences continue
                                    the conversation with personalized follow-up content, case studies, and relevant
                                    insights based on attendee behavior and engagement.
                                </p>
                                <p className="text-white/90 leading-relaxed">
                                    This multi-touch approach keeps your firm top-of-mind while prospects move
                                    through their decision-making process, ultimately converting 60% of engaged
                                    attendees into qualified leads.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WebinarStrategy;