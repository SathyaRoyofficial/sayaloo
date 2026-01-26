"use client";

import { motion } from "framer-motion";
import { content } from "@/app/lib/content";

export default function Intro({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-[url('/bg-texture.png')] bg-cover">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
            >
                <span className="text-6xl mb-6 block animate-bounce">💌</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-foreground leading-tight">
                    {content.intro.title}
                </h1>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="bg-rose-red text-white py-4 px-10 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
                >
                    {content.intro.buttonText} 👉
                </motion.button>
            </motion.div>
        </div>
    );
}
