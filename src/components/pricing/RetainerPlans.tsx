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
    Zap,
    Shield
} from "lucide-react";

const RetainerPlans = () => {
    // Retainer plan details - FROM DRAFT
    const retainerPlans = [
        {
            name: "Starter Package",
            subtitle: "For small RIAs and independent advisors",
            aumRange: "$500M - $2B AUM",
            price: "$13,000",
            period: "per month",
            minTerm: "90-day initial commitment",
            highlight: false,
            icon: <Users className="w-6 h-6" />,
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
            icon: <TrendingUp className="w-6 h-6" />,
            badge: "Most Popular",
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
            icon: <Zap className="w-6 h-6" />,
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
        <section className="py-24 bg-white relative">
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
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            Monthly Retainer Packages
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Comprehensive Marketing <span className="text-ph font-normal">Retainers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                            All packages include FINRA/SEC compliance, webinar funnel optimization, and monthly reporting
                        </p>

                        {/* Key Benefits Bar */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-ph mr-2" />
                                <span>90-day initial commitment</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-ph mr-2" />
                                <span>10% discount for annual prepayment</span>
                            </div>
                            <div className="flex items-center">
                                <Shield className="w-4 h-4 text-ph mr-2" />
                                <span>Performance guarantees by tier</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Package comparison grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {retainerPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`relative bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 ${plan.highlight
                                        ? "border-ph shadow-2xl shadow-ph/10 scale-105"
                                        : "border-gray-200 hover:border-ph/50 hover:shadow-xl"
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Badge for highlighted plan */}
                                {plan.badge && (
                                    <div className="absolute top-0 right-0 bg-ph text-white text-xs font-medium px-4 py-1 rounded-bl-lg">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${plan.highlight ? "bg-ph text-white" : "bg-ph/10 text-ph"
                                        }`}>
                                        {plan.icon}
                                    </div>

                                    {/* Plan Name & Subtitle */}
                                    <h3 className="text-2xl font-display font-medium text-foreground mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">{plan.subtitle}</p>
                                    <p className="text-xs text-ph font-medium mb-6">{plan.aumRange}</p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline mb-2">
                                            <span className="text-4xl font-display font-light text-foreground">
                                                {plan.price}
                                            </span>
                                            <span className="text-muted-foreground ml-2">{plan.period}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{plan.minTerm}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                        {plan.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex items-start text-sm ${feature.highlight ? "font-medium" : ""
                                                    }`}
                                            >
                                                <CheckCircle
                                                    className={`w-4 h-4 mr-3 flex-shrink-0 mt-0.5 ${feature.highlight ? "text-ph" : "text-gray-400"
                                                        }`}
                                                />
                                                <div className="flex-1">
                                                    <span className="text-muted-foreground">{feature.label}: </span>
                                                    <span
                                                        className={
                                                            feature.highlight ? "text-foreground font-medium" : "text-muted-foreground"
                                                        }
                                                    >
                                                        {feature.value}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        to="/contact"
                                        className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${plan.highlight
                                                ? "bg-ph text-white hover:bg-ph-dark shadow-lg"
                                                : "bg-gray-100 text-foreground hover:bg-ph hover:text-white"
                                            }`}
                                    >
                                        {plan.cta}
                                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Add-On Services Section */}
                    <motion.div
                        className="bg-[#F8FAFF] p-8 rounded-xl border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-display font-light text-foreground mb-3">
                                Available <span className="text-ph font-normal">Add-On Services</span>
                            </h3>
                            <p className="text-muted-foreground">
                                Enhance any package with these specialized services
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { service: "Custom video production", price: "$2,500-$5,000" },
                                { service: "Advanced ABM campaigns", price: "$3,000/month" },
                                { service: "Additional platforms", price: "$1,500/platform/month" },
                                { service: "PR article placement", price: "$1,000-$2,500 per article" },
                                { service: "Event marketing support", price: "Custom pricing" }
                            ].map((addon, index) => (
                                <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-100">
                                    <Star className="w-5 h-5 text-ph mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-medium text-foreground text-sm mb-1">{addon.service}</div>
                                        <div className="text-xs text-muted-foreground">{addon.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-muted-foreground mb-4">
                            Not sure which package is right for your firm?
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg"
                        >
                            Schedule a Strategy Call
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RetainerPlans;