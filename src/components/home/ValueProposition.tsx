// src/components/home/ValueProposition.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Globe,
    Users,
    Shield,
    FileText,
    BarChart2,
    BookOpen,
    Scale,
    Clock
} from "lucide-react";

const ValueProposition = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7
            }
        }
    };

    // Introduction paragraph
    const introParagraph = "In a crowded wealth management landscape, differentiation is hard. Clients are looking for credibility, trust, and expertise — not aggressive sales tactics. That's where we come in.";

    // Value proposition data - expanded with wealth management specific pain points
    const propositions = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Compliance-Aware Marketing",
            description: "Navigate complex SEC and FINRA regulations with marketing that builds trust while maintaining full regulatory compliance.",
            color: "#4F6BFF"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Digital Presence Enhancement",
            description: "Establish a professional online footprint that reflects your expertise and values, attracting ideal clients through search optimization.",
            color: "#6366F1"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "High-Value Lead Generation",
            description: "Create targeted campaigns that connect with high-net-worth individuals and institutions seeking wealth management services.",
            color: "#8B5CF6"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Trust-Building Content",
            description: "Develop educational content that demonstrates expertise while nurturing long-term relationships built on credibility and value.",
            color: "#EC4899"
        },
        {
            icon: <BarChart2 className="w-8 h-8" />,
            title: "Data-Driven ROI",
            description: "Implement measurable marketing strategies with clear metrics and reporting tailored to wealth management KPIs.",
            color: "#4F6BFF"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Industry-Specific Expertise",
            description: "Work with specialists who understand wealth management terminology, client needs, and how to communicate complex financial concepts.",
            color: "#6366F1"
        }
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
            {/* Background design elements - keeping the original, elegant background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-background to-gray-50 pointer-events-none"
                style={{ opacity }}
            />

            <motion.div
                className="absolute -left-36 -bottom-36 w-96 h-96 rounded-full bg-ph/5 blur-3xl"
                style={{ opacity }}
            />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: "linear-gradient(#4F6BFF 1px, transparent 1px), linear-gradient(to right, #4F6BFF 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    style={{ y, opacity }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Our Value Proposition
                    </motion.span>

                    <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                        How We <span className="text-ph font-normal">Help You Grow</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {introParagraph}
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {propositions.map((prop, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="rounded-xl overflow-hidden h-full flex flex-col bg-white border border-gray-100 shadow-sm"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 15px 30px rgba(79, 107, 255, 0.08)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Improved card header */}
                                <div className="px-8 pt-8 pb-4">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-ph/10 flex items-center justify-center text-ph mr-4">
                                            {prop.icon}
                                        </div>
                                        <h3 className="text-xl font-medium text-[#0A2540]">
                                            {prop.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Card content with refined design */}
                                <div className="px-8 pb-8 flex-grow">
                                    <div className="h-px w-16 bg-ph/20 mb-5"></div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {prop.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Wealth Management Unique Challenges Section - keeping the original design */}
                <motion.div
                    className="mt-24 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="glass-card rounded-xl p-10 border border-ph/10 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-ph/10 to-transparent rounded-bl-[100px] -z-10"></div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-display font-light text-foreground mb-3">
                                Why Wealth Management Marketing <span className="text-ph">Is Different</span>
                            </h3>
                            <p className="text-muted-foreground">
                                Wealth management requires a specialized approach to marketing that acknowledges these unique challenges:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph flex-shrink-0 mt-1">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground mb-2">Regulatory Oversight</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Marketing must adhere to SEC and FINRA regulations while still being effective and engaging.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph flex-shrink-0 mt-1">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground mb-2">Extended Sales Cycles</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Client acquisition often takes 6-18 months, requiring sustained nurturing and relationship building.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph flex-shrink-0 mt-1">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground mb-2">Trust Requirements</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Clients need to feel absolute confidence before entrusting their wealth to your management.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph flex-shrink-0 mt-1">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground mb-2">Sophisticated Clientele</h4>
                                    <p className="text-sm text-muted-foreground">
                                        High-net-worth individuals and institutions expect elevated marketing that reflects their sophistication.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ValueProposition;