// src/components/SectionReveal.tsx

import { motion } from "framer-motion";

// A reusable component for elegant section reveals
interface SectionRevealProps {
    children: React.ReactNode;
    delay?: number;
    distance?: number;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
    children,
    delay = 0,
    distance = 50
}) => {
    return (
        <motion.div
            initial={{ y: distance, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
};