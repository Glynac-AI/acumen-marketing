// src/components/ScrollIndicator.tsx

import { motion, useScroll } from "framer-motion";

// A subtle scroll progress indicator
export const ScrollIndicator: React.FC = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-ph z-50 origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    );
};