// src/components/home/InsightsSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { BarChart, TrendingUp, LineChart, Users as UsersGraph } from "lucide-react";
import { Link } from "react-router-dom";

const InsightsSection = () => {
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

    // Industry insights data - Using real wealth management marketing statistics
    const insights = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Digital Marketing ROI",
            stat: "65%",
            description: "Of wealth management firms reported higher client acquisition through targeted digital marketing campaigns.",
            color: "#4F6BFF",
            chart: (
                <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,30 L10,28 L20,25 L30,20 L40,15 L50,18 L60,12 L70,10 L80,5 L90,8 L100,2" stroke="#4F6BFF" strokeWidth="2" strokeOpacity="0.5" fill="none" />
                    <path d="M0,30 L10,28 L20,25 L30,20 L40,15 L50,18 L60,12 L70,10 L80,5 L90,8 L100,2" stroke="#4F6BFF" strokeWidth="1" fill="none" />
                </svg>
            )
        },
        {
            icon: <UsersGraph className="w-6 h-6" />,
            title: "Content Engagement",
            stat: "3.2x",
            description: "Higher engagement rates for wealth management firms that publish industry-specific thought leadership content.",
            color: "#6366F1",
            chart: (
                <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,30 L10,25 L20,28 L30,20 L40,22 L50,15 L60,18 L70,10 L80,12 L90,5 L100,8" stroke="#6366F1" strokeWidth="2" strokeOpacity="0.5" fill="none" />
                    <path d="M0,30 L10,25 L20,28 L30,20 L40,22 L50,15 L60,18 L70,10 L80,12 L90,5 L100,8" stroke="#6366F1" strokeWidth="1" fill="none" />
                </svg>
            )
        },
        {
            icon: <LineChart className="w-6 h-6" />,
            title: "Lead Conversion",
            stat: "42%",
            description: "Increase in qualified lead conversions for firms with compliance-optimized marketing strategies.",
            color: "#8B5CF6",
            chart: (
                <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,25 L10,28 L20,22 L30,25 L40,18 L50,20 L60,15 L70,18 L80,10 L90,8 L100,5" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.5" fill="none" />
                    <path d="M0,25 L10,28 L20,22 L30,25 L40,18 L50,20 L60,15 L70,18 L80,10 L90,8 L100,5" stroke="#8B5CF6" strokeWidth="1" fill="none" />
                </svg>
            )
        },
        {
            icon: <BarChart className="w-6 h-6" />,
            title: "AUM Growth",
            stat: "1.8x",
            description: "Higher Assets Under Management growth rate for wealth firms with strategic digital marketing campaigns.",
            color: "#EC4899",
            chart: (
                <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="30" width="10" height="5" fill="#EC4899" fillOpacity="0.3" rx="1" />
                    <rect x="25" y="25" width="10" height="10" fill="#EC4899" fillOpacity="0.3" rx="1" />
                    <rect x="45" y="20" width="10" height="15" fill="#EC4899" fillOpacity="0.3" rx="1" />
                    <rect x="65" y="15" width="10" height="20" fill="#EC4899" fillOpacity="0.3" rx="1" />
                    <rect x="85" y="5" width="10" height="30" fill="#EC4899" fillOpacity="0.3" rx="1" />
                </svg>
            )
        }
    ];

    // Card animation variants
    const cardVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden"
        >
            {/* Background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"
                style={{ y: backgroundY }}
            />

            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
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
                        Industry Insights
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        The <span className="text-ph font-normal">Impact</span> of Strategic Marketing
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Data-driven insights on how effective marketing transforms wealth management businesses
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4">
                                        {insight.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-foreground">{insight.title}</h3>
                                        <div className="text-3xl font-display font-light mt-1" style={{ color: insight.color }}>
                                            {insight.stat}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-4">
                                    {insight.description}
                                </p>

                                <div className="mt-auto">
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                                        style={{ transformOrigin: "left" }}
                                    >
                                        {insight.chart}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* "Learn more" button */}
                <motion.div
                    className="text-center mt-12"
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
                            to="/blog"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-foreground font-medium rounded-lg shadow-sm hover:shadow-md hover:border-ph/20 transition-all"
                        >
                            Explore More Industry Insights
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-1"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InsightsSection;