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
        { name: "Pricing", link: "/pricing" },
        { name: "Our Approach", link: "/approach" },
        { name: "Ecosystem", link: "/ecosystem" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
    ];

    // Service categories
    const serviceLinks = [
        { name: "Paid Media Campaigns", link: "/services#paid-media" },
        { name: "Content & SEO", link: "/services#content-seo" },
        { name: "Webinars & Events", link: "/services#webinars" },
        { name: "ABM Strategies", link: "/services#abm" },
        { name: "All Services →", link: "/services" }
    ];

    // Who We Serve
    const whoWeServeLinks = [
        { name: "RIAs", link: "/services#rias" },
        { name: "IARs", link: "/services#iars" },
        { name: "Family Offices", link: "/services#family-offices" },
        { name: "Custodians", link: "/services#custodians" }
    ];

    return (
        <footer className="border-t border-gray-100 py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Column 1: Logo and company info */}
                    <div>
                        <Link to="/" className="inline-flex items-center mb-4">
                            <span className="text-2xl font-display tracking-tight">
                                <span className="text-[#4F6BFF] font-medium">Acumen</span>{" "}
                                <span className="text-[#0A2540] font-light">Labs</span>
                            </span>
                        </Link>

                        <p className="text-[#505c6e] mb-6 leading-relaxed">
                            Compliance-first digital marketing exclusively for RIAs, IARs, Family Offices & Custodians. Performance-driven strategies that accelerate AUM growth.
                        </p>

                        <div className="flex items-center mb-4 text-[#505c6e]">
                            <Phone className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
                            (773) 430-3534
                        </div>

                        <div className="flex items-center text-[#505c6e]">
                            <Mail className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
                            contact@acumen-labs.com
                        </div>
                    </div>

                    {/* Column 2: Services */}
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

                    {/* Column 3: Who We Serve */}
                    <div>
                        <h3 className="text-foreground font-medium mb-5">Who We Serve</h3>
                        <ul className="space-y-3">
                            {whoWeServeLinks.map((item, index) => (
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

                    {/* Column 4: Company */}
                    <div>
                        <h3 className="text-foreground font-medium mb-5">Company</h3>
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
                </div>

                {/* Bottom Row */}
                <div className="pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-[#505c6e] text-sm">
                            © {currentYear} Acumen Labs. All rights reserved.
                        </div>

                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy" className="text-[#505c6e] hover:text-[#4F6BFF] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-[#505c6e] hover:text-[#4F6BFF] transition-colors">
                                Terms of Service
                            </Link>
                            <Link to="/compliance" className="text-[#505c6e] hover:text-[#4F6BFF] transition-colors">
                                FINRA/SEC Compliance
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;