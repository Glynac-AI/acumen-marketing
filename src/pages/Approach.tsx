// src/pages/Approach.tsx
import React from "react";
import ApproachHero from "@/components/approach/ApproachHero";
import ComplianceFramework from "@/components/approach/ComplianceFramework";
import GA4Funnel from "@/components/approach/GA4Funnel";
import LeadScoring from "@/components/approach/LeadScoring";
import MultiTouchAttribution from "@/components/approach/MultiTouchAttribution";
import WebinarStrategy from "@/components/approach/WebinarStrategy";
import ContentPillars from "@/components/approach/ContentPillars";
import MarketGapAnalysis from "@/components/approach/MarketGapAnalysis";
import PrioritizationMatrix from "@/components/approach/PrioritizationMatrix";
import ApproachCTA from "@/components/approach/ApproachCTA";

const Approach = () => {
    return (
        <div className="min-h-screen bg-background">
            <ApproachHero />
            <ComplianceFramework />
            <GA4Funnel />
            <LeadScoring />
            <MultiTouchAttribution />
            <WebinarStrategy />
            <ContentPillars />
            <MarketGapAnalysis />
            <PrioritizationMatrix />
            <ApproachCTA />
        </div>
    );
};

export default Approach;