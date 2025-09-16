// src/components/about/ExpertiseSection.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    FileText,
    Globe,
    CreditCard,
    Users,
    Calendar,
    PenTool,
    Lock,
    BarChart,
    LineChart,
    ChevronRight
} from "lucide-react";

// Define expertise area data structure
interface ExpertiseAreaProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    capabilities: string[];
    challenges: string[];
}

// Expertise areas with wealth management-specific details
const expertiseAreas: ExpertiseAreaProps[] = [
    {
        id: "content-marketing",
        icon: <FileText className="w-6 h-6" />,
        title: "Content & Thought Leadership",
        description: "We develop premium content that positions wealth management firms as trusted advisors while navigating the complex regulatory environment.",
        capabilities: [
            "Whitepapers on wealth planning, investment strategies, and financial trends",
            "Client education materials and newsletters",
            "Executive ghostwriting for LinkedIn and industry publications",
            "Subject matter expert positioning strategies",
            "Compliance-approved marketing materials",
            "Wealth management case studies and success stories"
        ],
        challenges: [
            "Creating engaging content within regulatory constraints",
            "Balancing technical expertise with accessibility",
            "Establishing credibility with sophisticated audiences",
            "Maintaining consistent thought leadership presence"
        ]
    },
    {
        id: "digital-marketing",
        icon: <Globe className="w-6 h-6" />,
        title: "Digital Presence & SEO",
        description: "We build sophisticated online presences that reflect the premium nature of wealth management services while attracting qualified prospects.",
        capabilities: [
            "Website strategy and development for wealth firms",
            "SEO for wealth management keywords and topics",
            "User experience optimization for client acquisition",
            "Advisor bio and profile development",
            "Client portal experience enhancements",
            "Digital presence audits and optimization"
        ],
        challenges: [
            "Creating a digital presence that appeals to HNW individuals",
            "Balancing sophistication with usability",
            "Implementing SEO while maintaining compliance",
            "Differentiating from other wealth management firms"
        ]
    },
    {
        id: "paid-media",
        icon: <CreditCard className="w-6 h-6" />,
        title: "Paid Media & Targeting",
        description: "We create highly targeted campaigns that reach high-net-worth individuals and institutions through sophisticated channels and messaging.",
        capabilities: [
            "LinkedIn campaigns targeting HNW professionals and executives",
            "Google Ads for wealth management search intent",
            "Programmatic display targeting for affluent audiences",
            "Retargeting campaigns for nurturing prospects",
            "Compliance-aware ad copy and creative",
            "Performance tracking and optimization"
        ],
        challenges: [
            "Targeting high-net-worth individuals efficiently",
            "Creating compliant yet compelling ad creative",
            "Measuring ROI on long sales cycles",
            "Standing out in a crowded digital environment"
        ]
    },
    {
        id: "account-based",
        icon: <Users className="w-6 h-6" />,
        title: "Account-Based Marketing",
        description: "We implement targeted ABM programs that help wealth management firms connect with specific high-value prospects and institutions.",
        capabilities: [
            "UHNW individual targeting strategies",
            "Family office and institutional prospect campaigns",
            "Multi-channel outreach programs",
            "LinkedIn Sales Navigator strategies",
            "Personalized content development",
            "Executive engagement programs"
        ],
        challenges: [
            "Creating personalized approaches at scale",
            "Coordinating marketing with advisor outreach",
            "Building relationships with gatekeepers",
            "Measuring effectiveness of ABM initiatives"
        ]
    },
    {
        id: "events",
        icon: <Calendar className="w-6 h-6" />,
        title: "Events & Webinars",
        description: "We develop and promote educational events that showcase expertise while creating engagement opportunities with qualified prospects.",
        capabilities: [
            "Wealth management webinar development",
            "CE-credit eligible content for advisors",
            "Virtual and in-person event strategies",
            "Executive roundtables and forums",
            "Client appreciation events",
            "Educational series and workshop programs"
        ],
        challenges: [
            "Creating compelling events that attract HNW attendance",
            "Converting event attendees into prospects",
            "Measuring ROI on event marketing",
            "Balancing education with business development"
        ]
    },
    {
        id: "design",
        icon: <PenTool className="w-6 h-6" />,
        title: "Design & Brand Identity",
        description: "We create sophisticated visual identities and marketing materials that reflect the premium nature of wealth management services.",
        capabilities: [
            "Brand identity development for wealth firms",
            "Pitch deck and presentation design",
            "Sales and marketing collateral",
            "Digital design systems",
            "Infographics and data visualization",
            "Photography and imagery guidelines"
        ],
        challenges: [
            "Creating visuals that appeal to affluent clients",
            "Balancing traditional with contemporary design",
            "Maintaining brand consistency across touchpoints",
            "Developing visuals that stand out in the industry"
        ]
    },
    {
        id: "compliance",
        icon: <Lock className="w-6 h-6" />,
        title: "Compliance Integration",
        description: "We build regulatory compliance into every aspect of marketing strategy, ensuring effectiveness while maintaining SEC and FINRA alignment.",
        capabilities: [
            "Compliance-aware marketing strategies",
            "Regulatory review processes",
            "Compliant content development guidelines",
            "SEC and FINRA marketing rule adherence",
            "Disclosure management",
            "Audit trails and documentation"
        ],
        challenges: [
            "Creating compelling marketing within regulatory constraints",
            "Navigating evolving marketing regulations",
            "Balancing compliance with effectiveness",
            "Developing streamlined approval processes"
        ]
    },
    {
        id: "measurement",
        icon: <BarChart className="w-6 h-6" />,
        title: "Analytics & Measurement",
        description: "We implement sophisticated tracking and measurement approaches that connect marketing activities to business outcomes for wealth management firms.",
        capabilities: [
            "AUM attribution models",
            "Lead quality scoring",
            "Client acquisition funnel analysis",
            "Marketing ROI measurement",
            "Campaign performance dashboards",
            "Key performance indicator development"
        ],
        challenges: [
            "Attributing marketing to long sales cycles",
            "Measuring influence on AUM growth",
            "Connecting digital metrics to business outcomes",
            "Creating meaningful reporting for stakeholders"
        ]
    }
];

const ExpertiseSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeExpertise, setActiveExpertise] = useState(0);

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
            id="expertise"
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
                        Our Expertise
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-ph">Specialized</span> Marketing Skills
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Focused expertise in marketing for wealth management firms, with deep
                        understanding of industry challenges and opportunities
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <motion.div
                        className="bg-[#F8FAFF] p-8 md:p-12 mb-16 border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-6">
                                    <LineChart className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-medium text-foreground mb-3">
                                    Why Specialized Expertise Matters
                                </h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-foreground leading-relaxed mb-4">
                                    Wealth management marketing requires specialized expertise due to its unique
                                    challenges: strict regulatory requirements, sophisticated clientele,
                                    extended decision cycles, and the need to build lasting trust.
                                </p>
                                <p className="text-foreground leading-relaxed">
                                    Our dedicated focus on wealth management gives us deep understanding of
                                    these challenges and the specific marketing approaches that overcome them.
                                    We combine industry knowledge with marketing expertise to develop strategies
                                    that drive meaningful business results for wealth management firms.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Expertise areas */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {expertiseAreas.slice(0, 8).map((expertise, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-6 border cursor-pointer transition-all duration-300 ${activeExpertise === index
                                            ? 'bg-ph text-white border-ph shadow-md'
                                            : 'bg-white border-gray-200 hover:border-ph/30'
                                        }`}
                                    onClick={() => setActiveExpertise(index)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${activeExpertise === index
                                            ? 'bg-white/20 text-white'
                                            : 'bg-ph/10 text-ph'
                                        }`}>
                                        {expertise.icon}
                                    </div>
                                    <h3 className={`text-lg font-medium mb-2 ${activeExpertise === index ? 'text-white' : 'text-foreground'
                                        }`}>
                                        {expertise.title}
                                    </h3>
                                    <div className={`flex items-center text-sm ${activeExpertise === index ? 'text-white/80' : 'text-ph'
                                        }`}>
                                        <span>Learn more</span>
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Selected expertise details */}
                        <motion.div
                            key={`expertise-${activeExpertise}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-gray-200 p-8"
                        >
                            {/* Left column - Capabilities */}
                            <div>
                                <div className="flex items-start mb-6">
                                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                                        {expertiseAreas[activeExpertise].icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground mb-2">
                                            {expertiseAreas[activeExpertise].title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {expertiseAreas[activeExpertise].description}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium text-foreground mb-4">Our Capabilities</h4>
                                    <ul className="space-y-3">
                                        {expertiseAreas[activeExpertise].capabilities.map((capability, idx) => (
                                            <motion.li
                                                key={idx}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 * idx }}
                                            >
                                                <div className="w-5 h-5 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 mt-0.5 flex-shrink-0">
                                                    <ChevronRight className="w-3 h-3" />
                                                </div>
                                                <span className="text-muted-foreground">{capability}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right column - Industry Challenges */}
                            <div className="bg-[#F8FAFF] p-6">
                                <h4 className="text-lg font-medium text-foreground mb-4">Industry Challenges We Address</h4>
                                <ul className="space-y-3">
                                    {expertiseAreas[activeExpertise].challenges.map((challenge, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 * idx }}
                                        >
                                            <div className="w-5 h-5 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 mt-0.5 flex-shrink-0">
                                                <ChevronRight className="w-3 h-3" />
                                            </div>
                                            <span className="text-muted-foreground">{challenge}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-foreground italic">
                                        "Our specialized expertise in {expertiseAreas[activeExpertise].title.toLowerCase()}
                                        allows us to deliver marketing solutions that overcome the unique challenges
                                        faced by wealth management firms."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Results overview */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-medium text-foreground mb-8">
                            Our Expertise Delivers <span className="text-ph">Measurable Results</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    stat: "32%",
                                    label: "Average AUM Growth",
                                    description: "For wealth management firms implementing our full marketing strategy"
                                },
                                {
                                    stat: "3.5×",
                                    label: "Higher Lead Conversion",
                                    description: "Compared to industry average for marketing-qualified leads"
                                },
                                {
                                    stat: "89%",
                                    label: "Client Satisfaction",
                                    description: "Of our wealth management clients rate our expertise as exceptional"
                                }
                            ].map((result, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 border border-gray-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <div className="text-4xl font-display text-ph mb-2">{result.stat}</div>
                                    <div className="text-lg font-medium text-foreground mb-2">{result.label}</div>
                                    <p className="text-sm text-muted-foreground">{result.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;