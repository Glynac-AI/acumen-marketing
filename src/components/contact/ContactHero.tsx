// src/components/contact/ContactHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";

const ContactHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-white to-[#EDF3FF] z-0"></div>

            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>

                <motion.div
                    className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>

                <motion.div
                    className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                ></motion.div>

                <motion.div
                    className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                ></motion.div>
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        className="flex items-center justify-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="h-px w-8 bg-ph/40 mr-3"></div>
                        <span className="text-sm text-ph font-medium uppercase tracking-wider">Get Started</span>
                        <div className="h-px w-8 bg-ph/40 ml-3"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight text-[#0A2540] mb-3">
                            Ready to Accelerate Your
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight">
                            <span className="relative inline-block text-ph font-normal">
                                AUM Growth?
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    >
                        Your 90-day growth sprint starts with a simple 30-minute strategy call
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-12 mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                    >
                        {[
                            { icon: <Mail className="w-5 h-5" />, value: "contact@acumen-labs.com", label: "Email Us" },
                            { icon: <Phone className="w-5 h-5" />, value: "(773) 430-3534", label: "Call Us" },
                            { icon: <MapPin className="w-5 h-5" />, value: "4753 N. Broadway, Chicago IL", label: "Visit Us" }
                        ].map((contact, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-white/50 backdrop-blur-sm px-8 py-5 rounded-sm border border-gray-100 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-3">
                                    {contact.icon}
                                </div>
                                <div className="text-lg text-foreground font-medium mb-1">
                                    {contact.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {contact.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 1.2, delay: 1 }}
                    >
                        <motion.div
                            className="flex flex-col items-center text-muted-foreground hover:text-ph transition-colors duration-300 cursor-pointer"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 0.5 }}
                            onClick={() => { document.getElementById('contact-options')?.scrollIntoView({ behavior: 'smooth' }); }}
                        >
                            <span className="text-sm mb-2">Choose Your Option</span>
                            <ArrowDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;