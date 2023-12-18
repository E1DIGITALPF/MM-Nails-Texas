import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ZoomRevealProps {
    children: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

export function RevealZoom({
    children,
    left,
    right,
    top,
    bottom
}: ZoomRevealProps) {
    const scaleDirection = left || right || top || bottom ? 0.8 : 1;

    return (
        <motion.div
            initial={{ scale: scaleDirection, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
}
