import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import {useTranslate} from "@tolgee/react";

export interface IRedoAnimTextProps {
    delay: number;
}

export default function RedoAnimText({ delay }: IRedoAnimTextProps) {
    const {t} = useTranslate();
    const textIndex = useMotionValue(0);
    const texts: string[] = [];
    for (let i = 1; i < 10; i++) {
        texts.push(t(`tr_contactText${i}`));
    }

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
