// src/components/LenisProvider.tsx
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisProviderProps {
    children: React.ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    useEffect(() => {
        // More sophisticated Lenis configuration for premium feel
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true, // Disable for touch devices for better performance
            touchMultiplier: 1.5,
            wheelMultiplier: 1.15,
        });

        // Connect Lenis to requestAnimationFrame for smoother rendering
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Update Lenis when window resizes
        const resizeObserver = new ResizeObserver(() => {
            lenis.resize();
        });

        resizeObserver.observe(document.body);

        // Cleanup
        return () => {
            lenis.destroy();
            resizeObserver.disconnect();
        };
    }, []);

    return <>{children}</>;
};

export default LenisProvider;