// src/components/home/ServicesShowcase.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { FileText, Globe, CreditCard, Users, Calendar, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesShowcase = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Handle scroll-based step activation
    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let stepIndex = 0; stepIndex < stepsRef.current.length; stepIndex++) {
                const stepEl = stepsRef.current[stepIndex];
                if (!stepEl) continue;

                const stepTop = stepEl.offsetTop;
                const stepBottom = stepTop + stepEl.offsetHeight;

                if (scrollPosition >= stepTop && scrollPosition < stepBottom && stepIndex !== activeStep) {
                    setActiveStep(stepIndex);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile, activeStep]);

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const stepLineVariants: Variants = {
        hidden: { scaleY: 0, originY: 0 },
        visible: {
            scaleY: 1,
            transition: {
                duration: 1.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    // Services data
    const services = [
        {
            number: "01",
            icon: <FileText className="w-6 h-6" />,
            title: "Content & Thought Leadership",
            description: "Position your firm as a trusted voice in the industry.",
            detail: "We develop high-quality whitepapers, newsletters, LinkedIn campaigns, and PR placements that showcase your expertise. Our content strategies are designed to establish credibility and trust with your target audience while maintaining full compliance with industry regulations."
        },
        {
            number: "02",
            icon: <Globe className="w-6 h-6" />,
            title: "SEO & Website Optimization",
            description: "Improve your visibility and generate inbound leads.",
            detail: "Through keyword research, SEO audits, and on-page optimization, we enhance your digital presence to attract qualified prospects. We focus on industry-specific optimization that helps you rank for the terms your ideal clients are searching for in the wealth management space."
        },
        {
            number: "03",
            icon: <CreditCard className="w-6 h-6" />,
            title: "Paid Media Campaigns",
            description: "Drive targeted traffic and qualified leads.",
            detail: "We create and manage sophisticated campaigns across Meta, LinkedIn, and PPC platforms with full-funnel reporting. Our approach is centered on reaching high-net-worth individuals and institutional clients through precise targeting and compelling messaging."
        },
        {
            number: "04",
            icon: <Users className="w-6 h-6" />,
            title: "Outreach & Account-Based Marketing",
            description: "Personalized outreach for high-value prospects.",
            detail: "Using data scraping, tailored email sequences, and webinar funnels, we help you connect with specific high-value targets. Our ABM strategies are designed to nurture relationships with institutional clients and UHNW individuals through personalized communication."
        },
        {
            number: "05",
            icon: <PenTool className="w-6 h-6" />,
            title: "Design & Branding",
            description: "Compliance-aware, client-ready brand assets.",
            detail: "We create professional proposals, presentations, one-pagers, and visual assets that enhance your firm's credibility. All designs are developed with compliance requirements in mind, ensuring your marketing materials are both effective and regulation-friendly."
        },
        {
            number: "06",
            icon: <Calendar className="w-6 h-6" />,
            title: "Webinars & Events",
            description: "Extend visibility and convert attendees into clients.",
            detail: "We develop and promote CE-credit eligible webinars and provide industry panel support to expand your reach. Our event strategies help you demonstrate expertise while creating opportunities for meaningful engagement with potential clients."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden"
            id="services"
        >
            {/* Animated background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"
                style={{ opacity: backgroundOpacity }}
            />

            <motion.div
                className="absolute top-0 left-0 w-full h-96 bg-ph/[0.02]"
                style={{ y: backgroundY }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        variants={itemVariants}
                    >
                        Our <span className="text-ph font-normal">Services</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        We offer a full suite of marketing solutions designed for wealth management firms.
                        Each service is strategy-led, compliance-friendly, and backed by measurable results.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left column - service navigation (desktop only) */}
                    <div className="hidden md:flex md:col-span-4 lg:col-span-3 flex-col pr-6 sticky top-32 self-start">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-start py-4 cursor-pointer ${activeStep === index
                                        ? "opacity-100"
                                        : "opacity-60 hover:opacity-80"
                                    }`}
                                onClick={() => {
                                    setActiveStep(index);
                                    const stepElement = stepsRef.current[index];
                                    if (stepElement) {
                                        window.scrollTo({
                                            top: stepElement.offsetTop - 100,
                                            behavior: "smooth"
                                        });
                                    }
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: activeStep === index ? 1 : 0.6, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div
                                    className={`relative flex items-center justify-center w-10 h-10 rounded-full mr-4 ${activeStep === index
                                            ? "bg-ph text-white"
                                            : "bg-gray-100 text-muted-foreground"
                                        }`}
                                >
                                    <span className="text-sm font-medium">
                                        {service.number}
                                    </span>
                                    {index < services.length - 1 && (
                                        <motion.div
                                            className={`absolute top-full h-[calc(100%+1rem)] w-0.5 ${activeStep > index
                                                    ? "bg-ph"
                                                    : "bg-gray-200"
                                                }`}
                                            variants={stepLineVariants}
                                            initial="hidden"
                                            animate="visible"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right column - detailed services */}
                    <div className="col-span-1 md:col-span-8 lg:col-span-9">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                ref={el => { stepsRef.current[index] = el; }}
                                className={`mb-16 md:mb-32 ${isMobile || activeStep === index
                                        ? "opacity-100"
                                        : "opacity-40"
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center mb-6 md:hidden">
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${activeStep === index
                                                ? "bg-ph text-white"
                                                : "bg-gray-100 text-muted-foreground"
                                            }`}
                                    >
                                        <span className="text-sm font-medium">
                                            {service.number}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-medium text-foreground">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="p-8 md:p-10">
                                        <div className="hidden md:flex items-center mb-6">
                                            <div className="text-ph mr-4">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-medium text-foreground">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            {service.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA at the bottom of services */}
                        <motion.div
                            className="text-center mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-ph text-white font-medium rounded-lg shadow-sm hover:bg-ph-dark transition-colors"
                                >
                                    Discover All Our Services
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;