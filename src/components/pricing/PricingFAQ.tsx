// src/components/pricing/PricingFAQ.tsx
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define FAQ data structure
interface FAQItemProps {
    question: string;
    answer: string;
}

const PricingFAQ = () => {
    const sectionRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Toggle FAQ item
    const toggleItem = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // FAQ items
    const faqItems: FAQItemProps[] = [
        {
            question: "What's included in the initial strategy phase?",
            answer: "The initial strategy phase is a comprehensive onboarding process that sets the foundation for our work together. It includes a deep dive into your firm's positioning, target clients, and business goals; analysis of your current marketing assets and performance; identification of your ideal client profile; assessment of your competitive landscape; review of compliance requirements; and development of a customized marketing strategy. This phase typically takes 4-6 weeks and ensures our approach is perfectly aligned with your specific needs and objectives."
        },
        {
            question: "How do you handle marketing compliance for wealth management firms?",
            answer: "Compliance is integrated into every aspect of our process. We begin by understanding your specific regulatory requirements, then build approval workflows that include compliance review at each stage. Our team has specialized training in SEC and FINRA regulations as they apply to marketing communications. We maintain detailed documentation of compliance decisions, use disclosure language appropriately, and ensure all content undergoes thorough review before publication. This approach allows us to create effective marketing that remains fully compliant with regulatory requirements."
        },
        {
            question: "What is the minimum commitment period for retainer services?",
            answer: "Our Foundation and Growth retainer plans require a minimum 6-month commitment, while the Enterprise plan requires a 12-month commitment. These timeframes allow us to implement comprehensive strategies and demonstrate meaningful results. Marketing for wealth management is a long-term investment, and these minimum terms ensure we have sufficient time to execute strategies that drive real business impact. After the initial term, contracts continue on a month-to-month basis with a 30-day notice period."
        },
        {
            question: "Can we scale our services up or down based on our needs?",
            answer: "Absolutely. We understand that your marketing needs may evolve over time. You can upgrade to a higher tier as your firm grows or as you're ready to expand your marketing initiatives. While scaling down mid-contract is more limited, we can discuss adjustments to your service package at renewal time. We review your plan quarterly to ensure it continues to align with your business objectives and make recommendations for any needed adjustments."
        },
        {
            question: "How do you measure the success of your marketing services?",
            answer: "We establish clear KPIs at the beginning of our engagement based on your specific business goals. For wealth management firms, we typically track metrics like qualified lead generation, prospect meeting conversions, AUM influenced by marketing activities, digital engagement, and brand recognition within target segments. We provide regular reporting on these metrics, along with insights on how marketing activities are contributing to business growth. Our focus is always on connecting marketing efforts to tangible business outcomes."
        },
        {
            question: "Do you offer à la carte services or must we choose a package?",
            answer: "While our packages are designed to provide comprehensive solutions, we do offer some services on an à la carte basis, particularly for firms with specific needs or those who want to start with a focused initiative. The specialized add-on packages can be purchased individually, and we can create custom scopes for specific projects. However, for ongoing marketing support, our retainer packages typically provide the best value and results."
        },
        {
            question: "What makes your pricing different from general marketing agencies?",
            answer: "Our pricing reflects our specialized expertise in wealth management marketing. Unlike general agencies that serve various industries, we focus exclusively on wealth management firms, which allows us to deliver more targeted, effective strategies from day one. Our deep understanding of regulatory requirements, high-net-worth client acquisition, and the wealth management business model means less ramp-up time and learning curve costs. While our rates may be higher than general agencies, our industry-specific approach typically delivers faster results and stronger ROI."
        },
        {
            question: "Is there a discount for annual payment?",
            answer: "Yes, we offer a 10% discount for clients who choose to pay annually rather than monthly. This applies to all retainer plans and represents a significant savings while also simplifying your accounting. Annual commitments also receive priority for rush projects and additional strategic planning sessions throughout the year."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-[#F8FAFF] overflow-hidden"
            id="pricing-faq"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white -z-10"></div>

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
                        Frequently Asked Questions
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Common Questions About <span className="text-ph">Pricing & Services</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Transparent answers to help you understand our pricing structure and service delivery
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
                                    <div className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${expandedIndex === index ? 'bg-ph text-white' : 'bg-ph/10 text-ph'
                                            }`}>
                                            <MessageCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-lg font-medium text-foreground">
                                            {item.question}
                                        </span>
                                    </div>
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
                        className="bg-white p-8 border border-gray-200 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <h3 className="text-xl font-medium text-foreground mb-3">
                            Still have questions?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            We'd be happy to discuss your specific wealth management marketing needs in more detail.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium transition-all"
                                >
                                    Schedule a Consultation
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

export default PricingFAQ;