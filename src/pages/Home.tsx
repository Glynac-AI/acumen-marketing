// src/pages/Home.tsx
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import ClientPerspectives from "@/components/home/ClientPerspectives";
import CTASection from "@/components/home/CTASection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ValueProposition />
            <ServicesShowcase />
            <ClientPerspectives />
            <CTASection />
        </>
    );
};

export default Home;