// src/components/services/CaseStudies.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    TrendingUp,
    Users,
    LineChart,
    Clock,
    Building,
    Globe
} from "lucide-react";
import { Link } from "react-router-dom";

// Define case study data structure
interface CaseStudyProps {
    id: string;
    title: string;
    clientType: string;
    aum: string;
    challenge: string;
    solution: string;
    results: {
        icon: React.ReactNode;
        stat: string;
        label: string;
    }[];
    services: string[];
    quote?: {
        text: string;
        author: string;
        position: string;
    };
    duration: string;
}

// Case study data - realistic but anonymized examples
const caseStudies: CaseStudyProps[] = [
    {
        id: "case-1",
        title: "AUM Growth Strategy for Independent RIA",
        clientType: "Independent RIA",
        aum: "$750M",
        challenge: "A growing RIA with a strong local reputation was struggling to expand beyond their geographic area and attract higher-net-worth clients. Their existing marketing efforts were inconsistent and lacked clear targeting.",
        solution: "We developed a comprehensive digital presence strategy, including a website overhaul, thought leadership content program, and targeted LinkedIn campaigns focused on professionals in specific high-income industries.",
        results: [
            {
                icon: <TrendingUp className="w-5 h-5" />,
                stat: "32%",
                label: "AUM Growth"
            },
            {
                icon: <Users className="w-5 h-5" />,
                stat: "18",
                label: "New HNW Clients"
            },
            {
                icon: <LineChart className="w-5 h-5" />,
                stat: "2.4x",
                label: "Lead Quality Improvement"
            }
        ],
        services: ["Content & Thought Leadership", "SEO & Website Optimization", "Paid Media Campaigns"],
        quote: {
            text: "Acumen's approach helped us target exactly the kind of clients we wanted to work with. The marketing strategy they developed positioned us as true experts in our niche and has been instrumental in our growth.",
            author: "Managing Partner",
            position: "Independent RIA with $750M AUM"
        },
        duration: "12 months"
    },
    {
        id: "case-2",
        title: "Multi-Family Office Digital Transformation",
        clientType: "Multi-Family Office",
        aum: "$1.2B",
        challenge: "A well-established multi-family office had an outdated digital presence that didn't reflect their sophisticated service offering. They were struggling to articulate their unique value proposition and differentiate from competitors.",
        solution: "We executed a complete brand refresh and digital transformation, creating a premium website experience, developing exclusive thought leadership content, and implementing targeted account-based marketing to reach UHNW families.",
        results: [
            {
                icon: <Building className="w-5 h-5" />,
                stat: "4",
                label: "New Family Relationships"
            },
            {
                icon: <TrendingUp className="w-5 h-5" />,
                stat: "$215M",
                label: "New AUM"
            },
            {
                icon: <Globe className="w-5 h-5" />,
                stat: "186%",
                label: "Website Engagement Increase"
            }
        ],
        services: ["Design & Branding", "Account-Based Marketing", "Content & Thought Leadership"],
        quote: {
            text: "Our previous marketing didn't reflect the caliber of our firm. Acumen transformed our brand and digital presence, helping us clearly articulate why families should choose us over other options.",
            author: "Chief Executive Officer",
            position: "Multi-Family Office with $1.2B AUM"
        },
        duration: "9 months"
    },
    {
        id: "case-3",
        title: "Advisor Growth Program for Wealth Management Firm",
        clientType: "Wealth Management Firm",
        aum: "$3.5B",
        challenge: "A wealth management firm with multiple advisors was experiencing inconsistent growth across their team. Some advisors were thriving while others struggled to build their client base and AUM.",
        solution: "We developed a comprehensive advisor enablement program, creating personalized marketing playbooks, custom content packages, and training to help advisors leverage digital marketing for business development.",
        results: [
            {
                icon: <TrendingUp className="w-5 h-5" />,
                stat: "41%",
                label: "Average Advisor AUM Growth"
            },
            {
                icon: <Clock className="w-5 h-5" />,
                stat: "62%",
                label: "Reduction in Client Acquisition Time"
            },
            {
                icon: <Users className="w-5 h-5" />,
                stat: "28",
                label: "New HNW Households Added"
            }
        ],
        services: ["Webinars & Events", "Content & Thought Leadership", "Account-Based Marketing"],
        quote: {
            text: "The marketing playbooks and content Acumen created gave our advisors powerful tools to engage prospects and build credibility. Our advisors who fully implemented the program saw tremendous growth.",
            author: "Director of Business Development",
            position: "Wealth Management Firm with $3.5B AUM"
        },
        duration: "18 months"
    }
];

