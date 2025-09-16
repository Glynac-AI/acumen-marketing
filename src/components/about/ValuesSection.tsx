// src/components/about/ValuesSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    UserCheck,
    Search,
    Gauge,
    Settings,
    Book,
    BadgeCheck
} from "lucide-react";

// Define core value data structure
interface CoreValueProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    examples: string[];
}

// Core values with wealth management context
const coreValues: CoreValueProps[] = [
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: "Client-Centered",
        description: "We put our clients' business goals at the center of every marketing strategy, ensuring that our work drives measurable results for wealth management firms.",
        examples: [
            "Aligning marketing KPIs with business objectives",
            "Regular strategy reviews with client stakeholders",
            "Adapting to changing business priorities",
            "Focusing on AUM growth and client acquisition"
        ]
    },
    {
        icon: <Search className="w-6 h-6" />,
        title: "Deep Expertise",
        description: "We maintain specialized knowledge in wealth management marketing, staying ahead of industry trends, regulations, and best practices.",
        examples: [
            "Continuous training on SEC and FINRA regulations",
            "Research on high-net-worth audience behavior",
            "Industry conference participation",
            "Ongoing professional development"
        ]
    },
    {
        icon: <Gauge className="w-6 h-6" />,
        title: "Data-Driven",
        description: "We base our strategies and recommendations on solid data and analytics, ensuring that marketing investments deliver measurable returns.",
        examples: [
            "Attribution modeling for client acquisition",
            "A/B testing for campaign optimization",
            "Regular performance analysis and reporting",
            "ROI-focused campaign development"
        ]
    },
    {
        icon: <Settings className="w-6 h-6" />,
        title: "Continuous Improvement",
        description: "We constantly refine our approaches based on performance data, industry changes, and emerging opportunities to drive ever-better results.",
        examples: [
            "Regular strategy optimization sessions",
            "Post-campaign analysis and learnings",
            "Iterative content and creative development",
            "Adoption of emerging marketing technologies"
        ]
    },
    {
        icon: <Book className="w-6 h-6" />,
        title: "Transparent Communication",
        description: "We maintain clear, honest communication with our clients, ensuring they understand our strategies, progress, and results.",
        examples: [
            "Regular performance reporting and reviews",
            "Clear explanations of marketing approaches",
            "Honest assessment of challenges and opportunities",
            "Educational approach to client relationships"
        ]
    },
    {
        icon: <BadgeCheck className="w-6 h-6" />,
        title: "Compliance-First",
        description: "We integrate regulatory compliance into every aspect of our marketing work, ensuring effectiveness without creating compliance risks.",
        examples: [
            "Proactive compliance consideration in planning",
            "Collaboration with client compliance teams",
            "Documentation of regulatory considerations",
            "Ongoing regulatory education and awareness"
        ]
    }
];

const ValuesSection = () => {
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
            id="values"
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
                        Our Values
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Principles That <span className="text-ph">Guide Our Work</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Our core values shape how we work with wealth management firms to
                        deliver exceptional marketing results
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Values grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 p-8"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6">
                                    {value.icon}
                                </div>

                                <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                                <p className="text-muted-foreground mb-6">{value.description}</p>

                                <div>
                                    <h4 className="text-sm text-foreground font-medium mb-3">How We Demonstrate This:</h4>
                                    <ul className="space-y-2">
                                        {value.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-start text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-ph mt-1.5 mr-2 flex-shrink-0"></div>
                                                <span className="text-muted-foreground">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Client testimonial */}
                    <motion.div
                        className="bg-white p-10 border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <div className="relative">
                            {/* Large quote mark */}
                            <div className="absolute -top-6 -left-6 text-8xl text-ph/10 font-serif">"</div>

                            <div className="relative z-10">
                                <blockquote className="text-xl text-foreground/90 italic mb-8 max-w-4xl">
                                    What sets Acumen Marketing apart is their deep understanding of the wealth management industry combined with their commitment to results. They aren't just marketing experts; they truly understand our business objectives and regulatory environment, which allows them to create strategies that actually work for our firm.
                                </blockquote>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-ph/10 text-ph flex items-center justify-center mr-4">
                                        <span className="font-medium">JW</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-foreground">Jennifer Winters</div>
                                        <div className="text-sm text-muted-foreground">Managing Director, Cascade Wealth Management</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;