// src/components/services/ServicesFAQ.tsx
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

// Define FAQ data structure
interface FAQItemProps {
    question: string;
    answer: string;
}

// Comprehensive wealth management marketing FAQs
const faqItems: FAQItemProps[] = [
    {
        question: "How do marketing needs differ for wealth management firms compared to other financial services?",
        answer: "Wealth management marketing has distinct requirements due to its specialized audience, regulatory environment, and relationship-based nature. High-net-worth individuals expect sophisticated, personalized communication and have longer decision cycles. Additionally, wealth management marketing must navigate SEC and FINRA regulations while building trust and credibility through educational content rather than sales-focused messaging."
    },
    {
        question: "How do you ensure marketing materials remain compliant with SEC and FINRA regulations?",
        answer: "Compliance is integrated into our entire process. We begin by understanding your specific compliance requirements and regulatory considerations. Our team has specialized training in financial services regulations, and we build approval workflows that include compliance review at each stage. We also maintain detailed documentation of compliance decisions and use disclosure language appropriately. All content undergoes thorough review before publication to ensure it meets regulatory standards while still being effective."
    },
    {
        question: "What measurable results can we expect from your marketing services?",
        answer: "Our wealth management clients typically see improvements across several key metrics: increased qualified lead generation (often 30-50% improvement), higher conversion rates on prospect meetings, greater AUM from marketing-influenced clients, improved digital engagement metrics, and enhanced brand recognition within target segments. We establish clear KPIs at the beginning of our engagement and provide regular reporting on these metrics, along with insights on how marketing activities are contributing to business growth."
    },
    {
        question: "How long does it typically take to see results from wealth management marketing?",
        answer: "Wealth management has longer sales cycles than many industries, which affects marketing timelines. Initial improvements in digital presence and engagement metrics can be seen within 1-3 months. Lead generation improvements typically emerge in months 3-6, while significant AUM growth from marketing efforts generally occurs in the 6-18 month timeframe. Our approach focuses on building sustainable marketing assets and processes that deliver compounding returns over time, rather than quick but temporary spikes in activity."
    },
    {
        question: "Do you work with compliance departments or do we need to handle that internally?",
        answer: "We actively collaborate with your compliance team throughout the marketing process. Our experience with wealth management regulations allows us to create marketing materials that address compliance concerns proactively. We can work directly with your compliance officers, establish approval workflows, document regulatory considerations, and maintain audit trails of marketing activities. This collaborative approach ensures compliance while maintaining marketing effectiveness."
    },
    {
        question: "How do you target high-net-worth individuals and institutions effectively?",
        answer: "Our targeting approach for HNW individuals and institutions is sophisticated and multi-faceted. We use a combination of demographic, psychographic, behavioral, and interest-based targeting across digital platforms. For ultra-high-net-worth prospects, we employ account-based marketing strategies that identify specific individuals or organizations. We also leverage professional networks, centers of influence, and niche interest communities where wealthy individuals engage. Our approach prioritizes quality over quantity, focusing on reaching the right prospects rather than maximizing reach."
    },
    {
        question: "What makes Acumen Marketing different from other marketing agencies?",
        answer: "Unlike general marketing agencies, we exclusively serve wealth management firms, RIAs, family offices, and financial advisors. This specialization gives us deep understanding of your business model, clients, and regulatory environment. Our team has extensive experience in wealth management marketing, and we've developed specialized processes that address the unique challenges in this space. We focus on metrics that matter to wealth management firms—like AUM growth and client acquisition—rather than vanity marketing metrics."
    },
    {
        question: "What is your pricing structure for marketing services?",
        answer: "We offer flexible engagement models based on your specific needs and goals. These include comprehensive marketing programs (typically starting at $8,000-15,000 monthly), project-based engagements for specific initiatives, and advisory retainers for strategic guidance. All engagements begin with a paid strategy phase to ensure alignment and establish clear objectives. We're transparent about pricing and tie our recommendations to expected business outcomes. Each program is customized to your firm's size, growth objectives, and current marketing maturity."
    },
    {
        question: "How do you handle the specialized terminology and concepts in wealth management?",
        answer: "Our team is well-versed in wealth management terminology, concepts, and best practices. We understand the nuances of different investment approaches, wealth planning strategies, and fiduciary considerations. When creating content, we can translate complex financial concepts into clear, engaging material without oversimplification. For highly technical topics, we collaborate with your subject matter experts to ensure accuracy while maintaining an approachable tone that resonates with your target audience."
    },
    {
        question: "Can you work with our existing marketing team or resources?",
        answer: "Absolutely. We're flexible in how we structure our working relationship. We can augment your existing marketing capabilities, providing specialized expertise in wealth management marketing while collaborating with your internal team. Alternatively, we can function as your complete outsourced marketing department if you don't have in-house resources. We establish clear roles and responsibilities, communication protocols, and approval processes to ensure seamless integration with your existing operations."
    }
];

const ServicesFAQ = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Toggle FAQ item
    const toggleItem = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-[#F8FAFF] overflow-hidden"
            id="faq"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white pointer-events-none"></div>

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F6BFF' fill-opacity='0.8'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
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
                        Common questions about our wealth management marketing services
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* FAQ Items with elegant animations */}
                    <div className="space-y-4">
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

                    {/* Have more questions prompt */}
                    <motion.div
                        className="mt-12 p-8 bg-white border border-gray-200 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <h3 className="text-xl font-medium text-foreground mb-3">
                            Have more questions?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            We're happy to discuss your specific wealth management marketing needs in more detail.
                        </p>
                        <motion.div
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <a
                                href="/contact"
                                className="inline-flex items-center px-8 py-3 bg-ph text-white font-medium transition-all hover:bg-ph-dark"
                            >
                                Schedule a Consultation
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesFAQ;