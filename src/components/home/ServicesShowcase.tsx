// src/components/home/ServicesShowcase.tsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    FileText,
    Globe,
    CreditCard,
    Users,
    Calendar,
    PenTool,
    ArrowRight,
    ChevronRight
} from "lucide-react";

const ServicesShowcase = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeService, setActiveService] = useState(0);

    // Subtle scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Primary color for the entire section
    const primaryColor = "#4F6BFF";

    // Services data
    const services = [
        {
            id: "content",
            icon: <FileText className="w-6 h-6" />,
            title: "Content & Thought Leadership",
            description: "Position your firm as a trusted voice in the industry.",
            detail: "We develop high-quality whitepapers, newsletters, LinkedIn campaigns, and PR placements that showcase your expertise while maintaining full compliance with industry regulations.",
            benefits: [
                "Increase credibility with prospects and clients",
                "Build authority in niche wealth management areas",
                "Differentiate from competitors through expertise",
                "Generate inbound inquiries from ideal clients"
            ]
        },
        {
            id: "seo",
            icon: <Globe className="w-6 h-6" />,
            title: "SEO & Website Optimization",
            description: "Improve your visibility and generate inbound leads.",
            detail: "Through keyword research, SEO audits, and on-page optimization, we enhance your digital presence to attract qualified prospects seeking wealth management services.",
            benefits: [
                "Rank higher for wealth management search terms",
                "Generate qualified inbound traffic",
                "Create conversion-optimized landing pages",
                "Build a website that reflects your expertise"
            ]
        },
        {
            id: "paid-media",
            icon: <CreditCard className="w-6 h-6" />,
            title: "Paid Media Campaigns",
            description: "Drive targeted traffic and qualified leads.",
            detail: "We create and manage sophisticated campaigns across Meta, LinkedIn, and PPC platforms with precise targeting focused on high-net-worth individuals and institutions.",
            benefits: [
                "Target ultra-specific high-value audiences",
                "Create compelling ad creative that converts",
                "Track and optimize campaign performance",
                "Scale successful campaigns intelligently"
            ]
        },
        {
            id: "abm",
            icon: <Users className="w-6 h-6" />,
            title: "Account-Based Marketing",
            description: "Personalized outreach for high-value prospects.",
            detail: "Using data scraping, tailored email sequences, and webinar funnels, we help you connect with specific high-value targets and institutional clients.",
            benefits: [
                "Target specific individuals and firms",
                "Create personalized outreach campaigns",
                "Develop multi-touch engagement strategies",
                "Convert cold prospects into warm meetings"
            ]
        },
        {
            id: "design",
            icon: <PenTool className="w-6 h-6" />,
            title: "Design & Branding",
            description: "Compliance-aware, client-ready brand assets.",
            detail: "We create professional proposals, presentations, one-pagers, and visual assets that enhance your firm's credibility while meeting compliance requirements.",
            benefits: [
                "Create a cohesive visual identity",
                "Develop professional sales collateral",
                "Design SEC-compliant marketing materials",
                "Build presentation decks that win business"
            ]
        },
        {
            id: "events",
            icon: <Calendar className="w-6 h-6" />,
            title: "Webinars & Events",
            description: "Extend visibility and convert attendees into clients.",
            detail: "We develop and promote CE-credit eligible webinars and provide industry panel support to help you demonstrate expertise to potential clients.",
            benefits: [
                "Organize and promote educational webinars",
                "Create CE-eligible content for advisors",
                "Build follow-up sequences for attendees",
                "Convert event participants into clients"
            ]
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 bg-white relative overflow-hidden"
            id="services"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6BFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px'
            }}></div>

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

                    <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6">
                        <span className="text-ph">Specialized</span> Marketing Solutions
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We offer a full suite of marketing solutions designed for wealth management firms.
                        Each service is strategy-led, compliance-friendly, and backed by measurable results.
                    </p>
                </motion.div>

                {/* Interactive services navigation and content display */}
                <div className="max-w-5xl mx-auto mb-20">
                    {/* Service tabs - elegant, minimal design */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {services.map((service, index) => (
                            <motion.button
                                key={service.id}
                                className={`px-5 py-3 rounded-sm transition-all duration-300 ${activeService === index
                                        ? 'bg-white border-t border-l border-r border-gray-200 shadow-sm'
                                        : 'bg-transparent text-muted-foreground hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveService(index)}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <div className="flex items-center">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors duration-300 ${activeService === index
                                                ? `text-white bg-ph`
                                                : `text-ph bg-ph/10`
                                            }`}
                                    >
                                        {service.icon}
                                    </div>
                                    <span className={activeService === index ? 'text-foreground font-medium' : ''}>{service.title}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Service content - elegant display without images */}
                    <motion.div
                        className="bg-white border border-gray-200 shadow-sm overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="p-10">
                            <div className="flex flex-col md:flex-row gap-10">
                                {/* Left column - Service introduction */}
                                <div className="w-full md:w-2/5">
                                    <div className="mb-6">
                                        <motion.div
                                            className="w-16 h-16 rounded-full bg-ph/10 text-ph flex items-center justify-center mb-6 transition-colors duration-300"
                                            animate={{
                                                opacity: [0, 1],
                                                scale: [0.9, 1]
                                            }}
                                            transition={{ duration: 0.5 }}
                                            key={`icon-${activeService}`}
                                        >
                                            <div className="w-8 h-8">
                                                {services[activeService].icon}
                                            </div>
                                        </motion.div>

                                        <motion.h3
                                            className="text-2xl font-medium text-foreground mb-3"
                                            animate={{ opacity: [0, 1], y: [10, 0] }}
                                            transition={{ duration: 0.5 }}
                                            key={`title-${activeService}`}
                                        >
                                            {services[activeService].title}
                                        </motion.h3>

                                        <motion.div
                                            className="h-1 w-16 mb-4 bg-ph"
                                            animate={{ width: [0, 16], opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            key={`divider-${activeService}`}
                                        />
                                    </div>

                                    <motion.p
                                        className="text-lg text-muted-foreground"
                                        animate={{ opacity: [0, 1], y: [10, 0] }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        key={`detail-${activeService}`}
                                    >
                                        {services[activeService].detail}
                                    </motion.p>

                                    <motion.div
                                        className="mt-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <Link
                                            to={`/services#${services[activeService].id}`}
                                            className="inline-flex items-center text-ph hover:text-ph-dark transition-colors group"
                                        >
                                            <span>Learn more about this service</span>
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Right column - Benefits list */}
                                <div className="w-full md:w-3/5 bg-[#F8FAFF] p-8">
                                    <h4 className="text-lg font-medium text-foreground mb-6">Key Benefits</h4>
                                    <ul className="space-y-5">
                                        {services[activeService].benefits.map((benefit, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                                            >
                                                <div className="w-6 h-6 rounded-full bg-ph/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                                    <ChevronRight className="w-4 h-4 text-ph" />
                                                </div>
                                                <span className="text-muted-foreground">{benefit}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Service testimonial */}
                <motion.div
                    className="max-w-4xl mx-auto bg-[#F8FAFF] p-10 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative">
                        {/* Large quote mark */}
                        <div className="absolute -top-6 -left-6 text-8xl text-ph/10 font-serif">"</div>

                        <blockquote className="relative z-10">
                            <p className="text-xl text-foreground/90 italic mb-6">
                                Acumen's approach to wealth management marketing has transformed how we connect with high-net-worth clients. Their compliance-aware strategies have helped us grow AUM by 32% while maintaining full regulatory alignment.
                            </p>
                            <footer className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-ph/10 text-ph flex items-center justify-center mr-4">
                                    <span className="font-medium">JR</span>
                                </div>
                                <div>
                                    <div className="font-medium text-foreground">Jonathan Reynolds</div>
                                    <div className="text-sm text-muted-foreground">Managing Partner, Meridian Wealth Advisors</div>
                                </div>
                            </footer>
                        </blockquote>
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
                    <Link
                        to="/services"
                        className="inline-flex items-center px-8 py-3 bg-ph text-white font-medium transition-all"
                    >
                        Explore Our Services in Detail
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesShowcase;