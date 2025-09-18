// src/components/pricing/ProjectPlans.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    PenTool,
    Globe,
    FileText,
    Users,
    BarChart,
    CheckCircle
} from "lucide-react";

const ProjectPlans = () => {
    // Project-based offerings
    const projectPlans = [
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Brand Development",
            priceRange: "$25,000 - $45,000",
            timeframe: "8-12 weeks",
            description: "Complete brand identity development tailored for wealth management firms seeking to elevate their market presence and appeal to high-net-worth clients.",
            deliverables: [
                "Comprehensive brand audit",
                "Market positioning strategy",
                "Visual identity system",
                "Brand messaging framework",
                "Client persona development",
                "Brand guidelines",
                "Initial marketing collateral",
                "Brand launch strategy"
            ]
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Digital Transformation",
            priceRange: "$30,000 - $60,000",
            timeframe: "12-16 weeks",
            description: "Complete website redesign and digital presence optimization that aligns with compliance requirements while delivering a premium experience for prospects and clients.",
            deliverables: [
                "UX research & wireframing",
                "Custom website design",
                "Responsive development",
                "Content creation & migration",
                "SEO implementation",
                "Analytics & tracking setup",
                "Compliance integration",
                "CRM integration",
                "Training & documentation"
            ]
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Thought Leadership Launch",
            priceRange: "$15,000 - $25,000",
            timeframe: "6-8 weeks",
            description: "Establish your firm's expertise and authority through a comprehensive thought leadership program designed to position key executives as industry experts.",
            deliverables: [
                "Topic & positioning strategy",
                "Editorial calendar development",
                "Premium content creation",
                "Executive ghostwriting",
                "Distribution & promotion plan",
                "Compliance review workflow",
                "Media placement strategy",
                "Performance measurement framework"
            ]
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Marketing Audit & Strategy",
            priceRange: "$7,500 - $12,000",
            timeframe: "4-6 weeks",
            description: "Comprehensive assessment of your current marketing efforts with actionable recommendations and a detailed roadmap for improvement and growth.",
            deliverables: [
                "Digital presence audit",
                "Competitive analysis",
                "Content effectiveness review",
                "Technical SEO analysis",
                "Lead generation assessment",
                "Compliance review",
                "12-month marketing roadmap",
                "Budget allocation recommendations"
            ]
        }
    ];

    // Additional specialized packages
    const specializedPackages = [
        {
            title: "Compliance Optimization",
            price: "$5,000 per quarter",
            features: [
                "Marketing compliance review system",
                "Regulatory monitoring & updates",
                "Compliance documentation templates",
                "Staff training & guidelines"
            ]
        },
        {
            title: "HNW Lead Generation System",
            price: "$8,000 - $12,000 setup + management",
            features: [
                "Target audience modeling",
                "Custom lead capture system",
                "Multi-channel campaign setup",
                "Lead nurturing workflow design"
            ]
        },
        {
            title: "Advisor Marketing Enablement",
            price: "$3,000 - $5,000 per month per advisor group",
            features: [
                "Personalized content creation",
                "Social media management",
                "Email marketing campaigns",
                "Performance tracking & reporting"
            ]
        }
    ];

    return (
        <div className="container mx-auto px-6 mb-24">
            <div className="max-w-6xl mx-auto">
                {/* Main projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {projectPlans.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                            <div className="p-8">
                                <div className="flex items-start mb-6">
                                    <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground mb-1">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <span className="text-sm text-ph font-medium">
                                                {project.priceRange}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                • {project.timeframe}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6">
                                    {project.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-medium text-foreground mb-4">
                                        What's included:
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.deliverables.map((deliverable, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-ph mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">
                                                    {deliverable}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-block"
                                >
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center px-5 py-2 bg-ph/10 text-ph hover:bg-ph hover:text-white transition-colors text-sm font-medium"
                                    >
                                        Discuss This Project
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Specialized packages */}
                <motion.div
                    className="bg-[#F8FAFF] p-8 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-8">
                        <h3 className="text-xl font-medium text-foreground mb-3">
                            Specialized Add-On Packages
                        </h3>
                        <p className="text-muted-foreground">
                            Enhancement packages that can be added to any project or retainer
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {specializedPackages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 border border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                                whileHover={{ y: -5 }}
                            >
                                <h4 className="text-lg font-medium text-foreground mb-2">
                                    {pkg.title}
                                </h4>
                                <div className="text-ph font-medium text-sm mb-4">
                                    {pkg.price}
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-ph mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

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
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Project flexibility note */}
                <motion.div
                    className="mt-8 p-6 border border-gray-200 bg-white flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                        <BarChart className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-base font-medium text-foreground mb-1">
                            Custom Project Scoping
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Don't see exactly what you need? We develop custom project scopes based on your specific marketing objectives and business goals. Contact us to discuss your unique requirements and receive a tailored proposal for your wealth management firm.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectPlans;