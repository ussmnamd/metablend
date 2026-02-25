"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { testimonials } from "@/content/testimonials";

const clientLogos = [
    "/clients/clientlogo1.jpeg",
    "/clients/clientlogo2.jpeg",
    "/clients/clientlogo3.jpeg",
    "/clients/clientlogo4.jpeg",
    "/clients/clientlogo6.jpeg",
    "/clients/clientlogo7.jpeg",
    "/clients/clientlogo8.jpeg",
    "/clients/clientlogo9.jpeg",
    "/clients/clientlogo10.jpeg",
];

export default function TestimonialsPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
                    <FadeIn className="max-w-3xl mx-auto">
                        <Badge variant="green" className="mb-4">Client Stories</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Trusted by Industry Leaders
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Discover how Meta Blend has helped companies across the globe scale their operations and achieve exceptional results.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Client Logos Wall */}
            <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
                <div className="relative flex">
                    <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                        {[...clientLogos, ...clientLogos].map((logo, i) => (
                            <div key={i} className="w-32 md:w-48 h-20 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={logo}
                                    alt="Client Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for marquee if not in globals.css */}
                <style jsx>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: flex;
                        animation: marquee 40s linear infinite;
                        width: max-content;
                    }
                    section:hover .animate-marquee {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 md:py-24 bg-background-light">
                <div className="max-w-5xl mx-auto px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial) => (
                            <FadeIn key={testimonial.id}>
                                <Card className="h-full border-t-4 border-t-primary-green relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.2857 0L0 20H11.4286V45H28.5714V20H17.1429L31.4286 0H14.2857ZM42.8571 0L28.5714 20H40V45H57.1429V20H45.7143L60 0H42.8571Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-xl italic text-text-primary mb-8 leading-relaxed">
                                        &quot;{testimonial.quote}&quot;
                                    </blockquote>
                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-primary-green/10 flex items-center justify-center relative">
                                            {testimonial.avatar ? (
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.author}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <span className="text-xl font-bold text-primary-green">
                                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-text-primary">{testimonial.author}</div>
                                            <div className="text-sm text-primary-green font-medium">
                                                {testimonial.role}, {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="max-w-4xl mx-auto">
                        <Badge variant="green" className="mb-4">Case Study Highlights</Badge>
                        <Card className="bg-surface-dark text-white border-0 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
                            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                        40% Cost Reduction While Doubling Capacity
                                    </h2>
                                    <p className="text-slate-300 mb-6">
                                        Our remote teams don&apos;t just save money—they improve performance. We helped NZF UK transition their entire CRM operations, resulting in unprecedented efficiency.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                            <div className="text-3xl font-bold text-primary-green">40%</div>
                                            <div className="text-xs text-slate-400">Cost Savings</div>
                                        </div>
                                        <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                            <div className="text-3xl font-bold text-primary-green">100%</div>
                                            <div className="text-xs text-slate-400">Reliability</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
                                        <div className="text-center p-8">
                                            <div className="text-4xl font-bold text-white mb-2 tracking-tight">NZF UK</div>
                                            <p className="text-slate-400 text-sm">Empowering communities through digital transformation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
