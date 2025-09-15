// src/components/ParallaxSection.tsx

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Create subtle parallax effects
interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    children,
    speed = 0.2,
    className = ""
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Create subtle parallax effect
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            style={{ y }}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxSection;