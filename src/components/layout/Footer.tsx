// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-100 py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* 5-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

                    {/* Column 1: Company - UPDATED */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wide">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/ecosystem" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    The Acumen Ecosystem
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/press" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Press & Media
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wide">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services#paid-media" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Paid Media Campaigns
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#content-seo" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Content & SEO
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#webinars" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Webinars & Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#abm" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    ABM Strategies
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-ph hover:text-ph-dark transition-colors text-sm font-medium">
                                    All Services →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Who We Serve */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wide">Who We Serve</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/who-we-serve#rias" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Registered Investment Advisors (RIAs)
                                </Link>
                            </li>
                            <li>
                                <Link to="/who-we-serve#iars" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Investment Advisor Representatives (IARs)
                                </Link>
                            </li>
                            <li>
                                <Link to="/who-we-serve#family-offices" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Family Offices
                                </Link>
                            </li>
                            <li>
                                <Link to="/who-we-serve#custodians" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Custodians
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Resources - UPDATED */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wide">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/blog" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/case-studies" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <span className="text-muted-foreground/50 text-sm cursor-not-allowed">
                                    Industry Reports
                                </span>
                            </li>
                            <li>
                                <span className="text-muted-foreground/50 text-sm cursor-not-allowed">
                                    Webinars
                                </span>
                            </li>
                            <li>
                                <span className="text-muted-foreground/50 text-sm cursor-not-allowed">
                                    Tools & Calculators
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Get Started */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wide">Get Started</h3>
                        <ul className="space-y-3 mb-6">
                            <li>
                                <Link to="/pricing" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Packages & Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Schedule Strategy Call
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-muted-foreground hover:text-ph transition-colors text-sm">
                                    Request Proposal
                                </Link>
                            </li>
                        </ul>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center text-muted-foreground text-sm">
                                <Phone className="w-4 h-4 text-ph mr-2 flex-shrink-0" />
                                <a href="tel:+17734303534" className="hover:text-ph transition-colors">
                                    (773) 430-3534
                                </a>
                            </div>
                            <div className="flex items-start text-muted-foreground text-sm">
                                <Mail className="w-4 h-4 text-ph mr-2 flex-shrink-0 mt-0.5" />
                                <a href="mailto:contact@acumen-labs.com" className="hover:text-ph transition-colors break-all">
                                    contact@acumen-labs.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Legal Links */}
                <div className="pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-muted-foreground text-sm">
                            © {currentYear} Acumen Labs. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                            <span className="text-muted-foreground/50 cursor-not-allowed">
                                Privacy Policy
                            </span>
                            <span className="text-muted-foreground/50 cursor-not-allowed">
                                Terms of Service
                            </span>
                            <span className="text-muted-foreground/50 cursor-not-allowed">
                                Cookie Policy
                            </span>
                            <span className="text-muted-foreground/50 cursor-not-allowed">
                                FINRA/SEC Compliance Statement
                            </span>
                            <span className="text-muted-foreground/50 cursor-not-allowed">
                                Accessibility Statement
                            </span>
                            <span className="text-muted-foreground/50 cursor-not-allowed">
                                Sitemap
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;