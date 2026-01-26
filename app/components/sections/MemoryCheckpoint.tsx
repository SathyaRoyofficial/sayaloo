"use client";

import { content } from "@/app/lib/content";
import QuestionGate from "../QuestionGate";

interface MemoryCheckpointProps {
    onNext: () => void;
    checkpointId: "memory1" | "memory2" | "memory3" | "heartCheckpoint" | "finalLock";
}

export default function MemoryCheckpoint({ onNext, checkpointId }: MemoryCheckpointProps) {
    const data = content[checkpointId] as any;

    return (
        <QuestionGate
            question={data.question}
            type={data.type}
            options={data.options}
            correctAnswer={data.correctAnswer}
            correctDate={data.correctDate}
            correctAnswers={data.correctAnswers}
            hint={data.hint}
            wrongMessage={data.wrongMessage}
            onUnlock={onNext}
        />
    );
}
