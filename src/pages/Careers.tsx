// src/pages/Careers.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import CareersHero from "@/components/careers/CareersHero";
import OpenPositions from "@/components/careers/OpenPositions";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import Benefits from "@/components/careers/Benefits";
import ApplicationProcess from "@/components/careers/ApplicationProcess";
import CareersCTA from "@/components/careers/CareersCTA";

const Careers = () => {
    return (
        <>
            <Helmet>
                <title>Careers | Join Acumen Labs - Wealth Management Marketing Experts</title>
                <meta
                    name="description"
                    content="Join Acumen Labs and help wealth management firms grow. Remote opportunities in digital marketing, content, and compliance for financial services."
                />
                <meta
                    name="keywords"
                    content="marketing careers, remote jobs, financial services careers, digital marketing jobs, content marketing jobs"
                />
            </Helmet>

            <div className="pt-20">
                <CareersHero />
                <WhyJoinUs />
                <OpenPositions />
                <Benefits />
                <ApplicationProcess />
                <CareersCTA />
            </div>
        </>
    );
};

export default Careers;