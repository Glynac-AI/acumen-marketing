// src/components/HoverEffect.tsx

import { motion } from "framer-motion";

// Subtle hover effect for interactive elements
interface HoverEffectProps {
    children: React.ReactNode;
    className?: string;
    scale?: number;
    lift?: boolean;
}

const HoverEffect: React.FC<HoverEffectProps> = ({
    children,
    className = "",
    scale = 1.02,
    lift = true
}) => {
    return (
        <motion.div
            className={className}
            whileHover={{
                scale: scale,
                y: lift ? -5 : 0,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.div>
    );
};

export default HoverEffect;