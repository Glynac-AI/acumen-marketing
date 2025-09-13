// src/components/home/ServicesShowcase.tsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
    FileText,
    Globe,
    CreditCard,
    Users,
    Calendar,
    PenTool,
    ArrowRight,
} from "lucide-react";

const ServicesShowcase = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Subtle scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Services data
    const services = [
        {
            id: "content",
            icon: <FileText className="w-6 h-6" />,
            title: "Content & Thought Leadership",
            description: "Position your firm as a trusted voice in the industry.",
            detail: "We develop high-quality whitepapers, newsletters, LinkedIn campaigns, and PR placements that showcase your expertise while maintaining full compliance with industry regulations."
        },
        {
            id: "seo",
            icon: <Globe className="w-6 h-6" />,
            title: "SEO & Website Optimization",
            description: "Improve your visibility and generate inbound leads.",
            detail: "Through keyword research, SEO audits, and on-page optimization, we enhance your digital presence to attract qualified prospects seeking wealth management services."
        },
        {
            id: "paid-media",
            icon: <CreditCard className="w-6 h-6" />,
            title: "Paid Media Campaigns",
            description: "Drive targeted traffic and qualified leads.",
            detail: "We create and manage sophisticated campaigns across Meta, LinkedIn, and PPC platforms with precise targeting focused on high-net-worth individuals and institutions."
        },
        {
            id: "abm",
            icon: <Users className="w-6 h-6" />,
            title: "Account-Based Marketing",
            description: "Personalized outreach for high-value prospects.",
            detail: "Using data scraping, tailored email sequences, and webinar funnels, we help you connect with specific high-value targets and institutional clients."
        },
        {
            id: "design",
            icon: <PenTool className="w-6 h-6" />,
            title: "Design & Branding",
            description: "Compliance-aware, client-ready brand assets.",
            detail: "We create professional proposals, presentations, one-pagers, and visual assets that enhance your firm's credibility while meeting compliance requirements."
        },
        {
            id: "events",
            icon: <Calendar className="w-6 h-6" />,
            title: "Webinars & Events",
            description: "Extend visibility and convert attendees into clients.",
            detail: "We develop and promote CE-credit eligible webinars and provide industry panel support to help you demonstrate expertise to potential clients."
        }
    ];

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
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
            className="py-24 md:py-32 bg-white"
            id="services"
        >
            <div className="container mx-auto px-6">
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

                    <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                        <span className="text-ph font-normal">Specialized</span> Marketing Solutions
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We offer a full suite of marketing solutions designed for wealth management firms.
                        Each service is strategy-led, compliance-friendly, and backed by measurable results.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Desktop Layout - Grid of Services */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl overflow-hidden shadow-sm group transition-all duration-300 hover:shadow-md relative"
                            >
                                {/* Subtle gradient in the top-right corner of each card */}
                                <div className="absolute top-0 right-0 w-2/3 h-32 bg-gradient-to-bl from-ph/5 to-transparent rounded-tr-xl"></div>

                                <div className="p-8 flex flex-col h-full relative z-10">
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-ph mr-4 mt-1 flex-shrink-0 group-hover:bg-ph group-hover:text-white transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-foreground mb-1">{service.title}</h3>
                                            <p className="text-ph">{service.description}</p>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm mb-6 mt-3 flex-grow">
                                        {service.detail}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            to={`/services#${service.id}`}
                                            className="inline-flex items-center text-sm text-ph group-hover:text-ph-dark transition-colors"
                                        >
                                            Learn more
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                                to="/services"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-ph text-white font-medium rounded-lg shadow-sm hover:bg-ph-dark transition-colors"
                            >
                                Explore Our Services in Detail
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;