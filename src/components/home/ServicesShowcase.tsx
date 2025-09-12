// src/components/home/ServicesShowcase.tsx
import { useState, useEffect } from "react";
import {
    FileText as FileTextIcon,
    Globe as GlobeIcon,
    CreditCard,
    Users as UsersIcon,
    Calendar,
    PenTool,
    ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { useRef } from "react";

const ServicesShowcase = () => {
    const [activeService, setActiveService] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const serviceRef = useRef<HTMLElement>(null);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: serviceRef,
        offset: ["start end", "end start"]
    });

    // Parallax and opacity transforms
    const headerY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Services data
    const services = [
        {
            id: "content",
            icon: <FileTextIcon className="w-6 h-6" />,
            title: "Content & Thought Leadership",
            description: "Position your firm as a trusted voice in the industry.",
            detail: "We develop high-quality whitepapers, newsletters, LinkedIn campaigns, and PR placements that showcase your expertise. Our content strategies are designed to establish credibility and trust with your target audience while maintaining full compliance with industry regulations."
        },
        {
            id: "seo",
            icon: <GlobeIcon className="w-6 h-6" />,
            title: "SEO & Website Optimization",
            description: "Improve your visibility and generate inbound leads.",
            detail: "Through keyword research, SEO audits, and on-page optimization, we enhance your digital presence to attract qualified prospects. We focus on industry-specific optimization that helps you rank for the terms your ideal clients are searching for in the wealth management space."
        },
        {
            id: "paid-media",
            icon: <CreditCard className="w-6 h-6" />,
            title: "Paid Media Campaigns",
            description: "Drive targeted traffic and qualified leads.",
            detail: "We create and manage sophisticated campaigns across Meta, LinkedIn, and PPC platforms with full-funnel reporting. Our approach is centered on reaching high-net-worth individuals and institutional clients through precise targeting and compelling messaging."
        },
        {
            id: "abm",
            icon: <UsersIcon className="w-6 h-6" />,
            title: "Account-Based Marketing",
            description: "Personalized outreach for high-value prospects.",
            detail: "Using data scraping, tailored email sequences, and webinar funnels, we help you connect with specific high-value targets. Our ABM strategies are designed to nurture relationships with institutional clients and UHNW individuals through personalized communication."
        },
        {
            id: "design",
            icon: <PenTool className="w-6 h-6" />,
            title: "Design & Branding",
            description: "Compliance-aware, client-ready brand assets.",
            detail: "We create professional proposals, presentations, one-pagers, and visual assets that enhance your firm's credibility. All designs are developed with compliance requirements in mind, ensuring your marketing materials are both effective and regulation-friendly."
        },
        {
            id: "events",
            icon: <Calendar className="w-6 h-6" />,
            title: "Webinars & Events",
            description: "Extend visibility and convert attendees into clients.",
            detail: "We develop and promote CE-credit eligible webinars and provide industry panel support to expand your reach. Our event strategies help you demonstrate expertise while creating opportunities for meaningful engagement with potential clients."
        }
    ];

    // Animation variants
    const cardVariants: Variants = {
        inactive: {
            scale: 0.95,
            opacity: 0.7,
            y: 0,
            transition: { duration: 0.4 }
        },
        active: {
            scale: 1,
            opacity: 1,
            y: -10,
            transition: { duration: 0.4 }
        }
    };

    const contentVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section
            ref={serviceRef}
            className="py-24 md:py-32 relative overflow-hidden bg-gray-50"
            id="services"
        >
            {/* Background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 pointer-events-none"
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
                    style={{ y: headerY, opacity: headerOpacity }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Our Services
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-ph font-normal">Specialized</span> Marketing Solutions
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        We offer a full suite of marketing solutions designed for wealth management firms.
                        Each service is strategy-led, compliance-friendly, and backed by measurable results.
                    </motion.p>
                </motion.div>

                {/* Service Cards Carousel */}
                <div className="max-w-6xl mx-auto">
                    {/* Desktop View with Interactive Cards */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-3 gap-6 mb-16">
                            {services.slice(0, 3).map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="cursor-pointer"
                                    variants={cardVariants}
                                    animate={activeService === index ? "active" : "inactive"}
                                    onClick={() => setActiveService(index)}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`bg-white rounded-xl shadow-sm overflow-hidden h-full border ${activeService === index ? 'border-ph/20' : 'border-gray-100'}`}>
                                        <div className="p-6">
                                            <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-lg font-medium text-foreground mb-2">{service.title}</h3>
                                            <p className="text-sm text-muted-foreground">{service.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-16">
                            {services.slice(3, 6).map((service, index) => (
                                <motion.div
                                    key={index + 3}
                                    className="cursor-pointer"
                                    variants={cardVariants}
                                    animate={activeService === index + 3 ? "active" : "inactive"}
                                    onClick={() => setActiveService(index + 3)}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`bg-white rounded-xl shadow-sm overflow-hidden h-full border ${activeService === index + 3 ? 'border-ph/20' : 'border-gray-100'}`}>
                                        <div className="p-6">
                                            <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-lg font-medium text-foreground mb-2">{service.title}</h3>
                                            <p className="text-sm text-muted-foreground">{service.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View with Full Cards */}
                    <div className="md:hidden space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-medium text-foreground">{service.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-4">{service.description}</p>
                                    <p className="text-sm text-muted-foreground">{service.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Service Detail Section - Desktop Only */}
                    <div className="hidden md:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="bg-white rounded-xl shadow-sm p-8 border border-ph/10"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4">
                                        {services[activeService].icon}
                                    </div>
                                    <h3 className="text-xl font-medium text-foreground">{services[activeService].title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {services[activeService].detail}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* CTA Button */}
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
                                to="/services"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-ph text-white font-medium rounded-lg shadow-sm hover:bg-ph-dark transition-colors"
                            >
                                Explore Our Services in Detail
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;