import { useEffect, useRef, useState } from 'react';

const TYPE_MS = 75;
const DELETE_MS = 40;
const PAUSE_MS = 1600;
const NEXT_WORD_MS = 320;

export const useTypewriter = (words: string[]) => {
    const [text, setText] = useState('');
    const indexRef = useRef(0);
    const charsRef = useRef(0);
    const deletingRef = useRef(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    // Depend on the content, not the array identity: callers (e.g. tList) build a new array every render.
    const wordsKey = JSON.stringify(words);

    useEffect(() => {
        indexRef.current = 0;
        charsRef.current = 0;
        deletingRef.current = false;

        const tick = () => {
            if (!words.length) return;
            const word = words[indexRef.current % words.length];
            charsRef.current += deletingRef.current ? -1 : 1;
            setText(word.slice(0, charsRef.current));

            let wait = deletingRef.current ? DELETE_MS : TYPE_MS;
            if (!deletingRef.current && charsRef.current === word.length) {
                deletingRef.current = true;
                wait = PAUSE_MS;
            } else if (deletingRef.current && charsRef.current === 0) {
                deletingRef.current = false;
                indexRef.current += 1;
                wait = NEXT_WORD_MS;
            }
            timeoutRef.current = setTimeout(tick, wait);
        };

        timeoutRef.current = setTimeout(tick, TYPE_MS);
        return () => clearTimeout(timeoutRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wordsKey]);

    return text;
};
