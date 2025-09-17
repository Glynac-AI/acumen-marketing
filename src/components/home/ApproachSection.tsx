// src/components/home/ApproachSection.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Lightbulb,
    FileCode,
    BarChart,
    ArrowRight,
    Lock,
    Search,
    CheckCircle
} from "lucide-react";

// Define approach step data structure
interface ApproachStepProps {
    icon: React.ReactNode;
    step: string;
    title: string;
    description: string;
    features: string[];
    color: string;
}

// Approach steps data
const approachSteps: ApproachStepProps[] = [
    {
        icon: <Search className="w-6 h-6" />,
        step: "01",
        title: "Discovery",
        description: "We begin with a comprehensive analysis of your current marketing efforts, target audience, and business goals.",
        features: [
            "Analyze current marketing assets and performance",
            "Identify ideal client profiles and target segments",
            "Assess competitive landscape",
            "Review compliance requirements",
            "Evaluate current marketing ROI"
        ],
        color: "#4F6BFF"
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        step: "02",
        title: "Strategy",
        description: "We develop a tailored marketing strategy aligned with your business objectives and compliance requirements.",
        features: [
            "Define clear marketing objectives",
            "Create messaging that resonates with HNW clients",
            "Select optimal channels for your audience",
            "Develop content calendar and campaign roadmap",
            "Establish KPIs for measuring effectiveness"
        ],
        color: "#4F6BFF"
    },
    {
        icon: <Lock className="w-6 h-6" />,
        step: "03",
        title: "Compliance",
        description: "We integrate regulatory compliance into every aspect of your marketing strategy from the beginning.",
        features: [
            "Review strategy with compliance stakeholders",
            "Establish approval workflows",
            "Create content with SEC and FINRA regulations in mind",
            "Document compliance considerations",
            "Develop compliant messaging guidelines"
        ],
        color: "#4F6BFF"
    },
    {
        icon: <FileCode className="w-6 h-6" />,
        step: "04",
        title: "Implementation",
        description: "Our team executes the strategy with meticulous attention to detail and wealth management best practices.",
        features: [
            "Create compelling, compliance-approved content",
            "Deploy campaigns across selected channels",
            "Optimize digital presence for lead generation",
            "Implement tracking and analytics",
            "Coordinate with your team for seamless execution"
        ],
        color: "#4F6BFF"
    },
    {
        icon: <BarChart className="w-6 h-6" />,
        step: "05",
        title: "Measurement",
        description: "We track key performance metrics and provide transparent reporting on all marketing activities.",
        features: [
            "Monitor campaign performance with custom dashboards",
            "Track ROI and cost-per-acquisition metrics",
            "Analyze lead quality and conversion rates",
            "Measure AUM influence from marketing activities",
            "Make data-driven optimizations to improve results"
        ],
        color: "#4F6BFF"
    }
];

const ApproachSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeStep, setActiveStep] = useState(0);

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
            id="approach"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white -z-10"></div>

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F6BFF' fill-opacity='0.8'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px'
            }}></div>

            <motion.div
                className="absolute top-40 right-10 w-72 h-72 rounded-full bg-gradient-to-b from-ph/5 to-transparent blur-[80px] opacity-40 -z-5"
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
                        Our Approach
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        How We <span className="text-ph">Deliver Results</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Our proven methodology ensures a systematic path to marketing success
                        for wealth management firms, with compliance built into every step
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Interactive step selector - elegant horizontal timeline */}
                    <div className="hidden md:block mb-16">
                        <div className="relative flex justify-between items-center">
                            {/* Connecting line */}
                            <div className="absolute left-0 right-0 h-px bg-gray-200"></div>

                            {/* Active line overlay with animation */}
                            <motion.div
                                className="absolute left-0 h-px bg-ph"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(activeStep / (approachSteps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            ></motion.div>

                            {approachSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="relative z-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <button
                                        className="flex flex-col items-center"
                                        onClick={() => setActiveStep(index)}
                                        aria-label={`Step ${step.step}: ${step.title}`}
                                    >
                                        {/* Step number circle */}
                                        <motion.div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-300 ${activeStep === index
                                                    ? 'bg-ph border-ph text-white scale-110'
                                                    : activeStep > index
                                                        ? 'bg-ph/20 border-ph/50 text-ph'
                                                        : 'bg-white border-gray-200 text-muted-foreground hover:border-ph/50'
                                                }`}
                                            whileHover={{ y: -5 }}
                                            animate={activeStep === index ? { scale: 1.1 } : { scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {activeStep > index ? (
                                                <CheckCircle className="w-6 h-6" />
                                            ) : (
                                                <span className="text-lg font-medium">{step.step}</span>
                                            )}
                                        </motion.div>

                                        {/* Step title */}
                                        <span
                                            className={`font-medium transition-colors duration-300 ${activeStep === index ? 'text-ph' : 'text-muted-foreground'
                                                }`}
                                        >
                                            {step.title}
                                        </span>
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile step selector */}
                    <div className="md:hidden mb-10">
                        <div className="flex overflow-x-auto pb-4 space-x-4 hide-scrollbar">
                            {approachSteps.map((step, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center px-4 py-2 whitespace-nowrap rounded-full transition-colors ${activeStep === index
                                            ? 'bg-ph text-white'
                                            : 'bg-white border border-gray-200 text-muted-foreground'
                                        }`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <span className="mr-2">{step.step}</span>
                                    <span>{step.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Detailed step content with elegant transitions */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`step-${activeStep}`}
                            className="bg-white border border-gray-200 shadow-sm overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="p-10 md:p-16">
                                <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
                                    {/* Step header section */}
                                    <div className="md:w-2/5">
                                        <div className="flex items-center mb-6">
                                            <div
                                                className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center mr-5 text-ph"
                                            >
                                                {approachSteps[activeStep].icon}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-ph uppercase tracking-wider mb-1">Step {approachSteps[activeStep].step}</div>
                                                <h3 className="text-2xl font-medium text-foreground">{approachSteps[activeStep].title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-lg text-muted-foreground mb-6">
                                            {approachSteps[activeStep].description}
                                        </p>

                                        {/* Feature highlight */}
                                        <div className="bg-[#F0F4FF] p-6 border-l-4 border-ph">
                                            <p className="italic text-foreground">
                                                Our {approachSteps[activeStep].title.toLowerCase()} phase incorporates wealth management-specific
                                                considerations to ensure both marketing effectiveness and regulatory compliance.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step details section */}
                                    <div className="md:w-3/5 bg-[#F8FAFF] p-8 rounded-sm">
                                        <h4 className="text-lg font-medium text-foreground mb-6">What happens in this phase:</h4>

                                        <ul className="space-y-4">
                                            {approachSteps[activeStep].features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 mt-0.5 flex-shrink-0">
                                                        <span className="text-sm font-medium">{idx + 1}</span>
                                                    </div>
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Step navigation */}
                                        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                                            <button
                                                className={`text-sm flex items-center ${activeStep > 0 ? 'text-ph hover:text-ph-dark' : 'text-gray-300 cursor-not-allowed'
                                                    }`}
                                                onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
                                                disabled={activeStep === 0}
                                            >
                                                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                                                <span>Previous Step</span>
                                            </button>

                                            <button
                                                className={`text-sm flex items-center ${activeStep < approachSteps.length - 1 ? 'text-ph hover:text-ph-dark' : 'text-gray-300 cursor-not-allowed'
                                                    }`}
                                                onClick={() => activeStep < approachSteps.length - 1 && setActiveStep(activeStep + 1)}
                                                disabled={activeStep === approachSteps.length - 1}
                                            >
                                                <span>Next Step</span>
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* CTA button */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <Link
                                to="/services#process"
                                className="inline-flex items-center px-8 py-3 bg-ph text-white font-medium transition-all"
                            >
                                Learn More About Our Process
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;