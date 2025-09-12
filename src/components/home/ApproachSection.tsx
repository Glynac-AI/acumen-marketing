// src/components/home/ApproachSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
    Search,
    Lightbulb,
    FileCode,
    BarChart,
    ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ApproachSection = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Approach steps
    const steps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Discovery",
            description: "We begin with a deep dive into your firm's unique positioning, target clients, and business goals. This research phase includes a competitive analysis and compliance requirements review.",
            number: "01",
            color: "#4F6BFF"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Strategy",
            description: "Based on our findings, we craft a comprehensive marketing strategy tailored to your wealth management firm's needs, focusing on the channels and tactics that will reach your ideal clients.",
            number: "02",
            color: "#6366F1"
        },
        {
            icon: <FileCode className="w-6 h-6" />,
            title: "Implementation",
            description: "Our team executes the strategy with meticulous attention to compliance requirements and industry regulations, ensuring all marketing activities align with SEC and FINRA guidelines.",
            number: "03",
            color: "#8B5CF6"
        },
        {
            icon: <BarChart className="w-6 h-6" />,
            title: "Measurement",
            description: "We track key performance metrics and provide transparent reporting on all marketing activities, allowing you to see clear ROI and make data-driven decisions about future investments.",
            number: "04",
            color: "#EC4899"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden bg-white"
        >
            {/* Background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30 pointer-events-none"
                style={{ y: backgroundY }}
            />

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Our Methodology
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        A Structured <span className="text-ph font-normal">Approach</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Our proven methodology ensures a systematic path to marketing success for wealth management firms
                    </motion.p>
                </motion.div>

                {/* Process Visualization */}
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Desktop Process Flow */}
                    <div className="hidden lg:block relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-4 gap-6 relative z-10">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex flex-col items-center"
                                >
                                    {/* Number Circle */}
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg font-light text-foreground mb-6 relative z-20"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                            borderColor: `${step.color}50`
                                        }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full w-full"
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1)",
                                            borderColor: `${step.color}30`
                                        }}
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-lg font-medium text-foreground mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Process List */}
                    <div className="lg:hidden space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative"
                            >
                                {/* Connecting line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute top-[60px] bottom-0 left-[28px] w-0.5 bg-gray-100 z-0"></div>
                                )}

                                <div className="flex">
                                    {/* Number Circle */}
                                    <motion.div
                                        className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg font-light text-foreground mr-5 relative z-10"
                                        whileHover={{ scale: 1.05, borderColor: `${step.color}50` }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-lg font-medium text-foreground">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-ph/10 text-ph font-medium rounded-lg hover:bg-ph/20 transition-colors"
                        >
                            Learn More About Our Approach
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ApproachSection;