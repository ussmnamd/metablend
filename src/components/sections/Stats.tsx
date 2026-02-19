"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
    { value: 200, suffix: "+", label: "Professionals Placed" },
    { value: 40, suffix: "%", label: "Avg Cost Savings" },
    { value: 48, suffix: "hr", label: "Matching Time" },
    { value: 98, suffix: "%", label: "Client Retention" },
];

export function Stats() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-green-800 to-primary-green">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <div className="text-white/80 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
