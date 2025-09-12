// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Navigation links
    const mainLinks = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
    ];

    // Service links
    const serviceLinks = [
        { name: "Content & Thought Leadership", link: "/services#content" },
        { name: "SEO & Website Optimization", link: "/services#seo" },
        { name: "Paid Media Campaigns", link: "/services#paid-media" },
        { name: "Account-Based Marketing", link: "/services#abm" },
        { name: "Design & Branding", link: "/services#design" },
        { name: "Webinars & Events", link: "/services#events" }
    ];

    return (
        <footer className="border-t border-gray-100 py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Column 1: Logo and company info */}
                    <div>
                        <Link to="/" className="inline-flex items-center mb-4">
                            <span className="text-2xl font-display tracking-tight">
                                <span className="text-[#4F6BFF] font-normal">Acumen</span> <span className="text-[#0A2540] font-light">Marketing</span>
                            </span>
                        </Link>

                        <p className="text-[#505c6e] mb-6 leading-relaxed">
                            Specialized marketing solutions for wealth management firms, RIAs, family offices, and financial advisors.
                        </p>

                        <div className="flex items-center mb-4 text-[#505c6e]">
                            <MapPin className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
                            4753 N. Broadway, Chicago IL 60640
                        </div>

                        <div className="flex items-center mb-4 text-[#505c6e]">
                            <Phone className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
                            (773) 430-3534
                        </div>

                        <div className="flex items-center text-[#505c6e]">
                            <Mail className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
                            info@acumen-strategy.com
                        </div>
                    </div>

                    {/* Column 2: Main Navigation */}
                    <div>
                        <h3 className="text-foreground font-medium mb-5">Navigation</h3>
                        <ul className="space-y-3">
                            {mainLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className="text-[#505c6e] hover:text-[#4F6BFF] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-foreground font-medium mb-5">Services</h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className="text-[#505c6e] hover:text-[#4F6BFF] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-foreground font-medium mb-5">Stay Updated</h3>
                        <p className="text-[#505c6e] mb-4">
                            Subscribe to our newsletter for wealth management marketing insights and trends.
                        </p>

                        <div className="flex flex-col space-y-3">
                            <motion.div
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="self-start"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#4F6BFF] text-white text-sm font-medium rounded-md transition-colors hover:bg-[#3A56E8]"
                                >
                                    Request Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Simple copyright line */}
                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-[#505c6e] mb-4 md:mb-0">
                        © {currentYear} Acumen Marketing. Part of the Acumen Group. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <Link to="/privacy" className="text-sm text-[#505c6e] hover:text-[#4F6BFF] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-[#505c6e] hover:text-[#4F6BFF] transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;