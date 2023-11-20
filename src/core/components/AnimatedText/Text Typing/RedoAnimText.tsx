import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoAnimTextProps {
    delay: number;
}

export default function RedoAnimText({ delay }: IRedoAnimTextProps) {
    const textIndex = useMotionValue(0);
    const texts = [
        "Let's partner up!",
        "How about teaming up for shared goals?",
        "Let's create something extraordinary together.",
        "Interested in a mutually beneficial collaboration?",
        "Let's explore a dynamic partnership—interested?",
        "Join me for a common venture in collaboration.",
        "Considering our strengths, partnering seems like a winning idea.",
        "Let's unite for a powerful partnership.",
        "I sense a fantastic partnership. What do you think?",
        "Interested in teaming up for new challenges and opportunities?"
    ];

    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            delay: delay,
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latest) {
                if (updatedThisRound.get() && latest > 0) {
                    updatedThisRound.set(false);
                } else if (!updatedThisRound.get() && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <motion.span className="inline">{displayText}</motion.span>;
}
