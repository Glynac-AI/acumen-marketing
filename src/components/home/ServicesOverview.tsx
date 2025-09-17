// src/components/home/ServicesOverview.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
    FileText, 
    Globe, 
    CreditCard, 
    Users, 
    Calendar, 
    PenTool, 
    ArrowRight 
} from "lucide-react";

// Define service types
interface ServiceProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}

// Service data
const services: ServiceProps[] = [
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Content & Thought Leadership",
        description: "Establish expertise through compliance-approved content that resonates with high-net-worth individuals and institutions.",
        link: "/services#content-marketing"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "SEO & Website Optimization",
        description: "Improve visibility and generate qualified inbound leads through strategic digital presence enhancements.",
        link: "/services#seo-website"
    },
    {
        icon: <CreditCard className="w-6 h-6" />,
        title: "Paid Media Campaigns",
        description: "Drive targeted traffic and qualified leads through sophisticated campaigns focused on high-net-worth audiences.",
        link: "/services#paid-media"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Account-Based Marketing",
        description: "Personalized outreach to specific high-value prospects and institutions with coordinated multi-channel campaigns.",
        link: "/services#account-based-marketing"
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Design & Branding",
        description: "Create sophisticated visual identities and marketing materials that reflect the premium nature of wealth management.",
        link: "/services#design-branding"
    },
    {
        icon: <Calendar className="w-6 h-6" />,
        title: "Webinars & Events",
        description: "Develop and promote educational events that showcase expertise while generating qualified leads.",
        link: "/services#webinars-events"
    }
];

const ServicesOverview = () => {
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
            id="services-overview"
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
                        Our Services
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Specialized Marketing for <span className="text-ph">Wealth Management</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Comprehensive marketing services designed specifically for the unique needs 
                        and regulatory requirements of wealth management firms
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index} 
                            service={service} 
                            index={index} 
                        />
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center px-8 py-3 bg-ph text-white font-medium transition-all"
                        >
                            View All Services
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

// Service card component with enhanced animations
const ServiceCard = ({ service, index }: { service: ServiceProps; index: number }) => {
    return (
        <motion.div
            className="bg-white border border-gray-200 group hover:border-ph/30 transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
            <Link to={service.link} className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6 group-hover:bg-ph group-hover:text-white transition-colors duration-300">
                    {service.icon}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center text-ph font-medium">
                    <span>Learn more</span>
                    <motion.div
                        className="ml-2"
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ServicesOverview;