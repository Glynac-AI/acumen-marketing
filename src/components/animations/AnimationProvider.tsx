// src/components/AnimationProvider.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// Create animation context to share animation state across components
interface AnimationContextType {
    isFirstLoad: boolean;
    scrollY: number;
    viewportWidth: number;
    viewportHeight: number;
}

const AnimationContext = createContext<AnimationContextType>({
    isFirstLoad: true,
    scrollY: 0,
    viewportWidth: 0,
    viewportHeight: 0
});

export const useAnimation = () => useContext(AnimationContext);

interface AnimationProviderProps {
    children: ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0);
    const location = useLocation();
    const { scrollY: motionScrollY } = useScroll();

    // Track scroll position with Framer Motion
    useMotionValueEvent(motionScrollY, "change", (latest) => {
        setScrollY(latest);
    });

    // Update viewport dimensions on resize
    useEffect(() => {
        const updateViewportDimensions = () => {
            setViewportWidth(window.innerWidth);
            setViewportHeight(window.innerHeight);
        };

        // Initial calculation
        updateViewportDimensions();

        // Add event listener
        window.addEventListener("resize", updateViewportDimensions);

        // Cleanup
        return () => window.removeEventListener("resize", updateViewportDimensions);
    }, []);

    // Mark first load as complete after a short delay
    useEffect(() => {
        if (isFirstLoad) {
            const timer = setTimeout(() => {
                setIsFirstLoad(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isFirstLoad]);

    // Reset scroll position on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <AnimationContext.Provider
            value={{
                isFirstLoad,
                scrollY,
                viewportWidth,
                viewportHeight
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};

export { AnimationProvider };