"use client";

import { motion } from "framer-motion";
import { content } from "@/app/lib/content";

export default function Gallery({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 overflow-y-auto">
            <h2 className="text-3xl font-bold mb-8 text-rose-red mt-10">Our Best Moments</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl">
                {content.gallery.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ transform: `rotate(${Math.random() * 10 - 5}deg) scale(0.8)`, opacity: 0 }}
                        whileInView={{ transform: `rotate(${Math.random() * 6 - 3}deg) scale(1)`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white p-4 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300 transform-gpu"
                    >
                        <div className="w-full aspect-square relative bg-gray-200 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={src}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
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
