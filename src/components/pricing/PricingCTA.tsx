// src/components/pricing/PricingCTA.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle,
    Mail,
    Calendar,
    PhoneCall,
    Shield,
    Target,
    Users
} from "lucide-react";

const PricingCTA = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

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
                    className="max-w-5xl mx-auto"
                    style={{ opacity, y }}
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Ready to Transform Your <br />
                            <span className="font-normal">Wealth Management Marketing?</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Partner with Acumen Marketing to leverage our specialized expertise and drive AUM growth through strategic, compliance-aware marketing.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {[
                                "Specialized Expertise",
                                "Compliance-First Approach",
                                "Results-Driven Methodology",
                                "Industry-Specific Focus",
                                "Transparent Reporting"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center text-white/90">
                                    <CheckCircle className="w-5 h-5 text-white mr-2" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Contact Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                                className="p-6 border border-white/20 bg-white/5 backdrop-blur-sm"
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

                    {/* Main CTA Button */}
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
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

                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/80">
                            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">RIAs</span>
                            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">Family Offices</span>
                            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">Financial Advisors</span>
                            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">Wealth Managers</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingCTA;