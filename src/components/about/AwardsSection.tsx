// src/components/about/AwardsSection.tsx 
import React from "react";
import { motion } from "framer-motion";
import { Award, Quote, Newspaper, CheckCircle } from "lucide-react";

const AwardsSection = () => {
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
                            Recognition & Trust
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Awards & <span className="text-ph font-normal">Recognition</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Recognized by industry leaders and trusted by wealth management firms nationwide
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Industry Awards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                    <Award className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-display font-light text-foreground">
                                    Industry Awards
                                </h3>
                            </div>

                            <div className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100">
                                <p className="text-muted-foreground leading-relaxed">
                                    Acumen Labs has been recognized by leading wealth management industry publications and organizations for our specialized expertise and innovative approach to compliance-first marketing.
                                </p>
                            </div>
                        </motion.div>

                        {/* Client Testimonials */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                    <Quote className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-display font-light text-foreground">
                                    Client Testimonials
                                </h3>
                            </div>

                            <div className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100">
                                <p className="text-muted-foreground leading-relaxed">
                                    Our clients consistently report high satisfaction rates, with 92% satisfaction and an average of 32% AUM growth. Wealth management firms trust us to deliver compliant, effective marketing that drives real business results.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Media Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                    <Newspaper className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-display font-light text-foreground">
                                    Media Features
                                </h3>
                            </div>

                            <div className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100">
                                <p className="text-muted-foreground leading-relaxed">
                                    Our team members have been featured in leading wealth management publications and have presented at major industry conferences, sharing insights on compliance-first marketing strategies.
                                </p>
                            </div>
                        </motion.div>

                        {/* Certifications & Partnerships */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-display font-light text-foreground">
                                    Certifications & Partnerships
                                </h3>
                            </div>

                            <div className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100">
                                <p className="text-muted-foreground leading-relaxed">
                                    Our team maintains certifications and partnerships with leading marketing technology platforms and compliance organizations, ensuring we stay current with industry best practices and regulatory requirements.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;