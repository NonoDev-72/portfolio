import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
    style?: CSSProperties;
    className?: string;
}

const Reveal = ({ children, delay = 0, style, className }: RevealProps) => {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
