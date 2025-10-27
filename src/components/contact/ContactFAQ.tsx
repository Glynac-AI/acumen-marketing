// src/components/contact/ContactFAQ.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define FAQ data structure
interface FAQItemProps {
    question: string;
    answer: string;
}

// Contact-specific FAQs
const faqItems: FAQItemProps[] = [
    {
        question: "What happens after I submit the contact form?",
        answer: "Once you submit the contact form, our team will review your information and reach out to you within 24 hours (during business days). We'll typically schedule an initial consultation call to discuss your wealth management firm's specific needs and how our marketing services might help you achieve your goals."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer a complimentary 30-minute initial consultation to discuss your wealth management firm's marketing needs and determine if our services are a good fit. During this call, we'll learn about your challenges and goals, and share high-level recommendations about potential approaches."
    },
    {
        question: "How quickly can you start working with us?",
        answer: "Our typical onboarding process takes 1-2 weeks from the initial agreement. We begin with a comprehensive discovery phase to understand your firm, goals, and current marketing situation. This thorough start enables us to develop a strategic approach that's tailored to your specific needs. For urgent projects, we can sometimes accommodate expedited timelines."
    },
    {
        question: "What information should I prepare for our first meeting?",
        answer: "To make our initial conversation most productive, it's helpful to have information about your current marketing activities, specific challenges you're facing, business goals for the coming year, target client demographics, and any compliance considerations specific to your firm. Don't worry if you don't have all of this prepared—we can guide you through the discovery process."
    },
    {
        question: "Do you work with wealth management firms of all sizes?",
        answer: "Yes, we work with wealth management firms across the spectrum, from independent advisors to multi-billion dollar RIAs and family offices. We tailor our approach based on your firm's size, resources, and growth objectives. Our services are designed to scale appropriately for each client's situation."
    },
    {
        question: "How do your pricing structures work?",
        answer: "We offer several engagement models: Starter Package ($13,000/month), Growth Package ($22,500/month), and Leadership Package ($46,000/month). All packages include a 90-day initial commitment. Schedule a consultation to discuss which package fits your firm's needs."
    },
    {
        question: "How do you ensure marketing compliance for wealth management firms?",
        answer: "Compliance is integrated into every aspect of our process. We begin by understanding your specific regulatory requirements, build approval workflows that include compliance review at each stage, maintain detailed documentation, and use appropriate disclosure language. Our team has specialized training in SEC and FINRA regulations as they apply to marketing communications."
    },
    {
        question: "Can we see examples of your work for other wealth management firms?",
        answer: "Absolutely. While we maintain client confidentiality, we have permission to share anonymized case studies and examples from previous wealth management marketing campaigns. During our consultation, we can share relevant examples that align with your specific needs and goals."
    }
];

const ContactFAQ = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Toggle FAQ item
    const toggleItem = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-white overflow-hidden"
            id="contact-faq"
        >
            {/* Subtle pattern background */}
            <motion.div
                className="absolute inset-0 opacity-[0.03]"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6BFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px'
                }}></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        FAQ
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Frequently Asked <span className="text-ph">Questions</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Common questions about working with Acumen Marketing
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* FAQ Items with elegant animations */}
                    <div className="space-y-4 mb-16">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 bg-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <button
                                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={expandedIndex === index}
                                >
                                    <span className="text-lg font-medium text-foreground">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 border-t border-gray-100">
                                                <p className="text-muted-foreground">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        className="bg-[#F8FAFF] p-8 border border-gray-200 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-xl font-medium text-foreground mb-3">
                            Have more questions?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            We're happy to answer any additional questions you may have about our wealth management marketing services.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/contact#contact-form"
                                    className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium transition-all"
                                >
                                    Contact Us
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a
                                    href="mailto:info@acumen-strategy.com"
                                    className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-foreground font-medium transition-all"
                                >
                                    Email Us Directly
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;