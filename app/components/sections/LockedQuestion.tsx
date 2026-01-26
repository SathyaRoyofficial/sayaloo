"use client";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function LockedQuestion({ onNext }: { onNext: () => void }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-rose-900 text-white">
            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <Lock size={64} />
            </motion.div>
            <h2 className="text-3xl font-display mt-8 mb-4">Are You Ready?</h2>
            <button
                onClick={onNext}
                className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-rose-900 transition font-bold"
            >
                Unlock The Question
            </button>
        </div>
    );
}
