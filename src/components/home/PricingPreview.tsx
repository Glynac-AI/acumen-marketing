// src/components/home/PricingPreview.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const PricingPreview = () => {
    const packages = [
        {
            name: "Starter Package",
            price: "$13,000",
            period: "/month",
            description: "Perfect for small RIAs & IARs ($500M-$2B AUM)",
            features: [
                "15-25 qualified leads monthly",
                "5-8 campaigns (2-3 platforms)",
                "3-4 marketing specialists",
                "Basic dashboard & reporting"
            ]
        },
        {
            name: "Growth Package",
            price: "$22,500",
            period: "/month",
            description: "Ideal for growing Family Offices ($2B-$8B AUM)",
            features: [
                "40-60 qualified leads monthly",
                "10-12 campaigns (4-5 platforms)",
                "5-6 marketing specialists",
                "Advanced reporting & analytics"
            ],
            featured: true
        },
        {
            name: "Leadership Package",
            price: "$46,000",
            period: "/month",
            description: "Built for large RIAs & Custodians ($8B+ AUM)",
            features: [
                "80-120 qualified leads monthly",
                "15+ campaigns (all 7 platforms)",
                "8-10 marketing specialists",
                "Real-time dashboards & full-service"
            ]
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            Transparent Pricing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Transparent Pricing from{" "}
                            <span className="text-ph font-normal">$13,000/month</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Choose the package that fits your firm's AUM growth goals. All packages include
                            compliance-first execution and transparent deliverables.
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white rounded-lg p-8 ${pkg.featured
                                        ? 'border-2 border-ph shadow-xl shadow-ph/10 relative'
                                        : 'border border-gray-200'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                {pkg.featured && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-ph text-white text-xs font-medium px-4 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-xl font-medium text-foreground mb-2">
                                    {pkg.name}
                                </h3>

                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-light text-ph">
                                        {pkg.price}
                                    </span>
                                    <span className="text-muted-foreground ml-2">
                                        {pkg.period}
                                    </span>
                                </div>

                                <p className="text-sm text-muted-foreground mb-6">
                                    {pkg.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="w-5 h-5 text-ph mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-muted-foreground">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/pricing"
                                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-all ${pkg.featured
                                            ? 'bg-ph text-white hover:bg-ph-dark'
                                            : 'bg-gray-100 text-foreground hover:bg-gray-200'
                                        }`}
                                >
                                    View Details
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link
                            to="/pricing"
                            className="inline-flex items-center text-ph font-medium hover:text-ph-dark transition-colors"
                        >
                            View Complete Packages & Pricing
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingPreview;