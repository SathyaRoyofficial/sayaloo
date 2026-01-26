"use client";

import { motion } from "framer-motion";
import { content } from "@/app/lib/content";

export default function VoiceMessage({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-rose-red">Listen to this... 🎧</h2>

            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md flex items-center justify-center mb-10">
                <audio controls className="w-full">
                    <source src={content.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={onNext}
                className="bg-rose-red text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg"
            >
                Continue ❤️
            </motion.button>
        </div>
    );
}
