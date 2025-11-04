// src/pages/Press.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import PressHero from "@/components/press/PressHero";
import PressReleases from "@/components/press/PressReleases";
import PressContact from "@/components/press/PressContact";

const Press = () => {
    return (
        <>
            <Helmet>
                <title>Press & Media | Acumen Labs</title>
                <meta
                    name="description"
                    content="Press releases, media coverage, and latest news from Acumen Labs. Contact our media relations team for press inquiries."
                />
            </Helmet>

            <PressHero />
            <PressReleases />
            <PressContact />
        </>
    );
};

export default Press;