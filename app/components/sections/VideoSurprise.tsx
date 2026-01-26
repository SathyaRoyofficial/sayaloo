"use client";

import { motion } from "framer-motion";
import { content } from "@/app/lib/content";

export default function VideoSurprise({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-rose-red">A Special Surprise 🎥</h2>

            <div className="bg-white p-2 rounded-2xl shadow-2xl w-full max-w-4xl mb-10 transform rotate-1 aspect-video">
                <video controls className="w-full h-full rounded-xl bg-black">
                    <source src={content.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={onNext}
                className="bg-rose-red text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg mb-10"
            >
                Continue ❤️
            </motion.button>
        </div>
    );
}
