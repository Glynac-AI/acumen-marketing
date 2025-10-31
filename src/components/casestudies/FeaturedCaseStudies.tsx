// src/components/casestudies/FeaturedCaseStudies.tsx
import React from "react";
import { motion } from "framer-motion";
import { Building2, Home, Database, CheckCircle, TrendingUp, Quote } from "lucide-react";

const FeaturedCaseStudies = () => {
    // Three detailed case studies from draft
    const caseStudies = [
        {
            id: 1,
            icon: <Building2 className="w-8 h-8" />,
            title: "Everest Wealth Advisors",
            subtitle: "Independent RIA",
            profile: "Independent RIA, $750M AUM",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
            challenge: "Limited digital presence, declining lead quality, compliance concerns with marketing",
            approach: [
                "Launched compliance-approved LinkedIn campaign targeting HNW prospects",
                "Implemented educational webinar series",
                "Optimized SEO for wealth management keywords"
            ],
            solution: [
                "Growth Package implementation",
                "6-month comprehensive campaign",
                "Multi-channel lead funnel"
            ],
            results: [
                { metric: "28%", label: "Increase in qualified HNW leads" },
                { metric: "$150M", label: "AUM added in year one" },
                { metric: "$520 → $310", label: "CPL reduction" },
                { metric: "92%", label: "Lead quality satisfaction" }
            ],
            testimonial: {
                quote: "We saw 28% more qualified HNW leads and added $150M in AUM in year one. Their compliance expertise saved us from regulatory headaches while driving real growth.",
                author: "Michael Thompson",
                role: "Managing Partner"
            }
        },
        {
            id: 2,
            icon: <Home className="w-8 h-8" />,
            title: "Legacy Wealth Management",
            subtitle: "Multi-Family Office",
            profile: "Multi-family office, $2.3B AUM",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
            challenge: "Difficulty attracting next-gen wealth holders, limited digital engagement",
            approach: [
                "Developed multi-generational marketing strategy",
                "Created educational content for wealth transfer",
                "Implemented discreet, targeted campaigns"
            ],
            solution: [
                "Growth Package with next-gen focus",
                "9-month comprehensive strategy",
                "Privacy-first digital campaigns"
            ],
            results: [
                { metric: "68%", label: "Increase in qualified prospects" },
                { metric: "35%", label: "Reduction in CAC" },
                { metric: "3x", label: "Next-gen engagement" },
                { metric: "45%", label: "Digital engagement increase" }
            ],
            testimonial: {
                quote: "Acumen Labs helped us bridge the generational gap. We're now successfully engaging both current and next-generation wealth holders while maintaining the privacy standards our clients expect.",
                author: "Patricia Chen",
                role: "Chief Investment Officer"
            }
        },
        {
            id: 3,
            icon: <Database className="w-8 h-8" />,
            title: "Tri-State Financial Services",
            subtitle: "Regional Custodian",
            profile: "Regional custodian serving 150+ RIAs",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
            challenge: "Needed to expand advisor relationships and attract new RIA clients",
            approach: [
                "B2B marketing campaigns targeting RIAs",
                "Partner enablement programs",
                "Thought leadership positioning"
            ],
            solution: [
                "Leadership Package implementation",
                "12-month advisor recruitment strategy",
                "Multi-touch B2B engagement"
            ],
            results: [
                { metric: "41%", label: "Reduction in CAC" },
                { metric: "50+", label: "New RIA partnerships in 12 months" },
                { metric: "$2.8B", label: "Additional AUM from new partners" },
                { metric: "85%", label: "Partner satisfaction rate" }
            ],
            testimonial: {
                quote: "The ROI has been exceptional. We've doubled our RIA partner acquisition rate while significantly reducing our acquisition costs. Their understanding of the custodian-RIA dynamic is unmatched.",
                author: "Robert Martinez",
                role: "VP of Business Development"
            }
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto space-y-24">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content Side */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    {/* Header */}
                                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-ph/10 text-ph rounded-full mb-6">
                                        {study.icon}
                                        <span className="text-sm font-medium">{study.subtitle}</span>
                                    </div>

                                    <h2 className="text-4xl font-display font-light text-foreground mb-2">
                                        {study.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-8">{study.profile}</p>

                                    {/* Challenge */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-medium text-foreground mb-3">Challenge</h3>
                                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                                    </div>

                                    {/* Approach */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-medium text-foreground mb-3">Approach</h3>
                                        <ul className="space-y-2">
                                            {study.approach.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-ph mt-0.5 flex-shrink-0" />
                                                    <span className="text-muted-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Solution */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-medium text-foreground mb-3">Solution Delivered</h3>
                                        <ul className="space-y-2">
                                            {study.solution.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-ph mt-2.5 flex-shrink-0"></div>
                                                    <span className="text-muted-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Results Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {study.results.map((result, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-[#F8FAFF] p-6 rounded-lg border border-gray-100 text-center"
                                            >
                                                <div className="flex items-center justify-center mb-2">
                                                    <TrendingUp className="w-5 h-5 text-ph mr-2" />
                                                    <div className="text-3xl font-display font-light text-ph">
                                                        {result.metric}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {result.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Testimonial */}
                                    <div className="bg-gradient-to-br from-ph to-ph-dark text-white p-8 rounded-lg relative">
                                        <div className="absolute top-4 right-4 opacity-10">
                                            <Quote className="w-16 h-16" />
                                        </div>
                                        <p className="text-lg font-light leading-relaxed mb-6 relative z-10">
                                            "{study.testimonial.quote}"
                                        </p>
                                        <div className="relative z-10">
                                            <div className="font-medium">{study.testimonial.author}</div>
                                            <div className="text-white/80 text-sm">{study.testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudies;