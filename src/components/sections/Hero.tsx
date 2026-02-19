"use client";

import Link from "next/link";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-mesh grid-pattern" />

            {/* Animated orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-green-light/10 rounded-full blur-3xl animate-float-delayed" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Eyebrow */}
                    <Badge variant="green" className="mb-4">
                        Global Outstaffing Agency
                    </Badge>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
                        Build World-Class Remote Teams — Without the Overhead
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We connect ambitious companies with top-tier remote talent across support, tech, design, and operations.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Book a Free Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white/10 hover:border-white">
                                See How It Works
                            </Button>
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center justify-center gap-2 pt-6 text-sm">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-slate-400">Trusted by 100+ companies across North America & Europe</span>
                    </div>
                </motion.div>

                {/* Dashboard Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 relative"
                >
                    <div className="bg-surface-dark/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-4 md:p-8 max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {[
                                { label: "Team Members", value: "200+" },
                                { label: "Companies", value: "100+" },
                                { label: "Countries", value: "15+" },
                                { label: "Success Rate", value: "98%" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-4xl font-bold text-primary-green mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-slate-400"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