const CaseStudies = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeCase, setActiveCase] = useState(0);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-white overflow-hidden"
            id="case-studies"
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
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Success Stories
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Client <span className="text-ph">Case Studies</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        See how our specialized approach has helped wealth management firms achieve measurable growth
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Case study tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {caseStudies.map((study, index) => (
                            <motion.button
                                key={index}
                                className={`px-5 py-3 transition-all duration-300 ${activeCase === index
                                        ? 'bg-ph text-white shadow-md'
                                        : 'bg-white border border-gray-200 text-muted-foreground hover:border-ph/30'
                                    }`}
                                onClick={() => setActiveCase(index)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                                whileHover={{ y: -3 }}
                                whileTap={{ y: 0 }}
                            >
                                {study.title}
                            </motion.button>
                        ))}
                    </div>

                    {/* Case study content */}
                    <motion.div
                        key={`case-${activeCase}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border border-gray-200 shadow-sm"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Left sidebar with client info */}
                            <div className="p-8 bg-[#F8FAFF] border-b lg:border-b-0 lg:border-r border-gray-200">
                                <div className="space-y-6">
                                    {/* Client type */}
                                    <div>
                                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                                            Client Type
                                        </h4>
                                        <p className="text-foreground font-medium">
                                            {caseStudies[activeCase].clientType}
                                        </p>
                                    </div>

                                    {/* AUM */}
                                    <div>
                                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                                            Assets Under Management
                                        </h4>
                                        <p className="text-foreground font-medium">
                                            {caseStudies[activeCase].aum}
                                        </p>
                                    </div>

                                    {/* Duration */}
                                    <div>
                                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                                            Engagement Duration
                                        </h4>
                                        <p className="text-foreground font-medium">
                                            {caseStudies[activeCase].duration}
                                        </p>
                                    </div>

                                    {/* Services Used */}
                                    <div>
                                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                                            Services Utilized
                                        </h4>
                                        <ul className="space-y-2">
                                            {caseStudies[activeCase].services.map((service, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <div className="w-2 h-2 rounded-full bg-ph mr-2"></div>
                                                    <span className="text-muted-foreground">
                                                        {service}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="pt-4">
                                        <motion.div
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-block"
                                        >
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center px-4 py-2 bg-ph text-white text-sm font-medium rounded-sm hover:bg-ph-dark transition-colors"
                                            >
                                                Discuss Your Project
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Main content area */}
                            <div className="p-8 lg:col-span-2">
                                {/* Challenge and Solution */}
                                <div className="mb-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Challenge */}
                                        <div>
                                            <h3 className="text-lg font-medium text-foreground mb-4 flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                                    <span className="text-sm">01</span>
                                                </div>
                                                Challenge
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {caseStudies[activeCase].challenge}
                                            </p>
                                        </div>

                                        {/* Solution */}
                                        <div>
                                            <h3 className="text-lg font-medium text-foreground mb-4 flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                                    <span className="text-sm">02</span>
                                                </div>
                                                Solution
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {caseStudies[activeCase].solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="mb-10">
                                    <h3 className="text-lg font-medium text-foreground mb-6 flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3">
                                            <span className="text-sm">03</span>
                                        </div>
                                        Results
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {caseStudies[activeCase].results.map((result, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="bg-[#F8FAFF] p-6 flex flex-col items-center text-center"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                            >
                                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                                    {result.icon}
                                                </div>
                                                <div className="text-3xl font-display text-ph mb-2">
                                                    {result.stat}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {result.label}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial Quote */}
                                {caseStudies[activeCase].quote && (
                                    <div className="bg-[#F8FAFF] p-8 border-l-4 border-ph">
                                        <div className="relative">
                                            {/* Large quote mark */}
                                            <div className="absolute -top-6 -left-6 text-6xl text-ph/10 font-serif">"</div>

                                            <blockquote className="relative z-10">
                                                <p className="text-lg text-foreground/90 italic mb-4">
                                                    {caseStudies[activeCase].quote.text}
                                                </p>
                                                <footer className="text-sm text-muted-foreground">
                                                    — {caseStudies[activeCase].quote.author}, {caseStudies[activeCase].quote.position}
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-8">
                        <button
                            className={`flex items-center ${activeCase > 0 ? 'text-ph hover:text-ph-dark' : 'text-gray-300 cursor-not-allowed'}`}
                            onClick={() => activeCase > 0 && setActiveCase(activeCase - 1)}
                            disabled={activeCase === 0}
                        >
                            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                            <span>Previous Case Study</span>
                        </button>

                        <button
                            className={`flex items-center ${activeCase < caseStudies.length - 1 ? 'text-ph hover:text-ph-dark' : 'text-gray-300 cursor-not-allowed'}`}
                            onClick={() => activeCase < caseStudies.length - 1 && setActiveCase(activeCase + 1)}
                            disabled={activeCase === caseStudies.length - 1}
                        >
                            <span>Next Case Study</span>
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;