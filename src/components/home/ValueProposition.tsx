// src/components/home/ValueProposition.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Shield,
    Globe,
    Users,
    FileText,
    BarChart2,
    BookOpen,
    ArrowRight,
    ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ValueProposition = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const insightsRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Sophisticated scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: insightsScrollProgress } = useScroll({
        target: insightsRef,
        offset: ["start end", "center center"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    const insightsOpacity = useTransform(insightsScrollProgress, [0, 0.5], [0, 1]);
    const insightsY = useTransform(insightsScrollProgress, [0, 0.5], [50, 0]);

    // Value proposition data
    const propositions = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Compliance-Aware Marketing",
            description: "Navigate complex SEC and FINRA regulations with marketing that builds trust while maintaining full regulatory compliance."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Digital Presence Enhancement",
            description: "Establish a professional online footprint that reflects your expertise and values, attracting ideal clients through search optimization."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "High-Value Lead Generation",
            description: "Create targeted campaigns that connect with high-net-worth individuals and institutions seeking wealth management services."
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Trust-Building Content",
            description: "Develop educational content that demonstrates expertise while nurturing long-term relationships built on credibility and value."
        },
        {
            icon: <BarChart2 className="w-6 h-6" />,
            title: "Data-Driven ROI",
            description: "Implement measurable marketing strategies with clear metrics and reporting tailored to wealth management KPIs."
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Industry-Specific Expertise",
            description: "Work with specialists who understand wealth management terminology, client needs, and how to communicate complex financial concepts."
        }
    ];

    // Industry insights data
    const insights = [
        {
            title: "Digital Marketing ROI",
            stat: "65%",
            description: "Of wealth management firms reported higher client acquisition through targeted digital marketing campaigns."
        },
        {
            title: "Content Engagement",
            stat: "3.2x",
            description: "Higher engagement rates for wealth management firms that publish industry-specific thought leadership content."
        },
        {
            title: "Lead Conversion",
            stat: "42%",
            description: "Increase in qualified lead conversions for firms with compliance-optimized marketing strategies."
        },
        {
            title: "AUM Growth",
            stat: "1.8x",
            description: "Higher Assets Under Management growth rate for wealth firms with strategic digital marketing campaigns."
        }
    ];

    // Wealth management challenges
    const challenges = [
        {
            number: "01",
            title: "Regulatory Oversight",
            description: "Marketing must adhere to SEC and FINRA regulations while still being effective and engaging."
        },
        {
            number: "02",
            title: "Extended Sales Cycles",
            description: "Client acquisition often takes 6-18 months, requiring sustained nurturing and relationship building."
        },
        {
            number: "03",
            title: "Trust Requirements",
            description: "Clients need to feel absolute confidence before entrusting their wealth to your management."
        },
        {
            number: "04",
            title: "Sophisticated Clientele",
            description: "High-net-worth individuals and institutions expect elevated marketing that reflects their sophistication."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden"
            id="value-proposition"
        >
            {/* Sophisticated background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafbff] to-white -z-10"></div>

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6BFF' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px'
            }}></div>

            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-b from-ph/20 to-transparent blur-3xl opacity-40"
                style={{ y: backgroundY }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <motion.div
                className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-t from-ph/20 to-transparent blur-3xl opacity-30"
                style={{ y: backgroundY }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Sophisticated section header */}
                <motion.div
                    className="text-center mb-24"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <div className="inline-flex items-center mb-4">
                        <div className="h-px w-12 bg-ph/40 mr-4"></div>
                        <motion.span
                            className="text-sm text-ph uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Value Proposition
                        </motion.span>
                        <div className="h-px w-12 bg-ph/40 ml-4"></div>
                    </div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="block mb-2">How We</span>
                        <span className="text-ph">Help You Grow</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        In a crowded wealth management landscape, differentiation is hard. Clients are looking for credibility, trust, and expertise — not aggressive sales tactics.
                    </motion.p>
                </motion.div>

                {/* Redesigned elegant value proposition cards */}
                <div className="max-w-6xl mx-auto mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {propositions.map((prop, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="group"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                {/* Elegant card design with subtle shadow and hover effect */}
                                <motion.div
                                    className="relative h-full bg-white border border-gray-200 p-8 transition-all duration-300 group-hover:shadow-md group-hover:border-gray-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Icon with subtle animation */}
                                        <div className="mb-6">
                                            <motion.div
                                                className="w-16 h-16 flex items-center justify-center rounded-full transition-colors duration-300"
                                                style={{
                                                    backgroundColor: "#4F6BFF10",
                                                    color: "#4F6BFF"
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {prop.icon}
                                            </motion.div>
                                        </div>

                                        {/* Title with underline animation on hover */}
                                        <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-ph transition-colors duration-300">
                                            {prop.title}
                                            <motion.div
                                                className="h-px bg-ph/0 w-0 mt-1 transition-all duration-300 group-hover:w-1/3 group-hover:bg-ph/30"
                                            />
                                        </h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground leading-relaxed mb-5 flex-grow">
                                            {prop.description}
                                        </p>

                                        {/* Interactive bottom section */}
                                        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                            <div className="text-sm text-muted-foreground group-hover:text-ph/70 transition-colors duration-300">
                                                Learn more
                                            </div>
                                            <motion.div
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 3 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronRight
                                                    className={`w-5 h-5 transition-all duration-300 ${activeIndex === index ? 'text-ph' : 'text-muted-foreground opacity-50'}`}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Elegant Industry Insights Section */}
                <div ref={insightsRef} className="max-w-6xl mx-auto mb-32">
                    <motion.div
                        className="mb-16 text-center"
                        style={{ opacity: insightsOpacity, y: insightsY }}
                    >
                        <div className="inline-flex items-center mb-4">
                            <div className="h-px w-8 bg-ph/40 mr-4"></div>
                            <span className="text-sm text-ph uppercase tracking-wider">Industry Insights</span>
                            <div className="h-px w-8 bg-ph/40 ml-4"></div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            The <span className="text-ph">Impact</span> of Strategic Marketing
                        </h3>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Data-driven insights on how effective marketing transforms wealth management businesses
                        </p>
                    </motion.div>

                    {/* Elegant insight cards in grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {insights.map((insight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="bg-white border border-gray-200 p-8 hover:shadow-md transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start">
                                    {/* Stat Display */}
                                    <div className="mr-6">
                                        <div className="text-5xl font-display font-light text-ph">
                                            {insight.stat}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h4 className="text-xl font-medium text-foreground mb-2">{insight.title}</h4>
                                        <p className="text-muted-foreground">{insight.description}</p>
                                    </div>
                                </div>

                                {/* Subtle decorative element */}
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <div className="h-1 w-12 bg-ph/10"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Animated challenges section - creative design */}
                <motion.div
                    className="relative max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-ph/10 -z-10"></div>
                    <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full border border-ph/10 -z-10"></div>

                    {/* Elegant panel design */}
                    <div className="bg-white p-12 border border-gray-200 shadow-sm">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-display font-light text-foreground mb-6">
                                Why Wealth Management Marketing <span className="text-ph">Is Different</span>
                            </h3>

                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Wealth management requires a specialized approach to marketing that acknowledges these unique challenges:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {challenges.map((challenge, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                >
                                    <div className="flex">
                                        <div className="relative">
                                            <div className="w-14 h-14 rounded-full border border-ph/30 flex items-center justify-center bg-ph/5">
                                                <span className="text-xl font-light text-ph">{challenge.number}</span>
                                            </div>
                                            {index < challenges.length - 1 && (
                                                <div className="absolute top-full left-1/2 w-px h-8 bg-gradient-to-b from-ph/30 to-transparent"></div>
                                            )}
                                        </div>

                                        <div className="ml-6">
                                            <h4 className="text-xl font-medium text-foreground mb-3">{challenge.title}</h4>
                                            <p className="text-muted-foreground">{challenge.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Elegant CTA */}
                        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                            <Link
                                to="/services"
                                className="inline-flex items-center px-8 py-3 bg-ph text-white font-medium transition-all"
                            >
                                Discover How We Can Help
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ValueProposition;