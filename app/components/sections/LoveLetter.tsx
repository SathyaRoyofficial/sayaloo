"use client";

import { motion } from "framer-motion";
import { content } from "@/app/lib/content";
import { useState, useEffect } from "react";

export default function LoveLetter({ onNext }: { onNext: () => void }) {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = content.letter;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50); // Typewriter speed
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="flex flex-col items-center justify-center h-full p-8 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-12 shadow-2xl max-w-2xl w-full rotate-1 paper-texture"
            >
                <div className="font-typewriter text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-foreground">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </div>
            </motion.div>

            {displayedText.length === fullText.length && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={onNext}
                    className="mt-8 bg-rose-red text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg mb-10"
                >
                    Continue ❤️
                </motion.button>
            )}
        </div>
    );
}
