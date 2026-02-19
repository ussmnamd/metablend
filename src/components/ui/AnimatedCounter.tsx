"use client";

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    duration?: number;
}

export function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    className,
    duration = 1.5,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, prefix, suffix]);

    return (
        <span
            ref={ref}
            className={cn("tabular-nums", className)}
        >
            {prefix}0{suffix}
        </span>
    );
}
