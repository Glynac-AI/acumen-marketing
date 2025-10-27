// src/components/services/ServicesList.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Target,
    Users,
    Megaphone,
    PenTool,
    FileText,
    Palette,
    Search,
    Share2,
    MousePointerClick,
    Video,
    BarChart3,
    Database,
    MapPin,
    Newspaper,
    CheckCircle
} from "lucide-react";

// Service category structure from draft
interface Service {
    id: string;
    title: string;
    description: string;
    capabilities: string[];
}

interface ServiceCategory {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    services: Service[];
}

const ServicesList = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>("strategic");

    // 14 services organized into 7 categories - FROM DRAFT
    const serviceCategories: ServiceCategory[] = [
        {
            id: "strategic",
            icon: <Target className="w-6 h-6" />,
            title: "A. Strategic Services",
            description: "High-level planning and strategic marketing initiatives",
            services: [
                {
                    id: "paid-campaign-mgmt",
                    title: "Paid Campaign Management",
                    description: "Strategic planning and execution across all marketing channels to maximize ROI and drive qualified leads.",
                    capabilities: [
                        "Strategic planning across all channels",
                        "Campaign design & ROI planning",
                        "Analytics design & tracking implementation",
                        "Tools integration & compliance setup"
                    ]
                },
                {
                    id: "abm",
                    title: "Account-Based Marketing (ABM)",
                    description: "Targeted marketing strategies for high-value prospects and institutions.",
                    capabilities: [
                        "High-value prospect targeting",
                        "Personalized outreach strategies",
                        "Multi-touch engagement campaigns",
                        "CRM integration & lead scoring"
                    ]
                }
            ]
        },
        {
            id: "paid-media",
            icon: <Megaphone className="w-6 h-6" />,
            title: "B. Paid Media Execution",
            description: "Multi-platform advertising campaigns to reach your ideal clients",
            services: [
                {
                    id: "multi-platform-ads",
                    title: "Multi-Platform Paid Advertising",
                    description: "Comprehensive paid advertising across multiple platforms to generate qualified leads.",
                    capabilities: [
                        "LinkedIn Ads (RIA & client acquisition)",
                        "Google Ads (Search & Display)",
                        "Facebook/Meta Ads (B2B & lead gen)",
                        "YouTube Ads (Brand awareness)",
                        "Discovery & Local Ads"
                    ]
                }
            ]
        },
        {
            id: "content-creative",
            icon: <PenTool className="w-6 h-6" />,
            title: "C. Content & Creative",
            description: "High-quality content and design to engage your audience",
            services: [
                {
                    id: "content-creation",
                    title: "Content Creation",
                    description: "Professional content assets for all marketing channels.",
                    capabilities: [
                        "Ad creatives & campaign assets",
                        "Email campaign design",
                        "Social media content",
                        "Video processing & editing",
                        "AI-powered creative optimization"
                    ]
                },
                {
                    id: "content-writing",
                    title: "Content Writing & Blogging",
                    description: "SEO-optimized content that establishes thought leadership.",
                    capabilities: [
                        "SEO-optimized blog posts (10+ monthly)",
                        "Email campaign copy",
                        "PR articles & thought leadership",
                        "Multi-language content support"
                    ]
                },
                {
                    id: "design",
                    title: "Design Services",
                    description: "Professional design for all marketing materials.",
                    capabilities: [
                        "Brand identity & visual systems",
                        "Brochures & presentations",
                        "Promotional materials",
                        "Landing page design"
                    ]
                }
            ]
        },
        {
            id: "organic",
            icon: <Search className="w-6 h-6" />,
            title: "D. Organic Growth",
            description: "Long-term strategies to build sustainable visibility",
            services: [
                {
                    id: "seo",
                    title: "SEO Services",
                    description: "Comprehensive search engine optimization to drive organic traffic.",
                    capabilities: [
                        "Keyword research & strategy",
                        "On-page & off-page optimization",
                        "Local SEO for RIAs",
                        "Technical SEO audits",
                        "10+ monthly blogs"
                    ]
                },
                {
                    id: "social-media",
                    title: "Social Media Management",
                    description: "Professional social media presence across all platforms.",
                    capabilities: [
                        "25 creatives monthly across 5 platforms",
                        "Facebook, Instagram, LinkedIn, Twitter, GMB",
                        "Community engagement",
                        "Social listening & monitoring"
                    ]
                }
            ]
        },
        {
            id: "conversion",
            icon: <MousePointerClick className="w-6 h-6" />,
            title: "E. Conversion Optimization",
            description: "Turn prospects into clients through optimized experiences",
            services: [
                {
                    id: "landing-pages",
                    title: "Landing Page Creation",
                    description: "High-converting landing pages designed for lead capture.",
                    capabilities: [
                        "Campaign-specific pages",
                        "Webinar registration pages",
                        "Lead capture optimization",
                        "A/B testing & analytics"
                    ]
                },
                {
                    id: "webinars",
                    title: "Webinars & Educational Events",
                    description: "Educational marketing events that build trust and generate leads.",
                    capabilities: [
                        "Webinar strategy & planning",
                        "Registration funnel optimization",
                        "Educational content development",
                        "Post-event nurture campaigns",
                        "Compliance-approved presentations"
                    ]
                }
            ]
        },
        {
            id: "analytics",
            icon: <BarChart3 className="w-6 h-6" />,
            title: "F. Data & Analytics",
            description: "Data-driven insights to optimize performance",
            services: [
                {
                    id: "analytics",
                    title: "Real-Time Analytics & Reporting",
                    description: "Comprehensive tracking and reporting on all marketing activities.",
                    capabilities: [
                        "Performance dashboards",
                        "Lead tracking & attribution",
                        "City-wise & demographic analysis",
                        "Campaign optimization insights",
                        "ROI tracking"
                    ]
                }
            ]
        },
        {
            id: "operations",
            icon: <Database className="w-6 h-6" />,
            title: "G. Operations & Support",
            description: "Backend systems and ongoing support",
            services: [
                {
                    id: "crm",
                    title: "CRM & Lead Management",
                    description: "Streamlined lead management and customer communications.",
                    capabilities: [
                        "Lead qualification & scoring",
                        "Customer communications",
                        "Pipeline management",
                        "Sales handoff workflows"
                    ]
                },
                {
                    id: "listing-mgmt",
                    title: "Listing Management",
                    description: "Optimize your business listings across directories.",
                    capabilities: [
                        "Business directory optimization",
                        "Google Business Profile",
                        "Category approvals & monitoring"
                    ]
                },
                {
                    id: "pr",
                    title: "PR & Media Placement",
                    description: "Media relations and brand visibility campaigns.",
                    capabilities: [
                        "Press release distribution",
                        "Media outreach & placement",
                        "Brand visibility campaigns"
                    ]
                }
            ]
        }
    ];

    const toggleCategory = (categoryId: string) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section intro */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
                            Service Delivery{" "}
                            <span className="text-ph font-normal">Philosophy</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            {[
                                "Compliance-first approach",
                                "Transparent deliverables",
                                "Monthly reporting & optimization",
                                "Dedicated account teams"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="w-4 h-4 text-ph mr-2" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Accordion of service categories */}
                    <div className="space-y-4">
                        {serviceCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                className="bg-[#F8FAFF] border border-gray-200 rounded-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Category header - clickable */}
                                <button
                                    onClick={() => toggleCategory(category.id)}
                                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/50 transition-colors"
                                >
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4">
                                            {category.icon}
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-xl font-medium text-foreground mb-1">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-6 h-6 text-ph" />
                                    </motion.div>
                                </button>

                                {/* Category services - expandable */}
                                <AnimatePresence>
                                    {expandedCategory === category.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-6 space-y-6">
                                                {category.services.map((service, serviceIndex) => (
                                                    <motion.div
                                                        key={service.id}
                                                        className="bg-white p-6 rounded-lg border border-gray-100"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                                                    >
                                                        <h4 className="text-lg font-medium text-foreground mb-2">
                                                            {serviceIndex + 1}. {service.title}
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground mb-4">
                                                            {service.description}
                                                        </p>
                                                        <ul className="space-y-2">
                                                            {service.capabilities.map((capability, capIndex) => (
                                                                <li
                                                                    key={capIndex}
                                                                    className="flex items-start text-sm text-muted-foreground"
                                                                >
                                                                    <CheckCircle className="w-4 h-4 text-ph mr-2 mt-0.5 flex-shrink-0" />
                                                                    {capability}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom summary */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-muted-foreground mb-6">
                            All services are designed with FINRA/SEC compliance in mind and include monthly reporting
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesList;