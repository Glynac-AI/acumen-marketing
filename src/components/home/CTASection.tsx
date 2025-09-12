// src/components/home/CTASection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, FileText, Users, BarChart2, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
    // Value propositions based on the client document
    const valuePropositions = [
        {
            title: "Industry Expertise",
            description: "Deep understanding of wealth management marketing requirements",
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "Compliance-Aware",
            description: "All marketing materials and strategies are created with regulations in mind",
            icon: <Shield className="w-5 h-5" />
        },
        {
            title: "Data-Driven Approach",
            description: "Analytics-based campaigns that deliver measurable results",
            icon: <BarChart2 className="w-5 h-5" />
        },
        {
            title: "Content Expertise",
            description: "Specialized knowledge in financial services communication",
            icon: <FileText className="w-5 h-5" />
        },
        {
            title: "Client-Focused",
            description: "Strategies tailored to your firm's unique positioning and goals",
            icon: <Users className="w-5 h-5" />
        }
    ];

    return (
        <section className="py-28 relative overflow-hidden">
            {/* Rich gradient background with deeper colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-ph/95 to-[#3A56E8] pointer-events-none"></div>

            {/* Abstract background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-white/5 rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-white/5 rounded-tr-[200px]"></div>

                {/* Abstract circles with more pronounced borders */}
                <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-white/15"></div>
                <div className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-white/15"></div>
                <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-white/15"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-light tracking-wide text-white mb-6">
                            Grow Your Wealth Management Practice
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Partner with Acumen Marketing to strengthen your digital presence, generate qualified leads, and build trust with prospects and clients.
                        </p>
                    </motion.div>

                    {/* Value Propositions */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {valuePropositions.map((prop, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            >
                                <div className="flex items-start">
                                    <div className="mr-4 mt-1 bg-white/20 p-2 rounded-lg">
                                        {prop.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg font-medium mb-2">{prop.title}</h3>
                                        <p className="text-white/80 text-sm">{prop.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Key features with checkmarks */}
                    <motion.div
                        className="max-w-3xl mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Strategy-led marketing plans",
                                "Compliance-aware execution",
                                "Industry-specific expertise",
                                "Measurable ROI focus",
                                "Content that builds trust",
                                "Digital-first approach"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                                    <span className="text-white">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ph text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                Discover How We Can Help You Grow
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;