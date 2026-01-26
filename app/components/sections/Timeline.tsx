"use client";

import { motion } from "framer-motion";
import { content } from "@/app/lib/content";

export default function Timeline({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col items-center justify-start h-full p-6 overflow-y-auto w-full md:max-w-2xl mx-auto custom-scrollbar">
            <h2 className="text-3xl font-bold mb-8 text-rose-red mt-10">Our Journey</h2>

            <div className="relative border-l-4 border-dashed border-rose-red/30 pl-8 ml-4 w-full">
                {content.timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="mb-12 relative"
                    >
                        <div className="absolute -left-[45px] top-1 w-6 h-6 bg-rose-red rounded-full border-4 border-white shadow-sm" />
                        <span className="text-sm font-bold text-rose-red bg-rose-red/10 px-3 py-1 rounded-full mb-2 inline-block">
                            {item.date}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-foreground/70">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={onNext}
                className="mt-4 mb-20 bg-rose-red text-white py-3 px-10 rounded-full font-bold text-lg shadow-lg"
            >
                Continue ❤️
            </motion.button>
        </div>
    );
}
