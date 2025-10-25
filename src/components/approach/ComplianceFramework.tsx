// src/components/approach/ComplianceFramework.tsx
import React from "react";
import { motion } from "framer-motion";
import { Shield, FileCheck, Users, Lock, AlertCircle, CheckCircle } from "lucide-react";

const ComplianceFramework = () => {
    const complianceElements = [
        {
            icon: <FileCheck className="w-6 h-6" />,
            title: "FINRA/SEC Protocols",
            description: "All marketing content adheres to advertising rules, including recordkeeping requirements and prohibition of misleading statements."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Content Approval Workflows",
            description: "Established review processes with your compliance team before any content goes live, ensuring full regulatory alignment."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Data Privacy & GDPR",
            description: "Full compliance with data privacy regulations, including proper consent mechanisms and secure data handling practices."
        },
        {
            icon: <AlertCircle className="w-6 h-6" />,
            title: "Documentation & Audit Trails",
            description: "Comprehensive documentation of all marketing activities, maintaining clear audit trails for regulatory examinations."
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Regular Compliance Training",
            description: "Our team receives ongoing training on SEC, FINRA, and state regulations to stay current with evolving requirements."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Risk Mitigation",
            description: "Proactive identification and mitigation of compliance risks before they become issues, protecting your firm's reputation."
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-10 w-72 h-72 bg-ph/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-ph/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
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
                            Compliance Framework
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            <span className="text-ph font-normal">Compliance-First</span> at Every Step
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We integrate regulatory compliance into every aspect of your marketing strategy,
                            ensuring your growth initiatives never create regulatory risk
                        </p>
                    </motion.div>

                    {/* Compliance Elements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {complianceElements.map((element, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                    {element.icon}
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-3">
                                    {element.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {element.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Compliance Statement */}
                    <motion.div
                        className="bg-white border-l-4 border-ph p-8 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-start gap-4">
                            <Shield className="w-8 h-8 text-ph flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-medium text-foreground mb-3">
                                    Our Compliance Commitment
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Every member of our team understands that compliance isn't a checkbox—it's a
                                    fundamental requirement for sustainable marketing in wealth management. We work
                                    hand-in-hand with your compliance officers to ensure every campaign, every piece
                                    of content, and every marketing initiative meets or exceeds regulatory standards.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our Chief Compliance Officer, a former FINRA compliance specialist, oversees all
                                    marketing strategies and provides ongoing guidance to keep your firm protected
                                    while pursuing aggressive growth goals.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceFramework;