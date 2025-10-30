// src/components/whoweserve/SegmentContent.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Building2,
    Users,
    Home,
    Database,
    CheckCircle,
    AlertCircle
} from "lucide-react";

const SegmentContent = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Four client segments with complete data from draft
    const segments = [
        {
            id: "rias",
            icon: <Building2 className="w-6 h-6" />,
            name: "Registered Investment Advisors (RIAs)",
            shortName: "RIAs",
            profile: "Mid-market RIAs managing $500M-$15B AUM",
            heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
            challenges: [
                "Competing with larger firms while maintaining boutique service",
                "FINRA/SEC compliance complexity",
                "Advisor shortage crisis",
                "Limited digital marketing expertise"
            ],
            solutions: [
                {
                    title: "Compliance-Approved Campaigns",
                    description: "Marketing strategies that meet all regulatory requirements while driving results"
                },
                {
                    title: "Educational Webinar Strategies",
                    description: "Build trust with HNW prospects through thought leadership content"
                },
                {
                    title: "HNW Lead Generation",
                    description: "Targeted campaigns to reach high-net-worth individuals in your market"
                },
                {
                    title: "Thought Leadership Positioning",
                    description: "Establish your firm as a trusted expert in wealth management"
                }
            ],
            results: {
                primary: "32% Average AUM Growth",
                secondary: "15-60 MQLs monthly",
                additional: ["Reduced CPL by 30-40%", "92% client satisfaction"]
            },
            packages: ["Growth Package", "Leadership Package"]
        },
        {
            id: "iars",
            icon: <Users className="w-6 h-6" />,
            name: "Investment Advisor Representatives (IARs)",
            shortName: "IARs",
            profile: "Independent advisors and small teams",
            heroImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop",
            challenges: [
                "Operating under broker-dealer compliance",
                "Competing with firm-provided marketing",
                "Building personal brand while staying compliant",
                "Limited marketing budgets"
            ],
            solutions: [
                {
                    title: "Cost-Effective Digital Presence",
                    description: "Budget-friendly strategies that deliver measurable results"
                },
                {
                    title: "Compliance-First Content",
                    description: "Marketing materials that align with your BD's compliance requirements"
                },
                {
                    title: "Local SEO Optimization",
                    description: "Dominate your local market with targeted SEO strategies"
                },
                {
                    title: "Personal Brand Development",
                    description: "Build your reputation as a trusted advisor in your community"
                }
            ],
            results: {
                primary: "15-25 MQLs monthly",
                secondary: "Improved local visibility",
                additional: ["Enhanced brand recognition", "Compliance-approved materials"]
            },
            packages: ["Starter Package", "Growth Package"]
        },
        {
            id: "family-offices",
            icon: <Home className="w-6 h-6" />,
            name: "Family Offices",
            shortName: "Family Offices",
            profile: "Single and multi-family offices managing $500M+ AUM",
            heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
            challenges: [
                "Attracting new UHNW families",
                "Generational wealth transfer (70% lost by 2nd generation)",
                "Next-gen engagement (70% likely to switch advisors)",
                "Maintaining privacy while building presence"
            ],
            solutions: [
                {
                    title: "Discreet, Targeted Campaigns",
                    description: "Reach UHNW prospects without compromising your privacy standards"
                },
                {
                    title: "Multi-Generational Marketing Strategies",
                    description: "Engage both current and next-generation wealth holders"
                },
                {
                    title: "Educational Content for Wealth Transfer",
                    description: "Position your expertise in succession planning and wealth transfer"
                },
                {
                    title: "Exclusive Networking Event Support",
                    description: "Strategic support for high-touch client engagement events"
                }
            ],
            results: {
                primary: "68% Increase in Qualified Prospects",
                secondary: "Next-gen engagement",
                additional: ["35% reduction in CAC", "Privacy-first approach"]
            },
            packages: ["Growth Package", "Leadership Package"]
        },
        {
            id: "custodians",
            icon: <Database className="w-6 h-6" />,
            name: "Custodians",
            shortName: "Custodians",
            profile: "Regional and national custodians serving RIAs",
            heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
            challenges: [
                "Expanding advisor relationships",
                "Differentiating from large competitors (Schwab, Fidelity)",
                "Attracting new RIA clients",
                "Supporting advisor growth"
            ],
            solutions: [
                {
                    title: "B2B Marketing to RIAs",
                    description: "Targeted campaigns that reach independent advisory firms"
                },
                {
                    title: "Partner Enablement Programs",
                    description: "Marketing support that helps your RIA partners grow"
                },
                {
                    title: "Advisor Recruitment Campaigns",
                    description: "Attract high-quality RIAs to your platform"
                },
                {
                    title: "Thought Leadership Positioning",
                    description: "Establish your platform as the preferred choice for RIAs"
                }
            ],
            results: {
                primary: "41% Reduction in CAC",
                secondary: "Measurable RIA partnership growth",
                additional: ["50+ new partnerships in 12 months", "Enhanced brand recognition"]
            },
            packages: ["Leadership Package"]
        }
    ];

    const currentSegment = segments[activeTab];

    return (
        <>
            {/* Tab Navigation - Sticky */}
            <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
                        {segments.map((segment, index) => (
                            <button
                                key={segment.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-lg whitespace-nowrap transition-all ${activeTab === index
                                        ? 'bg-ph text-white shadow-lg'
                                        : 'bg-gray-50 text-foreground hover:bg-gray-100'
                                    }`}
                            >
                                {segment.icon}
                                <span className="font-medium">{segment.shortName}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Segment Content - Animated on tab change */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Profile Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-ph/10 text-ph rounded-full mb-6">
                                        {currentSegment.icon}
                                        <span className="text-sm font-medium">Client Profile</span>
                                    </div>
                                    <h2 className="text-4xl font-display font-light text-foreground mb-4">
                                        {currentSegment.name}
                                    </h2>
                                    <p className="text-xl text-muted-foreground">
                                        {currentSegment.profile}
                                    </p>
                                </div>
                                <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src={currentSegment.heroImage}
                                        alt={currentSegment.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 bg-[#F8FAFF]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-3xl font-display font-light text-foreground mb-8">
                                Unique <span className="text-ph font-normal">Challenges</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {currentSegment.challenges.map((challenge, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-100"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                            <AlertCircle className="w-5 h-5 text-red-500" />
                                        </div>
                                        <p className="text-foreground leading-relaxed">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-3xl font-display font-light text-foreground mb-8">
                                Our <span className="text-ph font-normal">Solutions</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {currentSegment.solutions.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-[#F8FAFF] rounded-lg border border-gray-100"
                                    >
                                        <div className="flex items-start gap-4 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-ph" />
                                            </div>
                                            <h4 className="text-lg font-medium text-foreground">
                                                {solution.title}
                                            </h4>
                                        </div>
                                        <p className="text-muted-foreground ml-14">{solution.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="py-16 bg-gradient-to-br from-ph to-ph-dark text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-3xl font-display font-light mb-12 text-center">
                                Typical <span className="font-normal">Results</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-5xl font-display font-light mb-3">
                                        {currentSegment.results.primary}
                                    </div>
                                    <div className="text-white/80">Primary Impact</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl font-display font-light mb-3">
                                        {currentSegment.results.secondary}
                                    </div>
                                    <div className="text-white/80">Lead Generation</div>
                                </div>
                                <div className="space-y-3">
                                    {currentSegment.results.additional.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                            <span className="text-white/90">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best-Fit Packages */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto text-center">
                            <h3 className="text-3xl font-display font-light text-foreground mb-4">
                                Best-Fit <span className="text-ph font-normal">Packages</span>
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                Based on typical needs for {currentSegment.shortName}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {currentSegment.packages.map((pkg, index) => (
                                    <Link
                                        key={index}
                                        to="/pricing"
                                        className="px-8 py-4 bg-ph/10 text-ph font-medium rounded-lg hover:bg-ph hover:text-white transition-all"
                                    >
                                        {pkg}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default SegmentContent;