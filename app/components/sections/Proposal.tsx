"use client";
import { motion } from "framer-motion";
import { content } from "@/app/lib/content";

export default function Proposal({ onNext }: { onNext: () => void }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[url('/bg-texture.png')] bg-cover">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-rose-red leading-tight">
                    {content.proposal.question}
                </h1>
            </motion.div>
            <div className="flex flex-col md:flex-row gap-6">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="px-12 py-4 bg-rose-red text-white text-2xl font-bold rounded-full shadow-2xl hover:bg-rose-600 transition-colors"
                >
                    {content.proposal.confirmText}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="px-12 py-4 bg-white text-rose-red border-2 border-rose-red text-2xl font-bold rounded-full hover:bg-rose-50 transition-colors"
                >
                    {content.proposal.rejectText}
                </motion.button>
            </div>
        </div>
    );
}
