"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.5,
    once = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    const directions = {
        up: { y: 24, x: 0 },
        down: { y: -24, x: 0 },
        left: { y: 0, x: 24 },
        right: { y: 0, x: -24 },
        none: { y: 0, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...directions[direction] }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

interface StaggerChildrenProps {
    children: React.ReactNode;
    className?: string;
    delayBetween?: number;
}

export function StaggerChildren({ children, className, delayBetween = 0.1 }: StaggerChildrenProps) {
    return (
        <motion.div
            className={cn(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: delayBetween,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function FadeInChild({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
