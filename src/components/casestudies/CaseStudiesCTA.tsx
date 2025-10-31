// src/components/casestudies/CaseStudiesCTA.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const CaseStudiesCTA = () => {
    return (
        <section className="py-24 bg-[#F8FAFF]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6">
                        See How We Can Help <span className="text-ph font-normal">Your Firm</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Schedule a strategy call to discuss your firm's growth goals and discover how our proven approach can deliver similar results
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg shadow-ph/20"
                        >
                            Schedule Strategy Call
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-foreground font-medium rounded-lg border-2 border-gray-200 hover:border-ph transition-all"
                        >
                            <FileText className="w-5 h-5 mr-2" />
                            Request Case Study Details
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesCTA;