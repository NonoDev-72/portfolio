import { useEffect, useRef, useState } from 'react';

const DURATION_MS = 1200;
const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

export const useCountUp = (target: number) => {
    const [value, setValue] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started) {
                        setStarted(true);
                        const start = performance.now();
                        const step = (now: number) => {
                            const progress = Math.min(1, (now - start) / DURATION_MS);
                            setValue(Math.round(target * easeOutCubic(progress)));
                            if (progress < 1) requestAnimationFrame(step);
                        };
                        requestAnimationFrame(step);
                        observer.unobserve(node);
                    }
                });
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    return { ref, value };
};
