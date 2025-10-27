// src/components/pricing/RetainerPlans.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    ArrowRight,
    Star,
    TrendingUp,
    Users,
    Zap
} from "lucide-react";

const RetainerPlans = () => {
    // Retainer plan details - UPDATED FROM DRAFT
    const retainerPlans = [
        {
            name: "Starter Package",
            subtitle: "For small RIAs and independent advisors",
            aumRange: "$500M - $2B AUM",
            price: "$13,000",
            period: "per month",
            minTerm: "90-day initial commitment",
            highlight: false,
            description: "Perfect for small RIAs & IARs looking to establish a strong digital presence and begin generating qualified leads.",
            features: [
                { label: "Expected MQLs", value: "15-25 qualified leads", highlight: true },
                { label: "Monthly Campaigns", value: "5-8 campaigns (2-3 platforms)" },
                { label: "Team Size", value: "3-4 specialists" },
                { label: "Platforms", value: "Facebook, LinkedIn" },
                { label: "Social Creatives", value: "15 monthly" },
                { label: "SEO Blogs", value: "5 monthly" },
                { label: "Landing Pages", value: "1-2 monthly" },
                { label: "Analytics", value: "Basic dashboard" },
                { label: "CRM Support", value: "Basic lead capture" },
                { label: "Design Services", value: "Add-on" },
                { label: "PR & Media", value: "Not included" },
                { label: "Account Management", value: "Email support" }
            ],
            cta: "Schedule Consultation"
        },
        {
            name: "Growth Package",
            subtitle: "For established wealth management firms",
            aumRange: "$2B - $8B AUM",
            price: "$22,500",
            period: "per month",
            minTerm: "90-day initial commitment",
            highlight: true,
            description: "Ideal for growing Family Offices seeking significant growth through multi-channel strategies.",
            features: [
                { label: "Expected MQLs", value: "40-60 qualified leads", highlight: true },
                { label: "Monthly Campaigns", value: "10-12 campaigns (4-5 platforms)" },
                { label: "Team Size", value: "5-6 specialists" },
                { label: "Platforms", value: "Facebook, LinkedIn, Google, YouTube" },
                { label: "Social Creatives", value: "20 monthly" },
                { label: "SEO Blogs", value: "8 monthly" },
                { label: "Landing Pages", value: "2-3 monthly" },
                { label: "Analytics", value: "Advanced reporting" },
                { label: "CRM Support", value: "Enhanced qualification" },
                { label: "Design Services", value: "Included" },
                { label: "PR & Media", value: "Not included" },
                { label: "Account Management", value: "Dedicated PM" }
            ],
            cta: "Schedule Consultation"
        },
        {
            name: "Leadership Package",
            subtitle: "For large wealth management institutions",
            aumRange: "$8B+ AUM",
            price: "$46,000",
            period: "per month",
            minTerm: "90-day initial commitment",
            highlight: false,
            description: "Built for large RIAs & Custodians with ambitious growth targets and sophisticated needs.",
            features: [
                { label: "Expected MQLs", value: "80-120 qualified leads", highlight: true },
                { label: "Monthly Campaigns", value: "15+ campaigns (all 7 platforms)" },
                { label: "Team Size", value: "8-10 specialists" },
                { label: "Platforms", value: "All platforms + PR & media" },
                { label: "Social Creatives", value: "25 monthly" },
                { label: "SEO Blogs", value: "10+ monthly" },
                { label: "Landing Pages", value: "Unlimited" },
                { label: "Analytics", value: "Real-time dashboards" },
                { label: "CRM Support", value: "Full integration" },
                { label: "Design Services", value: "Full-service" },
                { label: "PR & Media", value: "Included" },
                { label: "Account Management", value: "Dedicated team" }
            ],
            cta: "Schedule Consultation"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-7xl mx-auto">
                {/* Package comparison grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {retainerPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-white border-2 rounded-lg overflow-hidden ${plan.highlight
                                    ? "border-ph shadow-2xl shadow-ph/10 scale-105"
                                    : "border-gray-200"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={!plan.highlight ? { y: -5 } : {}}
                        >
                            {/* Popular badge */}
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-ph text-white text-xs font-medium px-4 py-1 rounded-bl-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8">
                                {/* Plan header */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-display font-medium text-foreground mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {plan.subtitle}
                                    </p>
                                    <p className="text-xs text-ph font-medium">
                                        {plan.aumRange}
                                    </p>
                                </div>

                                {/* Pricing */}
                                <div className="mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-baseline mb-2">
                                        <span className="text-5xl font-display font-light text-foreground">
                                            {plan.price}
                                        </span>
                                        <span className="text-lg text-muted-foreground ml-2">
                                            {plan.period}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {plan.minTerm}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    {plan.description}
                                </p>

                                {/* Features list */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className={`flex items-start text-sm ${feature.highlight ? "font-medium" : ""
                                                }`}
                                        >
                                            <CheckCircle
                                                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${feature.highlight ? "text-ph" : "text-gray-400"
                                                    }`}
                                            />
                                            <div>
                                                <span className="text-muted-foreground">
                                                    {feature.label}:{" "}
                                                </span>
                                                <span
                                                    className={
                                                        feature.highlight
                                                            ? "text-ph font-semibold"
                                                            : "text-foreground"
                                                    }
                                                >
                                                    {feature.value}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA button */}
                                <Link
                                    to="/contact"
                                    className={`block w-full text-center px-6 py-4 rounded-lg font-medium transition-all ${plan.highlight
                                            ? "bg-ph text-white hover:bg-ph-dark shadow-lg shadow-ph/20"
                                            : "bg-gray-50 text-foreground hover:bg-gray-100 border border-gray-200"
                                        }`}
                                >
                                    {plan.cta}
                                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Add-On Services Section - NEW FROM DRAFT */}
                <motion.div
                    className="bg-[#F8FAFF] rounded-lg p-8 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-6">
                        <h3 className="text-2xl font-display font-light text-foreground mb-2">
                            Add-On Services
                        </h3>
                        <p className="text-muted-foreground">
                            Available for all packages to customize your marketing program
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Zap className="w-5 h-5" />,
                                title: "Custom Video Production",
                                price: "$2,500 - $5,000"
                            },
                            {
                                icon: <Users className="w-5 h-5" />,
                                title: "Advanced ABM Campaigns",
                                price: "$3,000/month"
                            },
                            {
                                icon: <TrendingUp className="w-5 h-5" />,
                                title: "Additional Platforms",
                                price: "$1,500/platform/month"
                            },
                            {
                                icon: <Star className="w-5 h-5" />,
                                title: "PR Article Placement",
                                price: "$1,000 - $2,500 per article"
                            },
                            {
                                icon: <Users className="w-5 h-5" />,
                                title: "Event Marketing Support",
                                price: "Custom pricing"
                            }
                        ].map((addon, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -3 }}
                            >
                                <div className="flex items-start mb-3">
                                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 flex-shrink-0">
                                        {addon.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">
                                            {addon.title}
                                        </h4>
                                        <p className="text-sm text-ph font-medium">
                                            {addon.price}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Payment & Commitment Section - UPDATED FROM DRAFT */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h4 className="text-lg font-medium text-foreground mb-4">
                        Payment & Commitment
                    </h4>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-ph mr-2" />
                            Monthly billing with 90-day initial commitment
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-ph mr-2" />
                            10% discount for annual prepayment
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-ph mr-2" />
                            Performance guarantees by tier
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-ph mr-2" />
                            Money-back guarantee terms
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RetainerPlans;