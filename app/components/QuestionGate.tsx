"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionGateProps {
    question: string;
    type: "text" | "date" | "choice" | "buttons";
    options?: string[]; // For choice and buttons
    correctAnswer?: string; // For choice
    correctDate?: string; // For date
    correctAnswers?: string[]; // For text (case insensitive)
    hint?: string;
    wrongMessage?: string;
    onUnlock: () => void;
}

export default function QuestionGate({
    question,
    type,
    options,
    correctAnswer,
    correctDate,
    correctAnswers,
    hint,
    wrongMessage = "Try again!",
    onUnlock,
}: QuestionGateProps) {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [shake, setShake] = useState(false);

    const handleSubmit = () => {
        let isCorrect = false;

        if (type === "text") {
            if (correctAnswers?.some((ans) => ans.toLowerCase() === input.toLowerCase())) {
                isCorrect = true;
            }
        } else if (type === "date") {
            if (input === correctDate) {
                isCorrect = true;
            }
        } else if (type === "choice") {
            if (input === correctAnswer) {
                isCorrect = true;
            }
        } else if (type === "buttons") {
            // Buttons trigger unlock immediately on click usually, but if we track selection
            isCorrect = true; // Any button acts as unlock in current extensive design unless specified
        }

        if (isCorrect) {
            onUnlock();
        } else {
            setError(wrongMessage);
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    const handleOptionClick = (option: string) => {
        if (type === "buttons") {
            onUnlock(); // Immediate unlock for buttons like "Yes/Always"
        } else {
            // For multiple choice, check against correct answer
            if (option === correctAnswer) {
                onUnlock();
            } else {
                setError(wrongMessage);
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto p-6 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold mb-8 text-rose-red"
            >
                {question}
            </motion.h2>

            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 mb-4 font-bold"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>

            <motion.div
                animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                className="w-full"
            >
                {type === "text" && (
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setError("");
                            }}
                            placeholder="Your answer..."
                            className="bg-white/50 border-2 border-rose-red/30 rounded-lg p-4 text-center text-xl focus:border-rose-red focus:outline-none transition-colors"
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-rose-red text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-rose-red/90 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Unlock ❤️
                        </button>
                    </div>
                )}

                {type === "date" && (
                    <div className="flex flex-col gap-4">
                        <input
                            type="date"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setError("");
                            }}
                            className="bg-white/50 border-2 border-rose-red/30 rounded-lg p-4 text-center text-xl focus:border-rose-red focus:outline-none"
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-rose-red text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-rose-red/90 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Unlock ❤️
                        </button>
                    </div>
                )}

                {(type === "choice" || type === "buttons") && (
                    <div className="flex flex-col gap-3">
                        {options?.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionClick(option)}
                                className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all transform hover:scale-102 active:scale-98 border-2 
                                    ${type === 'buttons' ? 'bg-rose-red text-white border-rose-red hover:bg-rose-red/90' : 'bg-white/80 text-foreground border-rose-red/20 hover:border-rose-red hover:bg-rose-red/5'}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}

                {hint && (
                    <p className="mt-6 text-sm text-foreground/60 italic">
                        Hint: {hint}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
