// src/components/careers/ApplicationProcess.tsx
import React from "react";
import { motion } from "framer-motion";
import { FileText, Users, CheckCircle, Rocket } from "lucide-react";

const ApplicationProcess = () => {
    const steps = [
        {
            number: "01",
            icon: <FileText className="w-6 h-6" />,
            title: "Submit Application",
            description: "Apply online with your resume and cover letter explaining your interest in wealth management marketing"
        },
        {
            number: "02",
            icon: <Users className="w-6 h-6" />,
            title: "Initial Screening",
            description: "Our team reviews your application and conducts a brief phone screening to learn more about your background"
        },
        {
            number: "03",
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Interview Process",
            description: "Meet with team members and hiring managers to discuss the role, your experience, and cultural fit"
        },
        {
            number: "04",
            icon: <Rocket className="w-6 h-6" />,
            title: "Offer & Onboarding",
            description: "Receive your offer and join our team with comprehensive onboarding and training"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF]">
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
                            Application Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            How to <span className="text-ph font-normal">Apply</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our straightforward hiring process designed to find the right fit for both you and our team
                        </p>
                    </motion.div>

                    {/* Process Steps */}
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
                                <div className="bg-white p-6 rounded-lg border border-gray-100 h-full">
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
                </div>
            </div>
        </section>
    );
};

export default ApplicationProcess;