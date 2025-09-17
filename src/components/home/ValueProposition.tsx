// src/components/home/ValueProposition.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Target,
    Shield,
    TrendingUp,
    Users,
    ArrowRight,
    CheckCircle
} from "lucide-react";

// Define value proposition data structure
interface ValuePropProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    benefits: string[];
}

// Value propositions data
const valueProps: ValuePropProps[] = [
    {
        icon: <Target className="w-6 h-6" />,
        title: "Industry Specialization",
        description: "We exclusively serve wealth management firms, giving us deep understanding of your unique needs, challenges, and regulatory environment.",
        benefits: [
            "Marketing strategies tailored specifically for wealth management",
            "Content that resonates with high-net-worth individuals",
            "Campaigns that align with industry compliance requirements",
            "Targeting that reaches qualified prospects efficiently"
        ]
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Compliance-Aware Marketing",
        description: "We integrate regulatory compliance into every aspect of our work, ensuring effective marketing that meets SEC and FINRA requirements.",
        benefits: [
            "Proactive compliance consideration in all strategies",
            "Content development with regulations in mind",
            "Streamlined compliance review processes",
            "Marketing that mitigates regulatory risk"
        ]
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Results-Driven Approach",
        description: "We focus on metrics that matter to wealth management firms—like AUM growth and client acquisition—not just marketing vanity metrics.",
        benefits: [
            "Marketing strategies tied to business objectives",
            "Campaigns designed to attract qualified prospects",
            "Tracking systems that measure AUM influence",
            "Continuous optimization for improved results"
        ]
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Trust-Building Focus",
        description: "We develop marketing that builds trust and credibility, essential factors in the wealth management decision process.",
        benefits: [
            "Educational content that showcases expertise",
            "Thought leadership that establishes credibility",
            "Relationship-focused marketing approaches",
            "Brand building that emphasizes stability and trustworthiness"
        ]
    }
];

const ValueProposition = () => {
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
            id="value-proposition"
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

            <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-t from-ph/5 to-transparent blur-[80px] opacity-40 -z-5"
                style={{ y: backgroundY }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.2, 0.4]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            ></motion.div>

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
                        Why Choose Us
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        The <span className="text-ph">Acumen Advantage</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        What makes our marketing approach uniquely effective for wealth management firms
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {valueProps.map((prop, index) => (
                        <ValuePropCard
                            key={index}
                            valueProp={prop}
                            index={index}
                        />
                    ))}
                </div>

                {/* Key stats section */}
                <motion.div
                    className="mt-24 p-10 bg-[#F8FAFF]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-medium text-foreground mb-3">Delivering Measurable Results</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our specialized approach consistently delivers meaningful outcomes for wealth management firms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { stat: "32%", label: "Average AUM Growth" },
                            { stat: "68%", label: "Increase in Qualified Leads" },
                            { stat: "41%", label: "Reduction in Client Acquisition Cost" },
                            { stat: "92%", label: "Client Satisfaction Rate" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className="text-4xl font-display text-ph mb-2">{item.stat}</div>
                                <div className="text-sm text-muted-foreground">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <motion.div
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <Link
                                to="/about"
                                className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium transition-all"
                            >
                                Learn More About Our Approach
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Value proposition card component with enhanced animations
const ValuePropCard = ({ valueProp, index }: { valueProp: ValuePropProps; index: number }) => {
    return (
        <motion.div
            className="bg-white border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
            <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6">
                    {valueProp.icon}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{valueProp.title}</h3>
                <p className="text-muted-foreground mb-6">{valueProp.description}</p>

                <h4 className="text-sm font-medium text-foreground mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                    {valueProp.benefits.map((benefit, idx) => (
                        <motion.li
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + (0.1 * idx) }}
                        >
                            <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ValueProposition;