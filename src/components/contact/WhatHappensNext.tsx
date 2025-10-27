// src/components/contact/WhatHappensNext.tsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Shield, Rocket, CheckCircle } from "lucide-react";

const WhatHappensNext = () => {
    const steps = [
        {
            number: "01",
            icon: <Phone className="w-6 h-6" />,
            title: "30-Minute Strategy Call",
            description: "We'll discuss your firm's goals, challenges, and marketing needs in detail."
        },
        {
            number: "02",
            icon: <FileText className="w-6 h-6" />,
            title: "Custom Proposal",
            description: "Receive a tailored proposal with package recommendation based on your specific situation."
        },
        {
            number: "03",
            icon: <Shield className="w-6 h-6" />,
            title: "Compliance & Discovery Audit",
            description: "We review your compliance requirements and current marketing assets."
        },
        {
            number: "04",
            icon: <Rocket className="w-6 h-6" />,
            title: "90-Day Growth Sprint Kickoff",
            description: "Begin execution with clear milestones and measurable objectives."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            The Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            What Happens <span className="text-ph font-normal">Next</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            A clear 4-step process from initial contact to growth sprint launch
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="bg-[#F8FAFF] p-6 rounded-lg border border-gray-100 h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                            {step.icon}
                                        </div>
                                        <span className="text-3xl font-display font-light text-ph/30">
                                            {step.number}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-ph/20"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm text-muted-foreground flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-ph mr-2" />
                            No obligation. Get a custom proposal based on your firm's specific needs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatHappensNext;