// src/pages/Home.tsx
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import InsightsSection from "@/components/home/InsightsSection";
import ApproachSection from "@/components/home/ApproachSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ValueProposition />
            <ServicesShowcase />
            <InsightsSection />
            <ApproachSection />
            <CTASection />
        </>
    );
};

export default Home;