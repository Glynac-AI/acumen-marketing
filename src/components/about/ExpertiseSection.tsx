// src/components/about/ExpertiseSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Brain, Cpu, Lightbulb } from "lucide-react";

const ExpertiseSection = () => {
    const expertiseAreas = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Wealth Management Specialists",
            description: "Our team includes former RIA marketers who understand the unique dynamics of wealth management client acquisition, retention, and growth strategies.",
            capabilities: [
                "Deep understanding of RIA, IAR, and family office operations",
                "Experience marketing to high-net-worth and ultra-high-net-worth individuals",
                "Knowledge of wealth management sales cycles and decision-making processes",
                "Familiarity with custodian relationships and platform considerations"
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Regulatory Compliance Experts",
            description: "We embed compliance specialists throughout our organization to ensure every marketing initiative meets SEC, FINRA, and state regulatory requirements.",
            capabilities: [
                "Former FINRA examiners and broker-dealer compliance officers",
                "Expertise in Marketing Rule 206(4)-1 and FINRA Rule 2210",
                "Compliant content development and review processes",
                "Ongoing monitoring of regulatory guidance and enforcement actions"
            ]
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "HNW Client Psychology Specialists",
            description: "We understand what drives high-net-worth individuals' decision-making and how to create marketing that resonates with affluent audiences.",
            capabilities: [
                "Behavioral finance and wealth psychology expertise",
                "Understanding of generational wealth transfer dynamics",
                "Knowledge of family office decision-making structures",
                "Experience with institutional and corporate executive audiences"
            ]
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Digital Marketing Technologists",
            description: "Our technical team implements sophisticated marketing technology stacks that enable data-driven decision-making and campaign optimization.",
            capabilities: [
                "Marketing automation platform expertise (HubSpot, Marketo, Salesforce)",
                "Advanced analytics implementation (GA4, attribution modeling)",
                "CRM integration and lead scoring systems",
                "API integrations and custom marketing technology solutions"
            ]
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Content & Creative Professionals",
            description: "Our content and design teams create sophisticated marketing materials that reflect the premium nature of wealth management services while meeting compliance requirements.",
            capabilities: [
                "Financial journalism and thought leadership content development",
                "Premium brand identity and visual design",
                "Video production and multimedia content creation",
                "Compliance-approved messaging and storytelling"
            ]
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
                            Core Team Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Specialized <span className="text-ph font-normal">Capabilities</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our multidisciplinary team brings together diverse expertise specifically tailored to wealth management marketing
                        </p>
                    </motion.div>

                    {/* Expertise Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {expertiseAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                    {area.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-medium text-foreground mb-3">
                                    {area.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {area.description}
                                </p>

                                {/* Capabilities */}
                                <div className="space-y-2">
                                    {area.capabilities.map((capability, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-ph mt-2 mr-3 flex-shrink-0"></div>
                                            {capability}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;