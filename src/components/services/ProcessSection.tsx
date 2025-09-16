// src/components/services/ProcessSection.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Search,
    Lightbulb,
    FileCode,
    BarChart,
    Lock,
    Presentation,
    Users,
    ArrowRight
} from "lucide-react";

const ProcessSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax and opacity effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Process steps with detailed information
    const steps = [
        {
            number: "01",
            icon: <Search className="w-6 h-6" />,
            title: "Discovery",
            description: "We begin with a deep dive into your firm's unique positioning, target clients, and business goals.",
            details: [
                "Analyze your current marketing assets and performance",
                "Identify your ideal client profile and target segments",
                "Assess competitive landscape and positioning opportunities",
                "Review compliance requirements specific to your firm",
                "Evaluate current marketing ROI and identify opportunities"
            ],
            featureHighlight: "Our discovery phase incorporates wealth management-specific analysis to identify your competitive advantages in the marketplace."
        },
        {
            number: "02",
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Strategy Development",
            description: "Based on our findings, we craft a comprehensive marketing strategy tailored to your wealth management firm's needs.",
            details: [
                "Define clear marketing objectives aligned with business goals",
                "Create messaging that resonates with high-net-worth clients",
                "Select optimal channels for your specific audience",
                "Develop a content calendar and campaign roadmap",
                "Establish KPIs for measuring marketing effectiveness"
            ],
            featureHighlight: "Every strategy includes compliance considerations built-in from the beginning, not as an afterthought."
        },
        {
            number: "03",
            icon: <Lock className="w-6 h-6" />,
            title: "Compliance Review",
            description: "We collaborate with your compliance team to ensure all marketing materials meet regulatory requirements.",
            details: [
                "Review strategy with compliance stakeholders",
                "Establish approval workflows for marketing materials",
                "Create content with SEC and FINRA regulations in mind",
                "Document compliance considerations for each channel",
                "Develop compliant messaging guidelines for consistency"
            ],
            featureHighlight: "Our specialized experience in wealth management compliance helps prevent delays while maintaining marketing effectiveness."
        },
        {
            number: "04",
            icon: <FileCode className="w-6 h-6" />,
            title: "Implementation",
            description: "Our team executes the strategy with meticulous attention to detail and best practices for wealth management marketing.",
            details: [
                "Create compelling, compliance-approved content",
                "Deploy campaigns across selected channels",
                "Optimize your digital presence for qualified lead generation",
                "Implement tracking and analytics to measure performance",
                "Coordinate with your team for seamless execution"
            ],
            featureHighlight: "We handle the complex execution details so your advisors can focus on serving clients and closing new business."
        },
        {
            number: "05",
            icon: <BarChart className="w-6 h-6" />,
            title: "Measurement",
            description: "We track key performance metrics and provide transparent reporting on all marketing activities.",
            details: [
                "Monitor campaign performance with custom dashboards",
                "Track ROI and cost-per-acquisition metrics",
                "Analyze lead quality and conversion rates",
                "Measure AUM influence from marketing activities",
                "Make data-driven optimizations to improve results"
            ],
            featureHighlight: "Our reporting translates marketing metrics into business impact, so you can see exactly how marketing drives AUM growth."
        },
        {
            number: "06",
            icon: <Presentation className="w-6 h-6" />,
            title: "Optimization",
            description: "We continuously refine your marketing approach based on performance data and emerging opportunities.",
            details: [
                "Identify top-performing content and channel strategies",
                "Optimize campaigns for improved ROI",
                "A/B test messaging and creative elements",
                "Refine targeting for higher-quality leads",
                "Adapt to changes in the wealth management landscape"
            ],
            featureHighlight: "Continuous improvement drives compounding results over time, maximizing the long-term value of your marketing investment."
        },
        {
            number: "07",
            icon: <Users className="w-6 h-6" />,
            title: "Advisor Enablement",
            description: "We equip your advisors with the tools and content they need to engage prospects and support business development.",
            details: [
                "Create advisor-ready content packages",
                "Develop customizable presentation materials",
                "Provide social media support for advisors",
                "Create training on marketing-enabled selling",
                "Align marketing activities with advisor business goals"
            ],
            featureHighlight: "Our approach bridges the gap between marketing and sales, helping advisors leverage marketing to close more business."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden bg-[#F8FAFF]"
            id="process"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white pointer-events-none"></div>

            {/* Decorative dots grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F6BFF' fill-opacity='0.8'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
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
                        Our Process
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

                {/* Main process section with interactive elements */}
                <div className="max-w-6xl mx-auto">
                    {/* Interactive step selector - elegant horizontal timeline */}
                    <div className="hidden md:block mb-16">
                        <div className="relative flex justify-between items-center">
                            {/* Connecting line */}
                            <div className="absolute left-0 right-0 h-px bg-gray-200"></div>

                            {steps.map((step, index) => (
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
                                    >
                                        {/* Step number circle */}
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 border-2 ${activeStep === index
                                                ? 'bg-ph border-ph text-white'
                                                : 'bg-white border-gray-200 text-muted-foreground hover:border-ph/50'
                                                }`}
                                        >
                                            <span className="text-lg font-medium">{step.number}</span>
                                        </div>

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
                            {steps.map((step, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center px-4 py-2 whitespace-nowrap rounded-full transition-colors ${activeStep === index
                                        ? 'bg-ph text-white'
                                        : 'bg-white border border-gray-200 text-muted-foreground'
                                        }`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <span className="mr-2">{step.number}</span>
                                    <span>{step.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Detailed step content with elegant transitions */}
                    <motion.div
                        key={`step-${activeStep}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border border-gray-200 shadow-sm overflow-hidden"
                    >
                        <div className="p-10 md:p-16">
                            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
                                {/* Step header section */}
                                <div className="md:w-2/5">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center mr-5 text-ph"
                                        >
                                            {steps[activeStep].icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-ph uppercase tracking-wider mb-1">Step {steps[activeStep].number}</div>
                                            <h3 className="text-2xl font-medium text-foreground">{steps[activeStep].title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-lg text-muted-foreground mb-6">
                                        {steps[activeStep].description}
                                    </p>

                                    {/* Feature highlight */}
                                    <div className="bg-[#F0F4FF] p-6 border-l-4 border-ph mb-6">
                                        <p className="italic text-foreground">
                                            {steps[activeStep].featureHighlight}
                                        </p>
                                    </div>
                                </div>

                                {/* Step details section */}
                                <div className="md:w-3/5 bg-[#F8FAFF] p-8 rounded-sm">
                                    <h4 className="text-lg font-medium text-foreground mb-6">What happens in this phase:</h4>

                                    <ul className="space-y-4">
                                        {steps[activeStep].details.map((detail, idx) => (
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
                                                <span className="text-muted-foreground">{detail}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Step navigation */}
                                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                                        <button
                                            className={`text-sm flex items-center ${activeStep > 0 ? 'text-ph hover:text-ph-dark' : 'text-gray-300 cursor-not-allowed'}`}
                                            onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
                                            disabled={activeStep === 0}
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                                            <span>Previous Step</span>
                                        </button>

                                        <button
                                            className={`text-sm flex items-center ${activeStep < steps.length - 1 ? 'text-ph hover:text-ph-dark' : 'text-gray-300 cursor-not-allowed'}`}
                                            onClick={() => activeStep < steps.length - 1 && setActiveStep(activeStep + 1)}
                                            disabled={activeStep === steps.length - 1}
                                        >
                                            <span>Next Step</span>
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Why this process works */}
                <div className="max-w-5xl mx-auto mt-24">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-3xl font-display font-light text-foreground mb-4">
                            Why This <span className="text-ph">Process Works</span> for Wealth Management
                        </h3>
                    </motion.div>

                    {/* Process benefits in elegant cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Compliance-First Approach",
                                description: "Every step is designed with SEC and FINRA regulations in mind, preventing costly compliance issues"
                            },
                            {
                                title: "Industry-Specific Expertise",
                                description: "Our deep knowledge of wealth management means we understand your clients and competitive landscape"
                            },
                            {
                                title: "Results-Driven Methodology",
                                description: "Our process focuses on metrics that matter: AUM growth, client acquisition, and marketing ROI"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 border border-gray-200 flex flex-col"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6">
                                    <span className="text-lg font-medium">{index + 1}</span>
                                </div>
                                <div className="text-xl font-medium text-foreground mb-3">{item.title}</div>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;