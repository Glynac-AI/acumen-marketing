// src/components/whoweserve/WhoWeServeCTA.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WhoWeServeCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-ph to-ph-dark text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
                        Ready to Accelerate Your <span className="font-normal">Growth</span>?
                    </h2>
                    <p className="text-xl text-white/90 mb-10">
                        Schedule a strategy call to discuss how we can help your firm overcome challenges and achieve measurable results
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-ph font-medium rounded-lg hover:bg-gray-50 transition-all shadow-lg"
                        >
                            Schedule Strategy Call
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            to="/pricing"
                            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                        >
                            View Pricing & Packages
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServeCTA;