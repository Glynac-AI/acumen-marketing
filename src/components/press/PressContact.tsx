// src/components/press/PressContact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

const PressContact = () => {
    return (
        <section className="py-24 bg-[#F8FAFF]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-white p-12 rounded-2xl border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
                                Media <span className="text-ph font-normal">Inquiries</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                For press inquiries, interviews, or media kit requests, please contact our media relations team
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Contact Person */}
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-4">
                                    <User className="w-6 h-6" />
                                </div>
                                <div className="text-sm text-muted-foreground mb-2">Media Contact</div>
                                <div className="font-medium text-foreground">Sarah Reynolds</div>
                                <div className="text-sm text-muted-foreground">CEO & Founder</div>
                            </div>

                            {/* Email */}
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-sm text-muted-foreground mb-2">Email</div>
                                <a
                                    href="mailto:media@acumenlabs.com"
                                    className="font-medium text-ph hover:text-ph-dark transition-colors break-all"
                                >
                                    media@acumenlabs.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-4">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="text-sm text-muted-foreground mb-2">Phone</div>
                                <a
                                    href="tel:+17734303534"
                                    className="font-medium text-ph hover:text-ph-dark transition-colors"
                                >
                                    (773) 430-3534
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                            <p className="text-sm text-muted-foreground">
                                Media kit and brand assets available upon request • Response time: Within 24 hours
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PressContact;