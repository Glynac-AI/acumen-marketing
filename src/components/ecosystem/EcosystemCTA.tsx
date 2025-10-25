// src/components/ecosystem/EcosystemCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Network } from "lucide-react";

const EcosystemCTA = () => {
    const ecosystemLinks = [
        {
            name: "Acumen Labs",
            description: "Digital Marketing & Lead Generation",
            link: "/",
            current: true
        },
        {
            name: "Acumen Strategy",
            description: "Business Strategy Consulting",
            link: "#",
            external: true
        },
        {
            name: "Acumen Talent",
            description: "Executive Search & Recruiting",
            link: "#",
            external: true
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Main CTA */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ph/10 text-ph mb-6">
                            <Network className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-foreground mb-6">
                            Experience the Power of the{" "}
                            <span className="text-ph font-normal">Acumen Ecosystem</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                            Start with Acumen Labs for your marketing needs, and discover how our
                            integrated ecosystem can support every aspect of your firm's growth
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg shadow-ph/20"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Schedule Strategy Call
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/pricing"
                                    className="inline-flex items-center px-8 py-4 bg-white text-foreground font-medium rounded-lg border-2 border-gray-200 hover:border-ph transition-all"
                                >
                                    View Packages & Pricing
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Ecosystem Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-xl font-medium text-foreground text-center mb-8">
                            Explore Other Acumen Brands
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {ecosystemLinks.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {item.current ? (
                                        <div className="bg-ph/5 p-6 rounded-lg border-2 border-ph text-center">
                                            <h4 className="text-lg font-medium text-ph mb-2">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                {item.description}
                                            </p>
                                            <span className="text-xs text-ph font-medium uppercase tracking-wide">
                                                You are here
                                            </span>
                                        </div>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-ph transition-all text-center group"
                                            target={item.external ? "_blank" : "_self"}
                                            rel={item.external ? "noopener noreferrer" : undefined}
                                        >
                                            <h4 className="text-lg font-medium text-foreground mb-2 group-hover:text-ph transition-colors">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                {item.description}
                                            </p>
                                            <span className="text-xs text-ph font-medium uppercase tracking-wide flex items-center justify-center">
                                                Visit Website
                                                <ArrowRight className="w-3 h-3 ml-1" />
                                            </span>
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                </div>
            </motion.div>

            {/* Bottom note */}
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-sm text-muted-foreground">
                    Each Acumen brand operates independently while collaborating to deliver
                    comprehensive solutions for wealth management firms
                </p>
            </motion.div>
        </div>
            </div >
        </section >
    );
};

export default EcosystemCTA;