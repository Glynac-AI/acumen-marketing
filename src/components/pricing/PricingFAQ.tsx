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
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Toggle FAQ item
    const toggleItem = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // FAQ items - UPDATED FROM DRAFT
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
            answer: "Our packages require a 90-day initial commitment. This timeframe allows us to implement comprehensive strategies and demonstrate meaningful results. Marketing for wealth management is a long-term investment, and this minimum term ensures we have sufficient time to execute strategies that drive real business impact. Monthly billing with 10% discount for annual prepayment is available."
        },
        {
            question: "How are the expected MQLs calculated?",
            answer: "Expected MQLs (Marketing Qualified Leads) are based on our historical performance data across similar wealth management clients. These ranges account for variables like firm size, market conditions, and campaign execution. The Starter Package typically generates 15-25 MQLs monthly, Growth Package 40-60 MQLs, and Leadership Package 80-120 MQLs. Actual results may vary based on your specific market, target audience, and how quickly prospects move through your sales process."
        },
        {
            question: "Can we customize a package or add specific services?",
            answer: "Absolutely. While our three core packages provide comprehensive solutions for most firms, we understand that each wealth management firm has unique needs. We offer various add-on services including custom video production ($2,500-$5,000), advanced ABM campaigns ($3,000/month), additional platforms ($1,500/platform/month), and PR article placement ($1,000-$2,500 per article). We can also create fully custom packages for firms with specific requirements. Schedule a consultation to discuss your needs."
        },
        {
            question: "What platforms are included in each package?",
            answer: "The Starter Package includes Facebook and LinkedIn (2-3 platforms total). The Growth Package adds Google Ads and YouTube (4-5 platforms total). The Leadership Package includes all 7 platforms: Facebook, LinkedIn, Google Ads, YouTube, Instagram, Twitter, and includes PR & media placement. Additional platforms can be added to any package for $1,500/platform/month."
        },
        {
            question: "What makes your pricing different from general marketing agencies?",
            answer: "Our pricing reflects our specialized expertise in wealth management marketing. Unlike general agencies that serve various industries, we focus exclusively on wealth management firms, which allows us to deliver more targeted, effective strategies from day one. Our deep understanding of regulatory requirements, high-net-worth client acquisition, and the wealth management business model means less ramp-up time and learning curve costs. We also provide transparent pricing with clear MQL targets, which most agencies don't offer."
        },
        {
            question: "Is there a discount for annual payment?",
            answer: "Yes, we offer a 10% discount for clients who choose to pay annually rather than monthly. This applies to all retainer packages and represents significant savings while also simplifying your accounting. Annual commitments also receive priority for rush projects and additional strategic planning sessions throughout the year."
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
                        Common Questions About{" "}
                        <span className="text-ph font-normal">Our Pricing</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Everything you need to know about our packages, commitment terms, and what to expect
                    </motion.p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-ph/30 transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-foreground pr-8">
                                        {item.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-ph flex-shrink-0" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-muted-foreground mt-4 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA at bottom of FAQ */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ph/10 text-ph mb-6">
                        <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-light text-foreground mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Schedule a complimentary consultation to discuss your specific needs and get a custom proposal
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg shadow-ph/20"
                    >
                        Schedule Strategy Call
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingFAQ;