// src/components/TextReveal.tsx

import { motion } from "framer-motion";

// Text reveal animation for headings
interface TextRevealProps {
    text: string;
    delay?: number;
    className?: string;
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export const TextReveal: React.FC<TextRevealProps> = ({
    text,
    delay = 0,
    className = "",
    element = "span"
}) => {
    // Split text into words
    const words = text.split(" ");

    // Create the appropriate element based on the element prop
    const Component = element;

    return (
        <Component className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * 0.04,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {word}&nbsp;
                    </motion.span>
                </span>
            ))}
        </Component>
    );
};