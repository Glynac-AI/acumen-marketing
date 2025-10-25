// src/pages/Ecosystem.tsx
import React from "react";
import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import BrandShowcase from "@/components/ecosystem/BrandShowcase";
import SynergyExamples from "@/components/ecosystem/SynergyExamples";
import EcosystemValue from "@/components/ecosystem/EcosystemValue";
import EcosystemCTA from "@/components/ecosystem/EcosystemCTA";

const Ecosystem = () => {
    return (
        <div className="min-h-screen bg-background">
            <EcosystemHero />
            <BrandShowcase />
            <SynergyExamples />
            <EcosystemValue />
            <EcosystemCTA />
        </div>
    );
};

export default Ecosystem;