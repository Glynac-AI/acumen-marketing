// src/components/ecosystem/BrandShowcase.tsx
import React from "react";
import { motion } from "framer-motion";
import {
    Megaphone,
    TrendingUp,
    Users,
    Cpu,
    Home,
    Briefcase,
    PieChart,
    FileText,
    Shield
} from "lucide-react";

const BrandShowcase = () => {
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
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            name: "Acumen Private Wealth",
            description: "High-net-worth advisory services",
            services: [
                "Estate & tax planning",
                "Personalized wealth strategies"
            ]
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            name: "Acumen Investments",
            description: "Portfolio management",
            services: [
                "Retirement solutions",
                "Investment strategies"
            ]
        },
        {
            icon: <FileText className="w-6 h-6" />,
            name: "Acumen Financial Planning",
            description: "Comprehensive financial plans",
            services: [
                "Product referrals across ecosystem",
                "Holistic planning approach"
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            name: "Acumen Insurance",
            description: "Risk products integrated with wealth plans",
            services: [
                "Life insurance solutions",
                "Risk management strategies"
            ]
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Nine Specialized{" "}
                            <span className="text-ph font-normal">Brands</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Each brand focuses on a specific aspect of wealth management,
                            creating a comprehensive support system for your firm
                        </p>
                    </motion.div>

                    {/* Brands Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white p-6 rounded-lg border-2 ${brand.highlight ? 'border-ph bg-ph/5' : 'border-gray-100'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-full ${brand.highlight ? 'bg-ph text-white' : 'bg-ph/10 text-ph'
                                    } flex items-center justify-center mb-4`}>
                                    {brand.icon}
                                </div>

                                {/* Brand Name */}
                                <h3 className="text-xl font-medium text-foreground mb-1">
                                    {brand.name}
                                </h3>

                                {/* Tagline */}
                                {brand.tagline && (
                                    <p className="text-xs text-ph font-medium uppercase tracking-wide mb-3">
                                        {brand.tagline}
                                    </p>
                                )}

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-4">
                                    {brand.description}
                                </p>

                                {/* Services */}
                                <div className="space-y-2">
                                    {brand.services.map((service, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="w-1 h-1 rounded-full bg-ph mr-2 mt-1.5 flex-shrink-0"></div>
                                            <span className="text-xs text-muted-foreground">
                                                {service}
                                            </span>
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

export default BrandShowcase;