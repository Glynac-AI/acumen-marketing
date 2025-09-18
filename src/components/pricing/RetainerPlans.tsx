// src/components/pricing/RetainerPlans.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    ArrowRight,
    HelpCircle,
    X,
    Shield,
    BarChart,
    Users
} from "lucide-react";

const RetainerPlans = () => {
    const [tooltipOpen, setTooltipOpen] = useState(null);

    // Helper function to handle tooltip open/close
    const toggleTooltip = (id) => {
        setTooltipOpen(tooltipOpen === id ? null : id);
    };

    // Retainer plan details
    const retainerPlans = [
        {
            name: "Foundation",
            subtitle: "For smaller RIAs and independent advisors",
            aumRange: "$50M - $250M AUM",
            price: "$8,000",
            period: "per month",
            minTerm: "6-month minimum term",
            highlight: false,
            description: "Essential marketing services to establish a strong digital presence and begin generating qualified leads.",
            features: [
                "Compliance-reviewed content (6-8 pieces monthly)",
                "Website optimization & SEO fundamentals",
                "Digital presence management",
                "Social media strategy & execution",
                "Monthly compliance review sessions",
                "Quarterly strategy meetings",
                "Email newsletter management",
                "Basic performance reporting"
            ],
            tooltips: {
                "Website optimization & SEO fundamentals": "On-page SEO, metadata optimization, content structure improvements, and technical SEO recommendations.",
                "Compliance-reviewed content (6-8 pieces monthly)": "Blog posts, articles, and social content reviewed by our compliance specialists before publication."
            },
            cta: "Schedule Consultation"
        },
        {
            name: "Growth",
            subtitle: "For established wealth management firms",
            aumRange: "$250M - $1B AUM",
            price: "$14,000",
            period: "per month",
            minTerm: "6-month minimum term",
            highlight: true,
            description: "Comprehensive marketing program for firms seeking significant growth through multi-channel strategies.",
            features: [
                "All Foundation services",
                "Advanced content strategy",
                "Paid media campaign management",
                "Personalized thought leadership",
                "Webinar & event support",
                "Quarterly marketing attribution reports",
                "Monthly strategy sessions",
                "Dedicated account manager",
                "Lead nurturing workflows",
                "Competitive analysis & insights"
            ],
            tooltips: {
                "Advanced content strategy": "Comprehensive content calendar with premium assets like whitepapers, research reports, and targeted client education materials.",
                "Quarterly marketing attribution reports": "Detailed reporting showing how marketing activities contribute to prospect engagement, lead generation, and AUM growth."
            },
            cta: "Schedule Consultation"
        },
        {
            name: "Enterprise",
            subtitle: "For larger wealth management institutions",
            aumRange: "$1B+ AUM",
            price: "$25,000",
            period: "per month",
            minTerm: "12-month minimum term",
            highlight: false,
            description: "Premium, fully-managed marketing solution for wealth management firms with sophisticated needs and ambitious growth targets.",
            features: [
                "All Growth services",
                "Account-based marketing",
                "Custom research & whitepapers",
                "Executive positioning program",
                "Marketing technology integration",
                "Comprehensive digital strategy",
                "Advanced analytics dashboard",
                "Bi-weekly strategy sessions",
                "Priority support & expedited delivery",
                "Multi-location coordination"
            ],
            tooltips: {
                "Account-based marketing": "Targeted, personalized marketing campaigns directed at specific high-value prospects and institutions.",
                "Executive positioning program": "Comprehensive strategy to position key executives as thought leaders through ghostwritten articles, speaking opportunities, and media placements."
            },
            cta: "Schedule Consultation"
        }
    ];

    return (
        <div className="container mx-auto px-6 mb-24">
            <div className="max-w-6xl mx-auto">
                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {retainerPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`border relative overflow-hidden ${plan.highlight
                                    ? "border-ph shadow-lg"
                                    : "border-gray-200 shadow-sm"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-ph"></div>
                            )}

                            <div className="p-8">
                                {/* Plan header */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-medium text-foreground mb-1">
                                        {plan.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {plan.subtitle}
                                    </p>
                                    <div className="inline-block py-1 px-3 bg-[#F8FAFF] border border-gray-100 text-muted-foreground text-sm">
                                        {plan.aumRange}
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="mb-6">
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-display text-foreground">
                                            {plan.price}
                                        </span>
                                        <span className="text-muted-foreground ml-1">
                                            {plan.period}
                                        </span>
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                        {plan.minTerm}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6">
                                    {plan.description}
                                </p>

                                {/* Features */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-medium text-foreground mb-4">
                                        Included in this plan:
                                    </h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
                                                <div className="flex items-center">
                                                    <span className="text-muted-foreground">
                                                        {feature}
                                                    </span>
                                                    {plan.tooltips && plan.tooltips[feature] && (
                                                        <div className="relative ml-1">
                                                            <button
                                                                className="text-muted-foreground hover:text-ph transition-colors"
                                                                onClick={() => toggleTooltip(`${plan.name}-${idx}`)}
                                                                aria-label="More information"
                                                            >
                                                                <HelpCircle className="w-4 h-4" />
                                                            </button>

                                                            {/* Tooltip */}
                                                            <AnimatePresence>
                                                                {tooltipOpen === `${plan.name}-${idx}` && (
                                                                    <motion.div
                                                                        className="absolute z-50 bottom-full left-0 mb-2 w-64 p-3 bg-white border border-gray-200 shadow-lg text-sm text-muted-foreground"
                                                                        initial={{ opacity: 0, y: 10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, y: 10 }}
                                                                        transition={{ duration: 0.2 }}
                                                                    >
                                                                        <button
                                                                            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                                                                            onClick={() => setTooltipOpen(null)}
                                                                            aria-label="Close tooltip"
                                                                        >
                                                                            <X className="w-4 h-4" />
                                                                        </button>
                                                                        {plan.tooltips[feature]}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-block w-full"
                                >
                                    <Link
                                        to="/contact"
                                        className={`inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium transition-colors ${plan.highlight
                                                ? "bg-ph text-white"
                                                : "bg-ph/10 text-ph hover:bg-ph hover:text-white"
                                            }`}
                                    >
                                        {plan.cta}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Value-add section */}
                <motion.div
                    className="mt-16 p-8 bg-[#F8FAFF] border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                Every Plan Includes
                            </h3>
                            <p className="text-muted-foreground">
                                Core services and benefits provided with all retainer engagements
                            </p>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <Shield className="w-5 h-5" />,
                                    title: "Compliance Integration",
                                    description: "SEC and FINRA compliance considerations built into every aspect of your marketing"
                                },
                                {
                                    icon: <BarChart className="w-5 h-5" />,
                                    title: "Performance Tracking",
                                    description: "Clear measurement of marketing activities and their impact on business goals"
                                },
                                {
                                    icon: <Users className="w-5 h-5" />,
                                    title: "Dedicated Team",
                                    description: "Marketing specialists with deep wealth management expertise"
                                },
                                {
                                    icon: <ArrowRight className="w-5 h-5" />,
                                    title: "Transparent Reporting",
                                    description: "Regular updates on progress, activities, and results"
                                }
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 flex-shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-medium text-foreground mb-1">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Strategy Phase note */}
                <motion.div
                    className="mt-8 p-6 border border-gray-200 bg-white flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-base font-medium text-foreground mb-1">
                            Initial Strategy Phase
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            All engagements begin with a paid strategy phase ($5,000-10,000) to establish goals, compliance requirements, and create a customized marketing roadmap. This ensures our approach is tailored specifically to your firm's needs and objectives.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RetainerPlans;