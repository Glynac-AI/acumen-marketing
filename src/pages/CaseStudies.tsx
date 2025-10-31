// src/pages/CaseStudies.tsx
import React from "react";
import CaseStudiesHero from "@/components/casestudies/CaseStudiesHero";
import FeaturedCaseStudies from "@/components/casestudies/FeaturedCaseStudies";
import AggregateResults from "@/components/casestudies/AggregateResults";
import CaseStudiesCTA from "@/components/casestudies/CaseStudiesCTA";

const CaseStudies = () => {
    return (
        <div className="pt-20">
            <CaseStudiesHero />
            <FeaturedCaseStudies />
            <AggregateResults />
            <CaseStudiesCTA />
        </div>
    );
};

export default CaseStudies;