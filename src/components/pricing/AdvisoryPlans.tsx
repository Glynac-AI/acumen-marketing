// src/components/pricing/AdvisoryPlans.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Lightbulb,
    CheckCircle,
    Calendar,
    FileText,
    BarChart,
    Target
} from "lucide-react";

const AdvisoryPlans = () => {
    // Advisory service offerings
    const advisoryPlans = [
        {
            title: "Strategic Advisory Retainer",
            subtitle: "Ongoing expert guidance for your internal marketing team",
            price: "$5,000 - $8,000 per month",
            description: "Expert marketing guidance for wealth management firms that have internal execution capabilities but need specialized strategic direction.",
            features: [
                "Quarterly marketing strategy development",
                "Monthly advisory calls",
                "Campaign review & optimization",
                "Compliance guidance",
                "Performance analysis & recommendations",
                "Content strategy development",
                "Competitive intelligence",
                "Technology selection support"
            ],
            highlight: true
        }
    ];

    // Strategy session options
    const strategyOptions = [
        {
            icon: <Target className="w-5 h-5" />,
            title: "Marketing Strategy Workshop",
            price: "$10,000",
            duration: "2-day intensive",
            description: "Comprehensive workshop to develop a tailored marketing strategy for your wealth management firm, including competitive analysis, positioning, and tactical roadmap.",
            bestFor: "Firms looking to realign their marketing approach or entering a new growth phase"
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            title: "Quarterly Strategy Day",
            price: "$3,500 per quarter",
            duration: "Full-day session",
            description: "Quarterly in-depth sessions to review performance, adjust tactics, and plan the upcoming quarter's marketing initiatives.",
            bestFor: "Firms with established marketing programs seeking ongoing optimization"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            title: "Marketing Audit & Roadmap",
            price: "$7,500 - $12,000",
            duration: "4-6 weeks",
            description: "Detailed assessment of your current marketing efforts with a comprehensive roadmap for improvement and growth.",
            bestFor: "Firms evaluating their current marketing effectiveness or planning significant changes"
        }
    ];

    return (
        <div className="container mx-auto px-6 mb-24">
            <div className="max-w-6xl mx-auto">
                {/* Advisory Retainer */}
                <div className="mb-16">
                    {advisoryPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-ph shadow-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="p-10">
                                <div className="flex flex-col md:flex-row gap-10">
                                    {/* Left column */}
                                    <div className="md:w-1/2">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-medium text-foreground mb-2">
                                                {plan.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {plan.subtitle}
                                            </p>
                                            <div className="text-xl font-display text-ph mb-4">
                                                {plan.price}
                                            </div>
                                            <p className="text-muted-foreground mb-6">
                                                {plan.description}
                                            </p>

                                            <motion.div
                                                whileHover={{ y: -3 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="inline-block"
                                            >
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center px-6 py-3 bg-ph text-white text-sm font-medium"
                                                >
                                                    Schedule a Consultation
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Link>
                                            </motion.div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-6">
                                            <h4 className="text-base font-medium text-foreground mb-3">
                                                Ideal for wealth management firms that:
                                            </h4>
                                            <ul className="space-y-2">
                                                {[
                                                    "Have internal marketing resources but need expert guidance",
                                                    "Seek specialized wealth management marketing expertise",
                                                    "Want strategy-level support without full implementation",
                                                    "Need help navigating marketing compliance requirements"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <CheckCircle className="w-4 h-4 text-ph mr-2 mt-1 flex-shrink-0" />
                                                        <span className="text-muted-foreground">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right column */}
                                    <div className="md:w-1/2">
                                        <div className="bg-[#F8FAFF] p-6 mb-6">
                                            <h4 className="text-base font-medium text-foreground mb-4">
                                                What's included:
                                            </h4>
                                            <div className="grid grid-cols-1 gap-3">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
                                                        <span className="text-muted-foreground">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-start border-t border-gray-100 pt-6">
                                            <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                                                <Lightbulb className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-medium text-foreground mb-1">
                                                    Expert guidance, your execution
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Our strategic advisory service provides wealth management firms with expert guidance while leveraging your internal team for execution. We bring specialized knowledge of marketing strategies that work specifically for wealth management, including compliance considerations, high-net-worth client acquisition approaches, and industry best practices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Strategy Sessions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-medium text-foreground mb-3">
                            Strategic Planning Sessions
                        </h3>
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            Focused strategy engagements for wealth management firms at critical points in their growth journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {strategyOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="p-8">
                                    <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6">
                                        {option.icon}
                                    </div>

                                    <h4 className="text-xl font-medium text-foreground mb-2">
                                        {option.title}
                                    </h4>

                                    <div className="flex items-center mb-4">
                                        <span className="text-ph font-medium text-sm">
                                            {option.price}
                                        </span>
                                        <span className="text-muted-foreground text-sm ml-2">
                                            • {option.duration}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground mb-6">
                                        {option.description}
                                    </p>

                                    <div className="mb-6">
                                        <div className="text-sm font-medium text-foreground mb-2">
                                            Best for:
                                        </div>
                                        <p className="text-sm text-muted-foreground italic">
                                            {option.bestFor}
                                        </p>
                                    </div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        whileTap={{ x: 0 }}
                                    >
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center text-sm text-ph font-medium group"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Results measurement */}
                <motion.div
                    className="mt-16 p-8 bg-[#F8FAFF] border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="md:w-1/3">
                            <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                Measuring Success
                            </h3>
                            <p className="text-muted-foreground">
                                How we track and report on the impact of our advisory services
                            </p>
                        </div>

                        <div className="md:w-2/3">
                            <p className="text-muted-foreground mb-6">
                                Even when we're not handling the execution, we believe in accountability and measurable results. Our advisory services include:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Quarterly business impact reviews",
                                    "Marketing KPI dashboards",
                                    "AUM growth attribution",
                                    "Lead quality scoring framework",
                                    "Implementation effectiveness assessments",
                                    "Compliance efficiency measurements"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdvisoryPlans;