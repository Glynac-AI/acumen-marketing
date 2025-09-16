// src/components/contact/ContactInfo.tsx
import React from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Calendar,
    Linkedin,
    Twitter,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
    return (
        <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
                className="bg-white p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h3 className="text-xl font-medium text-foreground mb-6">Contact Information</h3>

                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Address</div>
                            <div className="text-foreground">4753 N. Broadway</div>
                            <div className="text-foreground">Chicago, IL 60640</div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Phone</div>
                            <a href="tel:+17734303534" className="text-foreground hover:text-ph transition-colors">
                                (773) 430-3534
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Email</div>
                            <a href="mailto:info@acumen-strategy.com" className="text-foreground hover:text-ph transition-colors">
                                info@acumen-strategy.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Business Hours</div>
                            <div className="text-foreground">Monday - Friday</div>
                            <div className="text-foreground">9:00 AM - 5:00 PM CT</div>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-sm text-muted-foreground mb-3">Connect With Us</div>
                    <div className="flex space-x-3">
                        <a
                            href="https://linkedin.com/company/acumen-marketing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph hover:bg-ph hover:text-white transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com/acumen_marketing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph hover:bg-ph hover:text-white transition-all duration-300"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Schedule a Call */}
            <motion.div
                className="bg-[#F8FAFF] p-6 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                id="schedule"
            >
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground">Schedule a Call</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                    Prefer to schedule a call directly? Use our online booking system to find a time that works for you.
                </p>

                <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                >
                    <a
                        href="https://calendly.com/acumen-marketing/consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2 bg-ph text-white text-sm font-medium rounded-sm hover:bg-ph-dark transition-colors"
                    >
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                className="bg-white p-6 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <h3 className="text-xl font-medium text-foreground mb-4">Quick Links</h3>

                <ul className="space-y-2">
                    {[
                        { title: "Services Overview", link: "/services" },
                        { title: "About Our Team", link: "/about#team" },
                        { title: "Client Case Studies", link: "/services#case-studies" },
                        { title: "Frequently Asked Questions", link: "/services#faq" }
                    ].map((link, index) => (
                        <li key={index}>
                            <Link to={link.link} className="flex items-center text-foreground hover:text-ph transition-colors">
                                <ArrowRight className="w-4 h-4 mr-2 text-ph" />
                                <span>{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default ContactInfo;