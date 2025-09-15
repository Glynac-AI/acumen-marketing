// src/components/home/ApproachSection.tsx
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Search,
    Lightbulb,
    FileCode,
    BarChart,
    ArrowRight,
    ArrowUpRight,
    CheckCircle
} from "lucide-react";

const ApproachSection = () => {
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

    // Approach steps with structured data
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
                "Review compliance requirements specific to your firm"
            ],
            color: "#4F6BFF"
        },
        {
            number: "02",
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Strategy",
            description: "Based on our findings, we craft a comprehensive marketing strategy tailored to your wealth management firm's needs.",
            details: [
                "Define clear marketing objectives aligned with business goals",
                "Create messaging that resonates with high-net-worth clients",
                "Select optimal channels for your specific audience",
                "Develop a content calendar and campaign roadmap"
            ],
            color: "#4F6BFF"
        },
        {
            number: "03",
            icon: <FileCode className="w-6 h-6" />,
            title: "Implementation",
            description: "Our team executes the strategy with meticulous attention to compliance requirements and industry regulations.",
            details: [
                "Create compelling, compliance-approved content",
                "Deploy campaigns across selected channels",
                "Optimize your digital presence for qualified lead generation",
                "Implement tracking and analytics to measure performance"
            ],
            color: "#4F6BFF"
        },
        {
            number: "04",
            icon: <BarChart className="w-6 h-6" />,
            title: "Measurement",
            description: "We track key performance metrics and provide transparent reporting on all marketing activities.",
            details: [
                "Monitor campaign performance with custom dashboards",
                "Track ROI and cost-per-acquisition metrics",
                "Analyze lead quality and conversion rates",
                "Make data-driven optimizations to improve results"
            ],
            color: "#4F6BFF"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden bg-white"
            id="approach"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFF] pointer-events-none"></div>

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
                        Our Methodology
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        A Structured <span className="text-ph">Approach</span>
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

                {/* Main approach section with interactive elements */}
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
                        className="bg-white border border-gray-200 rounded-sm overflow-hidden"
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

                                    {/* Action buttons for each step */}
                                    <div className="hidden md:block">
                                        <Link
                                            to="/about#approach"
                                            className="inline-flex items-center group text-ph hover:text-ph-dark transition-colors"
                                        >
                                            <span>Learn more about our approach</span>
                                            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Link>
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
                                                <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
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

                    {/* Mobile CTA */}
                    <div className="md:hidden mt-8 text-center">
                        <Link
                            to="/about#approach"
                            className="inline-flex items-center text-ph hover:text-ph-dark transition-colors"
                        >
                            <span>Learn more about our approach</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Results showcase */}
                <div className="max-w-5xl mx-auto mt-24">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-3xl font-display font-light text-foreground mb-4">
                            The <span className="text-ph">Results</span> Speak for Themselves
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our structured approach has helped wealth management firms achieve measurable growth
                        </p>
                    </motion.div>

                    {/* Results metrics in elegant cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { metric: "32%", label: "Average AUM Growth", detail: "For firms implementing our full-service marketing approach" },
                            { metric: "3.5×", label: "Lead Quality Improvement", detail: "Higher conversion rates from marketing-qualified leads" },
                            { metric: "68%", label: "Digital Engagement Increase", detail: "Across website, email, and social media channels" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 border border-gray-200 flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="text-5xl font-display font-light text-ph mb-3">{item.metric}</div>
                                <div className="text-lg font-medium text-foreground mb-2">{item.label}</div>
                                <p className="text-sm text-muted-foreground">{item.detail}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-3 bg-ph text-white font-medium transition-all"
                        >
                            Schedule a Strategy Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            
        </section>
    );
};

export default ApproachSection;