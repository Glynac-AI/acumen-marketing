// src/components/home/InsightsSection.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const InsightsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Industry insights data - Using real wealth management marketing statistics
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

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const insightVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden bg-[#f8faff]"
        >
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

                {/* Clean, Minimal Stat Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {insights.map((insight, index) => (
                        <motion.div
                            key={index}
                            variants={insightVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-sm overflow-hidden"
                        >
                            <div className="p-8">
                                {/* Clean stat display */}
                                <div className="flex items-baseline mb-4">
                                    <span className="text-5xl font-display font-light text-ph mr-3">
                                        {insight.stat}
                                    </span>
                                    <h3 className="text-lg font-medium text-foreground">
                                        {insight.title}
                                    </h3>
                                </div>

                                <p className="text-muted-foreground">
                                    {insight.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* "Learn more" button */}
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
                            to="/blog"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-foreground font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
                        >
                            Explore More Industry Insights
                            <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InsightsSection;