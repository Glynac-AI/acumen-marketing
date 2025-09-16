// src/components/services/ServicesList.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    FileText,
    Globe,
    CreditCard,
    Users,
    Calendar,
    PenTool,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Define service data structure
interface ServiceProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    capabilities: string[];
    benefits: string[];
    clientTypes: string[];
    metrics: {
        stat: string;
        label: string;
    }[];
}

// Comprehensive service data with wealth management-specific details
const services: ServiceProps[] = [
    {
        id: "content-marketing",
        icon: <FileText className="w-6 h-6" />,
        title: "Content & Thought Leadership",
        subtitle: "Position your firm as a trusted voice in the industry",
        description: "We develop high-quality, compliance-approved content that showcases your expertise and builds credibility with high-net-worth individuals and institutions. From insightful whitepapers to engaging newsletters, our content is designed to nurture prospects and strengthen relationships with existing clients.",
        capabilities: [
            "Educational whitepapers and ebooks",
            "Compliance-approved newsletters",
            "Executive ghostwriting for LinkedIn and publications",
            "PR and media placement strategies",
            "Investment commentary and market analysis",
            "Client-facing financial education content"
        ],
        benefits: [
            "Establish expertise in specific wealth management niches",
            "Build trust through value-driven, educational content",
            "Nurture prospects through the extended decision cycle",
            "Create reusable content assets for multiple channels",
            "Enhance reputation among centers of influence"
        ],
        clientTypes: ["RIAs", "Family Offices", "Wealth Managers", "Financial Advisors"],
        metrics: [
            { stat: "68%", label: "Increase in qualified lead generation" },
            { stat: "2.4x", label: "Higher engagement with targeted content" }
        ]
    },
    {
        id: "seo-website",
        icon: <Globe className="w-6 h-6" />,
        title: "SEO & Website Optimization",
        subtitle: "Improve visibility and generate qualified inbound leads",
        description: "We enhance your digital presence through strategic SEO and website optimization tailored to wealth management firms. Our approach focuses on attracting qualified prospects actively searching for wealth management services while ensuring full compliance with regulatory requirements.",
        capabilities: [
            "Comprehensive SEO audits and strategy",
            "Keyword research for wealth management",
            "Technical SEO implementation",
            "Content optimization for search visibility",
            "Compliant landing page development",
            "Local SEO for advisors with geographic focus",
            "Website UX optimization for conversion"
        ],
        benefits: [
            "Increase visibility for wealth management search terms",
            "Generate qualified inbound leads",
            "Improve website conversion rates",
            "Enhance credibility through professional online presence",
            "Reduce cost-per-acquisition compared to paid channels"
        ],
        clientTypes: ["Independent Advisors", "RIAs", "Multi-Family Offices", "Boutique Wealth Firms"],
        metrics: [
            { stat: "84%", label: "Increase in qualified organic traffic" },
            { stat: "3.2x", label: "Improvement in lead quality from website" }
        ]
    },
    {
        id: "paid-media",
        icon: <CreditCard className="w-6 h-6" />,
        title: "Paid Media Campaigns",
        subtitle: "Drive targeted traffic and qualified leads",
        description: "We design and manage sophisticated paid media campaigns across platforms like LinkedIn, Facebook, and Google, with precise targeting focused on high-net-worth individuals and institutions. Our campaigns are fully compliant with financial advertising regulations while delivering measurable results.",
        capabilities: [
            "LinkedIn advertising for HNW professional targeting",
            "Google Ads for wealth management search terms",
            "Meta (Facebook/Instagram) campaigns for demographics",
            "Remarketing to nurture interested prospects",
            "Landing page optimization for conversion",
            "A/B testing for campaign improvement",
            "Compliance review of all advertising materials"
        ],
        benefits: [
            "Target ultra-specific high-value audiences",
            "Accelerate lead generation with immediate visibility",
            "Gain competitive intelligence through platform insights",
            "Test messaging efficiently before wider rollout",
            "Scale successful campaigns as practice grows"
        ],
        clientTypes: ["Growing RIAs", "Wealth Management Firms", "Family Offices", "Financial Advisors"],
        metrics: [
            { stat: "4.7x", label: "Return on ad spend (ROAS)" },
            { stat: "41%", label: "Lower cost-per-acquisition vs. industry average" }
        ]
    },
    {
        id: "account-based-marketing",
        icon: <Users className="w-6 h-6" />,
        title: "Account-Based Marketing",
        subtitle: "Personalized outreach for high-value prospects",
        description: "Our account-based marketing approach identifies and targets specific high-value prospects with personalized outreach campaigns. Particularly effective for wealth management firms targeting UHNW individuals, family offices, or institutional clients with complex needs.",
        capabilities: [
            "Ideal client profile development",
            "Target account identification and research",
            "Multi-channel personalized campaigns",
            "Executive-level content development",
            "Email sequence creation and management",
            "LinkedIn Sales Navigator strategies",
            "Webinar and event invitation campaigns"
        ],
        benefits: [
            "Focus resources on highest-potential prospects",
            "Create personalized approaches for UHNW individuals",
            "Coordinate marketing with wealth advisor outreach",
            "Build relationships with centers of influence",
            "Establish presence with institutional targets"
        ],
        clientTypes: ["Multi-Family Offices", "UHNW-Focused RIAs", "Institutional Wealth Managers"],
        metrics: [
            { stat: "62%", label: "Higher meeting acceptance rate" },
            { stat: "2.8x", label: "Larger average AUM from targeted accounts" }
        ]
    },
    {
        id: "design-branding",
        icon: <PenTool className="w-6 h-6" />,
        title: "Design & Branding",
        subtitle: "Compliance-aware, client-ready brand assets",
        description: "We create sophisticated, compliance-approved visual assets and branded materials that reflect the premium nature of wealth management services. Our design approach balances professional aesthetics with regulatory requirements to build trust and credibility.",
        capabilities: [
            "Brand identity development",
            "Pitch deck and presentation design",
            "Investment proposal templates",
            "Client-facing collateral",
            "Digital marketing assets",
            "Compliance-reviewed visual content",
            "Consistent brand implementation"
        ],
        benefits: [
            "Project professionalism and stability to prospects",
            "Create consistent experience across touchpoints",
            "Differentiate from generic financial advisors",
            "Develop reusable templates for marketing efficiency",
            "Support business development with premium materials"
        ],
        clientTypes: ["Established RIAs", "Boutique Wealth Firms", "Family Offices", "Financial Advisors"],
        metrics: [
            { stat: "48%", label: "Increase in proposal conversion rates" },
            { stat: "87%", label: "Client satisfaction with branded materials" }
        ]
    },
    {
        id: "webinars-events",
        icon: <Calendar className="w-6 h-6" />,
        title: "Webinars & Events",
        subtitle: "Extend visibility and convert attendees into clients",
        description: "We develop and promote educational webinars and events that demonstrate your expertise while generating qualified leads. Our approach includes creating CE-eligible content for advisors and educational programs for prospective clients, with full campaign support.",
        capabilities: [
            "Educational webinar development",
            "CE-credit eligible content creation",
            "Virtual and in-person event planning",
            "Panel discussion coordination",
            "Attendee acquisition campaigns",
            "Follow-up sequence development",
            "Event success measurement"
        ],
        benefits: [
            "Demonstrate expertise in specific wealth topics",
            "Generate qualified leads in target segments",
            "Build relationships through educational value",
            "Create reusable content from event recordings",
            "Establish thought leadership in wealth management"
        ],
        clientTypes: ["RIAs", "Wealth Management Firms", "Family Offices", "Financial Service Providers"],
        metrics: [
            { stat: "54%", label: "Lead-to-meeting conversion from events" },
            { stat: "3.6x", label: "Higher engagement than traditional outreach" }
        ]
    }
];

// Main component
const ServicesList = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Subtle scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 bg-white relative overflow-hidden"
        >
            {/* Subtle background elements */}
            <motion.div
                className="absolute inset-0 opacity-[0.02]"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6BFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px'
                }}></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6">
                            Our <span className="text-ph">Comprehensive</span> Services
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Each service is specifically designed for the unique needs and regulatory
                            requirements of wealth management firms.
                        </p>
                    </motion.div>

                    {/* Services List */}
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <ServiceItem
                                key={service.id}
                                service={service}
                                index={index}
                                isLast={index === services.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Individual service component with sophisticated animations
const ServiceItem = ({ service, index, isLast }: { service: ServiceProps; index: number; isLast: boolean }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    // Scroll-triggered animations
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

    return (
        <div
            ref={itemRef}
            id={service.id}
            className={`relative ${!isLast ? 'pb-16 border-b border-gray-100' : ''}`}
        >
            {/* Animated service content */}
            <motion.div
                style={{ opacity, y }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
                {/* Left column - Service info */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32">
                        <div className="mb-6">
                            <div className="w-16 h-16 rounded-full bg-ph/10 text-ph flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-display font-light text-foreground mb-3">
                                {service.title}
                            </h3>
                            <div className="h-1 w-16 bg-ph mb-4" />
                            <p className="text-lg text-muted-foreground mb-6">
                                {service.subtitle}
                            </p>
                        </div>

                        {/* Client types */}
                        <div className="mb-8">
                            <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                                Ideal for:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.clientTypes.map((client) => (
                                    <span
                                        key={client}
                                        className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm text-muted-foreground"
                                    >
                                        {client}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Performance metrics */}
                        <div className="space-y-4">
                            {service.metrics.map((metric, i) => (
                                <div key={i} className="flex items-baseline">
                                    <span className="text-3xl font-display text-ph mr-3">
                                        {metric.stat}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-8"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-6 py-3 bg-ph text-white text-sm font-medium rounded-sm shadow-sm hover:shadow-md transition-all"
                            >
                                Discuss This Service
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Right column - Details */}
                <div className="lg:col-span-2">
                    {/* Description */}
                    <div className="bg-[#F8FAFF] p-8 mb-12">
                        <p className="text-lg text-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    {/* Capabilities and Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Capabilities */}
                        <div>
                            <h4 className="text-xl font-medium text-foreground mb-6">
                                Capabilities
                            </h4>
                            <ul className="space-y-4">
                                {service.capabilities.map((capability, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * i }}
                                    >
                                        <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">
                                            {capability}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h4 className="text-xl font-medium text-foreground mb-6">
                                Benefits
                            </h4>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * i }}
                                    >
                                        <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">
                                            {benefit}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServicesList;