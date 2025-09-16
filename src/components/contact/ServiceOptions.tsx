// src/components/contact/ServiceOptions.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

// Service package data
interface ServicePackageProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    icon: React.ReactNode;
    color: string;
    popular?: boolean;
}

const servicePackages: ServicePackageProps[] = [
    {
        title: "Strategic Advisory",
        description: "Expert marketing guidance for wealth management firms looking to enhance their approach.",
        price: "Starting at $5,000",
        features: [
            "Marketing strategy development",
            "Competitive analysis",
            "Brand positioning",
            "Channel optimization",
            "Marketing technology assessment"
        ],
        icon: <FileText className="w-6 h-6" />,
        color: "#4F6BFF"
    },
    {
        title: "Comprehensive Marketing",
        description: "End-to-end marketing execution for wealth management firms seeking significant growth.",
        price: "Starting at $8,000/month",
        features: [
            "Strategy development",
            "Content creation",
            "Digital marketing",
            "Marketing automation",
            "Performance tracking",
            "Compliance integration"
        ],
        icon: <Globe className="w-6 h-6" />,
        color: "#4F6BFF",
        popular: true
    },
    {
        title: "Project-Based Solutions",
        description: "Focused marketing initiatives for specific objectives and campaigns.",
        price: "Custom pricing",
        features: [
            "Website redesign",
            "Brand refresh",
            "Content development",
            "Campaign execution",
            "Marketing collateral",
            "Digital presence optimization"
        ],
        icon: <CreditCard className="w-6 h-6" />,
        color: "#4F6BFF"
    }
];

// Individual service data
interface ServiceItemProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const serviceItems: ServiceItemProps[] = [
    {
        title: "Content & Thought Leadership",
        description: "Develop premium content that positions your firm as a trusted advisor.",
        icon: <FileText className="w-6 h-6" />
    },
    {
        title: "SEO & Website Optimization",
        description: "Improve visibility and generate qualified inbound leads.",
        icon: <Globe className="w-6 h-6" />
    },
    {
        title: "Paid Media Campaigns",
        description: "Drive targeted traffic and qualified leads through sophisticated channels.",
        icon: <CreditCard className="w-6 h-6" />
    },
    {
        title: "Account-Based Marketing",
        description: "Targeted outreach to specific high-value prospects and institutions.",
        icon: <Users className="w-6 h-6" />
    },
    {
        title: "Design & Branding",
        description: "Create sophisticated visual identities that reflect your premium services.",
        icon: <PenTool className="w-6 h-6" />
    },
    {
        title: "Webinars & Events",
        description: "Develop educational events that showcase your expertise to prospects.",
        icon: <Calendar className="w-6 h-6" />
    }
];

const ServiceOptions = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-[#F8FAFF] overflow-hidden"
            id="service-options"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white -z-10"></div>

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F6BFF' fill-opacity='0.8'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Service Options
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Marketing Solutions for <span className="text-ph">Wealth Management</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Flexible engagement options designed to meet the unique needs of wealth management firms
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Service packages */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {servicePackages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col bg-white border ${pkg.popular ? 'border-ph shadow-md' : 'border-gray-200'}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                {/* Popular badge */}
                                {pkg.popular && (
                                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                        <div className="bg-ph text-white px-4 py-1 text-xs font-medium">
                                            POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className="p-8 flex-grow">
                                    <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6">
                                        {pkg.icon}
                                    </div>

                                    <h3 className="text-2xl font-medium text-foreground mb-2">{pkg.title}</h3>
                                    <p className="text-muted-foreground mb-6">{pkg.description}</p>

                                    <div className="text-2xl font-display text-ph mb-6">{pkg.price}</div>

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="w-5 h-5 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 mt-0.5 flex-shrink-0">
                                                    <ArrowRight className="w-3 h-3" />
                                                </div>
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="px-8 pb-8 mt-auto">
                                    <Link
                                        to="/contact"
                                        className={`inline-flex items-center justify-center w-full px-6 py-3 ${pkg.popular
                                                ? 'bg-ph text-white'
                                                : 'bg-ph/10 text-ph hover:bg-ph hover:text-white'
                                            } font-medium transition-colors`}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Individual services */}
                    <motion.div
                        className="bg-white p-10 border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-medium text-foreground mb-4">Individual Services</h3>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Choose specific services based on your wealth management firm's needs.
                                All services can be provided individually or as part of a comprehensive package.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceItems.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="flex"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-foreground mb-2">{service.title}</h4>
                                        <p className="text-sm text-muted-foreground">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-10 pt-6 border-t border-gray-100">
                            <p className="text-muted-foreground mb-6">
                                Need a custom solution for your wealth management firm?
                                We can create a tailored package that meets your specific goals.
                            </p>

                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium transition-all"
                                >
                                    Request Custom Solution
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOptions;