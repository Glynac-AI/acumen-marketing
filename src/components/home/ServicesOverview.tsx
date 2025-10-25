// src/components/home/ServicesOverview.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FileText,
    Globe,
    CreditCard,
    Users,
    Calendar,
    PenTool,
    ArrowRight
} from "lucide-react";

const ServicesOverview = () => {
    const services = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Content & Thought Leadership",
            description: "Establish expertise through compliance-approved content that resonates with high-net-worth individuals and institutions."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "SEO & Website Optimization",
            description: "Improve visibility and generate qualified inbound leads through strategic digital presence enhancements."
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Paid Media Campaigns",
            description: "Drive targeted traffic and qualified leads through sophisticated campaigns focused on high-net-worth audiences."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Account-Based Marketing",
            description: "Personalized outreach to specific high-value prospects and institutions with coordinated multi-channel campaigns."
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Design & Branding",
            description: "Create sophisticated visual identities and marketing materials that reflect the premium nature of wealth management."
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Webinars & Events",
            description: "Develop and promote educational events that showcase expertise while generating qualified leads."
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
                            Our Services
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Comprehensive Marketing Solutions for{" "}
                            <span className="text-ph font-normal">Wealth Management</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            From strategy to execution, we provide everything your firm needs to attract
                            and convert high-net-worth prospects
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg border border-gray-100 group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4 group-hover:bg-ph group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center text-ph font-medium hover:text-ph-dark transition-colors"
                        >
                            View All Services & Capabilities
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;