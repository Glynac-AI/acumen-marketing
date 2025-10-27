// src/pages/Contact.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ContactHero from "@/components/contact/ContactHero";
import WhatHappensNext from "@/components/contact/WhatHappensNext";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";

const Contact = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: pageRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <motion.div
            ref={pageRef}
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="fixed inset-0 bg-[linear-gradient(rgba(79,107,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.015)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0"></div>

            <motion.div
                className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-ph/5 to-transparent blur-[80px] pointer-events-none opacity-50 z-0"
                style={{ y: backgroundY }}
            />

            <ContactHero />
            <SectionDivider />

            <WhatHappensNext />
            <SectionDivider />

            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                    <div className="lg:col-span-1">
                        <ContactInfo />
                    </div>
                </div>
            </div>
            <SectionDivider />

            <ContactFAQ />
        </motion.div>
    );
};

const SectionDivider = () => {
    return (
        <div className="relative">
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    );
};

export default Contact;