// src/components/about/AcumenGroup.tsx
import React from "react";
import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Users, Cpu, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcumenGroup = () => {
    // ONLY 5 brands as per your confirmation
    const brands = [
        {
            icon: <Megaphone className="w-6 h-6" />,
            name: "Acumen Labs",
            tagline: "Current Site",
            description: "Digital marketing & lead generation",
            services: [
                "Performance-driven campaigns",
                "Compliance-first execution",
                "Multi-channel lead generation"
            ],
            highlight: true
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            name: "Acumen Strategy",
            description: "Business strategy consulting",
            services: [
                "Sales pipeline development",
                "Market entry strategies",
                "Data informs Labs' audience targeting"
            ]
        },
        {
            icon: <Users className="w-6 h-6" />,
            name: "Acumen Talent",
            description: "Advisor recruitment",
            services: [
                "Executive search for wealth management",
                "Onboarding & training",
                "New advisors onboarded to Glynac.AI"
            ]
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            name: "Glynac.AI",
            description: "AI-powered productivity tools for advisors",
            services: [
                "Compliance automation",
                "Client service enhancement",
                "Performance data guides Talent recruitment"
            ]
        },
        {
            icon: <Home className="w-6 h-6" />,
            name: "Prairie Hill",
            tagline: "Real Estate",
            description: "Real estate investment opportunities",
            services: [
                "Investors introduced to Acumen Strategy",
                "Cross-sell financial planning services"
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
                            The Ecosystem
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Part of a Larger <span className="text-ph font-normal">Vision</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Acumen Labs is part of an integrated ecosystem of companies serving the wealth management industry
                        </p>
                    </motion.div>

                    {/* Introduction */}
                    <motion.div
                        className="bg-[#F8FAFF] p-8 mb-16 border border-gray-100 rounded-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <div className="h-1 w-16 bg-ph mb-6"></div>
                                <h3 className="text-2xl font-medium text-foreground mb-3">
                                    Comprehensive Support for Wealth Management
                                </h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-foreground leading-relaxed mb-4">
                                    The Acumen ecosystem was founded with a singular vision: to provide specialized services exclusively for the wealth management industry. By focusing on this niche, we've developed deep expertise that allows us to deliver exceptional value to our clients.
                                </p>
                                <p className="text-foreground leading-relaxed">
                                    Each company within the ecosystem addresses specific needs of wealth management firms, from marketing and talent acquisition to AI-powered productivity tools. Together, we offer a comprehensive suite of services that help wealth management firms grow, optimize, and evolve.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Brands Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={index}
                                className={`p-8 rounded-lg border transition-all duration-300 ${brand.highlight
                                        ? "bg-gradient-to-br from-ph to-ph-dark text-white border-transparent shadow-lg"
                                        : "bg-white border-gray-100 hover:shadow-lg"
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${brand.highlight ? "bg-white/20 text-white" : "bg-ph/10 text-ph"
                                        }`}
                                >
                                    {brand.icon}
                                </div>

                                {/* Brand Name */}
                                <h3
                                    className={`text-xl font-medium mb-2 ${brand.highlight ? "text-white" : "text-foreground"
                                        }`}
                                >
                                    {brand.name}
                                </h3>

                                {/* Tagline */}
                                {brand.tagline && (
                                    <p
                                        className={`text-sm mb-3 ${brand.highlight ? "text-white/80" : "text-ph"
                                            }`}
                                    >
                                        {brand.tagline}
                                    </p>
                                )}

                                {/* Description */}
                                <p
                                    className={`mb-4 ${brand.highlight ? "text-white/90" : "text-muted-foreground"
                                        }`}
                                >
                                    {brand.description}
                                </p>

                                {/* Services */}
                                <ul className="space-y-2">
                                    {brand.services.map((service, idx) => (
                                        <li
                                            key={idx}
                                            className={`flex items-start text-sm ${brand.highlight ? "text-white/80" : "text-muted-foreground"
                                                }`}
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${brand.highlight ? "bg-white/60" : "bg-ph"
                                                    }`}
                                            ></div>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="text-center bg-[#F8FAFF] p-10 rounded-lg border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-medium text-foreground mb-4">
                            Explore the Full Ecosystem
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Learn more about how our integrated brands work together to amplify your firm's growth
                        </p>
                        <Link
                            to="/ecosystem"
                            className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all"
                        >
                            View Full Ecosystem
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AcumenGroup;