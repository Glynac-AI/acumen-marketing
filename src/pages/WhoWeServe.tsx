// src/pages/WhoWeServe.tsx
import React from "react";
import WhoWeServeHero from "@/components/whoweserve/WhoWeServeHero";
import SegmentContent from "@/components/whoweserve/SegmentContent";
import IndustryStats from "@/components/whoweserve/IndustryStats";
import WhoWeServeCTA from "@/components/whoweserve/WhoWeServeCTA";

const WhoWeServe = () => {
    return (
        <div className="pt-20">
            <WhoWeServeHero />
            <SegmentContent />
            <IndustryStats />
            <WhoWeServeCTA />
        </div>
    );
};

export default WhoWeServe;