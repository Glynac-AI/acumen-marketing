// src/components/about/AcumenGroup.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Users,
    LineChart,
    PieChart,
    BookOpen,
    ArrowUpRight
} from "lucide-react";

// Define company data structure
interface CompanyProps {
    icon: React.ReactNode;
    name: string;
    description: string;
    services: string[];
    url: string;
}

// Acumen Group companies
const companies: CompanyProps[] = [
    {
        icon: <LineChart className="w-6 h-6" />,
        name: "Acumen Marketing",
        description: "Specialized marketing services for wealth management firms, RIAs, family offices, and financial advisors.",
        services: [
            "Content & Thought Leadership",
            "Digital Marketing",
            "Paid Media",
            "Account-Based Marketing",
            "Design & Branding",
            "Events & Webinars"
        ],
        url: "/"
    },
    {
        icon: <Users className="w-6 h-6" />,
        name: "Acumen Recruiting",
        description: "Executive search and talent acquisition services focused on the wealth management industry.",
        services: [
            "Advisor Recruiting",
            "Executive Search",
            "Team Lift-Outs",
            "Succession Planning",
            "Compensation Analysis",
            "Cultural Assessment"
        ],
        url: "https://acumen-recruiting.com"
    },
    {
        icon: <PieChart className="w-6 h-6" />,
        name: "Acumen Advisory",
        description: "Strategic consulting services for wealth management firms seeking growth, optimization, or transition.",
        services: [
            "Growth Strategy",
            "Operational Efficiency",
            "Merger & Acquisition Support",
            "Technology Selection",
            "Business Valuation",
            "Succession Planning"
        ],
        url: "https://acumen-advisory.com"
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        name: "Acumen Institute",
        description: "Research, education, and certification programs for wealth management professionals.",
        services: [
            "Industry Research",
            "Continuing Education",
            "Certification Programs",
            "Leadership Development",
            "Practice Management",
            "Peer Networking"
        ],
        url: "https://acumen-institute.com"
    }
];

const AcumenGroup = () => {
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
            className="py-24 md:py-32 relative bg-white overflow-hidden"
            id="acumen-group"
        >
            {/* Subtle pattern background */}
            <motion.div
                className="absolute inset-0 opacity-[0.03]"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6BFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px'
                }}></div>
            </motion.div>

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
                        The Acumen Group
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Part of a <span className="text-ph">Specialized Ecosystem</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Acumen Marketing is part of the Acumen Group, a family of companies
                        dedicated to serving the wealth management industry
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <motion.div
                        className="bg-[#F8FAFF] p-8 mb-16 border border-gray-100"
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
                                    The Acumen Group was founded with a singular vision: to provide specialized
                                    professional services exclusively for the wealth management industry. By
                                    focusing on this niche, we've developed deep expertise that allows us to
                                    deliver exceptional value to our clients.
                                </p>
                                <p className="text-foreground leading-relaxed">
                                    Each company within the Acumen Group addresses specific needs of wealth
                                    management firms, from marketing and talent acquisition to strategic
                                    consulting and education. Together, we offer a comprehensive suite of
                                    services that help wealth management firms grow, optimize, and evolve.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Companies grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {companies.map((company, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 p-8 group cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                onClick={() => window.open(company.url, company.name === "Acumen Marketing" ? "_self" : "_blank")}
                            >
                                <div className="flex items-start mb-6">
                                    <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                                        {company.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground mb-2 flex items-center">
                                            {company.name}
                                            <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className="text-muted-foreground">{company.description}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-foreground mb-3">Services:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {company.services.map((service, idx) => (
                                            <div key={idx} className="flex items-center text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-ph mr-2"></div>
                                                <span className="text-muted-foreground">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                                    <span className="text-sm text-ph font-medium group-hover:underline">
                                        {company.name === "Acumen Marketing" ? "You are here" : "Visit website"}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Collaboration benefits */}
                    <motion.div
                        className="text-center p-10 bg-[#F8FAFF] border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-xl font-medium text-foreground mb-6">Benefits of the Acumen Ecosystem</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Integrated Expertise",
                                    description: "Access to specialized knowledge across all aspects of wealth management"
                                },
                                {
                                    title: "Seamless Collaboration",
                                    description: "Coordinated services that work together to support your firm's goals"
                                },
                                {
                                    title: "Industry-Specific Solutions",
                                    description: "Tailored approaches based on deep understanding of wealth management"
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <div className="text-lg font-medium text-foreground mb-2">{benefit.title}</div>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AcumenGroup;