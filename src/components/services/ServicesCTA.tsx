// src/components/services/ServicesCTA.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle,
    Mail,
    Calendar,
    PhoneCall
} from "lucide-react";

const ServicesCTA = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

    // Key marketing services
    const marketingServices = [
        "Content & Thought Leadership",
        "SEO & Website Optimization",
        "Paid Media Campaigns",
        "Account-Based Marketing",
        "Design & Branding",
        "Webinars & Events"
    ];

    // Service packages
    const servicePackages = [
        {
            title: "Strategic Advisory",
            description: "Expert guidance and strategy development for wealth management firms looking to enhance their marketing approach.",
            features: [
                "Marketing strategy development",
                "Competitive analysis",
                "Brand positioning",
                "Channel optimization",
                "Marketing technology assessment"
            ],
            price: "Starting at $5,000",
            cta: "Explore Advisory"
        },
        {
            title: "Comprehensive Marketing",
            description: "End-to-end marketing execution tailored to wealth management firms seeking significant growth.",
            features: [
                "Strategy development",
                "Content creation",
                "Digital marketing",
                "Marketing automation",
                "Performance tracking",
                "Compliance integration"
            ],
            price: "Starting at $13,000/month",
            cta: "Explore Full Service"
        },
        {
            title: "Project-Based Engagements",
            description: "Focused marketing initiatives for specific objectives and campaigns.",
            features: [
                "Website redesign",
                "Brand refresh",
                "Content development",
                "Campaign execution",
                "Marketing collateral",
                "Digital presence optimization"
            ],
            price: "Custom pricing",
            cta: "Explore Projects"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden"
            id="cta"
        >
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-ph to-[#3A56E8] pointer-events-none"></div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-pattern opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px'
            }}></div>

            {/* Abstract shape elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-bl-[100px]"></div>
            <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-white/5 rounded-tr-[200px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-6xl mx-auto"
                    style={{ opacity, y }}
                >
                    {/* Main CTA Section */}
                    <div className="text-center mb-20">
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Ready to Elevate Your <br />
                            <span className="font-normal">Wealth Management Marketing?</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Partner with Acumen Marketing to strengthen your digital presence, generate qualified leads, and build trust with prospects and clients.
                        </motion.p>
                    </div>

                    {/* Service Packages */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {servicePackages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-md p-8 border border-white/20"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                                whileHover={{ y: -8 }}
                            >
                                <h3 className="text-2xl font-medium text-white mb-3">{pkg.title}</h3>
                                <p className="text-white/80 mb-6">{pkg.description}</p>

                                <div className="mb-6">
                                    <div className="text-sm text-white/60 uppercase tracking-wider mb-3">Includes:</div>
                                    <ul className="space-y-2">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-white/80 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-xl text-white font-medium mb-6">{pkg.price}</div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    whileTap={{ x: 0 }}
                                >
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center group"
                                    >
                                        <span className="text-white font-medium">{pkg.cta}</span>
                                        <ArrowRight className="ml-2 w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Options */}
                    <div className="bg-white/10 backdrop-blur-md p-10 border border-white/20 mb-12">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-medium text-white mb-4">How to Get Started</h3>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Choose the option that works best for you. We'll follow up promptly to discuss your wealth management marketing needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: <Calendar className="w-6 h-6" />,
                                    title: "Schedule a Consultation",
                                    description: "Book a 30-minute call to discuss your marketing needs and goals.",
                                    cta: "Schedule Now",
                                    link: "/contact#schedule"
                                },
                                {
                                    icon: <Mail className="w-6 h-6" />,
                                    title: "Email Us",
                                    description: "Send us information about your firm and marketing objectives.",
                                    cta: "Email Us",
                                    link: "mailto:info@acumen-strategy.com"
                                },
                                {
                                    icon: <PhoneCall className="w-6 h-6" />,
                                    title: "Call Directly",
                                    description: "Speak with our team during business hours.",
                                    cta: "Call (773) 430-3534",
                                    link: "tel:+17734303534"
                                }
                            ].map((option, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 border border-white/20 bg-white/5"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
                                        {option.icon}
                                    </div>

                                    <h4 className="text-xl font-medium text-white mb-2">{option.title}</h4>
                                    <p className="text-white/70 mb-4">{option.description}</p>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        whileTap={{ x: 0 }}
                                    >
                                        <Link
                                            to={option.link}
                                            className="inline-flex items-center group"
                                        >
                                            <span className="text-white font-medium">{option.cta}</span>
                                            <ArrowRight className="ml-2 w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Services List */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-6">Our Wealth Management Marketing Services</h3>

                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {marketingServices.map((service, index) => (
                                <motion.span
                                    key={service}
                                    className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                                >
                                    {service}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-white text-ph font-medium shadow-lg hover:shadow-xl transition-all"
                            >
                                <span>Start Your Marketing Transformation</span>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesCTA;