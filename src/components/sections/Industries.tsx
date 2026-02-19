"use client";

import { Cloud, ShoppingCart, Megaphone, Landmark, Heart, Building2 } from "lucide-react";
import { FadeIn, StaggerChildren, FadeInChild } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

const industries = [
    { icon: Cloud, name: "SaaS", description: "Software & Platforms" },
    { icon: ShoppingCart, name: "E-commerce", description: "Online Retail" },
    { icon: Megaphone, name: "Marketing Agencies", description: "Creative & Digital" },
    { icon: Landmark, name: "FinTech", description: "Financial Services" },
    { icon: Heart, name: "Healthcare", description: "HealthTech & Medical" },
    { icon: Building2, name: "Enterprise", description: "Large Organizations" },
];

export function Industries() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <FadeIn className="text-center mb-12">
                    <Badge variant="green" className="mb-4">Industries</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                        Built for Modern Businesses
                    </h2>
                </FadeIn>

                <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry) => (
                        <FadeInChild key={industry.name}>
                            <div className="group p-6 rounded-xl bg-green-tint hover:bg-white hover:border-primary-green border-2 border-transparent transition-all duration-300 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:bg-primary-green/10 transition-colors">
                                        <industry.icon className="w-6 h-6 text-primary-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary">{industry.name}</h3>
                                        <p className="text-sm text-text-muted">{industry.description}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInChild>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
