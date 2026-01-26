"use client";

import { motion } from "framer-motion";
import { content } from "@/app/lib/content";
import { useState, useEffect } from "react";

export default function Reasons({ onNext }: { onNext: () => void }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < content.reasons.items.length) {
            const timer = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, 2500); // Auto advanced every 2.5s
            return () => clearTimeout(timer);
        }
    }, [index]);

    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <h2 className="text-3xl font-bold mb-12 text-rose-red">{content.reasons.title}</h2>

            <div className="h-32 mb-12 flex items-center justify-center">
                {content.reasons.items.map((reason, i) => (
                    i === index && (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed"
                        >
                            {reason}
                        </motion.p>
                    )
                ))}
                {index >= content.reasons.items.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-3xl text-foreground mb-8">And so many more...</p>
                    </motion.div>
                )}
            </div>

            {index >= content.reasons.items.length && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={onNext}
                    className="bg-blush-pink text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:bg-rose-red transition-colors"
                >
                    Continue ❤️
                </motion.button>
            )}
        </div>
    );
}
