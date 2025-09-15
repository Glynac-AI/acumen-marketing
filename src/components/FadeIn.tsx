// src/components/FadeIn.tsx

import { motion } from "framer-motion";

// Component for subtle fade-in animations
interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
    className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    direction = "up",
    distance = 20,
    duration = 0.7,
    className = ""
}) => {
    // Define the initial style object with proper TypeScript typing
    const initialStyle: { opacity: number; y?: number; x?: number } = { opacity: 0 };

    // Add directional movement based on the direction prop
    if (direction === "up") initialStyle.y = distance;
    if (direction === "down") initialStyle.y = -distance;
    if (direction === "left") initialStyle.x = distance;
    if (direction === "right") initialStyle.x = -distance;

    // Define the animate style object
    const animateStyle: { opacity: number; y?: number; x?: number } = { opacity: 1 };
    if (direction === "up" || direction === "down") animateStyle.y = 0;
    if (direction === "left" || direction === "right") animateStyle.x = 0;

    return (
        <motion.div
            className={className}
            initial={initialStyle}
            whileInView={animateStyle}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;