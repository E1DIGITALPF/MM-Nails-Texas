import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeRevealProps {
    children: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

export function RevealFade({
    children,
    left,
    right,
    top,
    bottom,
}: FadeRevealProps) {
    const animationDirection = {
        x: left ? -100 : right ? 100 : 0,
        y: top ? -100 : bottom ? 100 : 0
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: animationDirection.x, y: animationDirection.y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
}
