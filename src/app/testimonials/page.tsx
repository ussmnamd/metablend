"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { testimonials } from "@/content/testimonials";

const industries = ["All", "SaaS", "FinTech", "Healthcare", "Marketing", "Professional Services"];

export default function TestimonialsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredTestimonials = activeFilter === "All"
        ? testimonials
        : testimonials.filter(t => t.industry === activeFilter);

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <Badge variant="green" className="mb-4">Client Stories</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            What Our Clients Say
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Don&apos;t just take our word for it. Here&apos;s what companies who&apos;ve scaled with Meta Blend have to say.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {industries.map((industry) => (
                            <button
                                key={industry}
                                onClick={() => setActiveFilter(industry)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === industry
                                    ? "bg-primary-green text-white"
                                    : "bg-slate-100 text-text-secondary hover:bg-slate-200"
                                    }`}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 md:py-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTestimonials.map((testimonial) => (
                            <FadeIn key={testimonial.id}>
                                <Card className="h-full border-l-4 border-l-primary-green">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-sm text-text-secondary mb-4 line-clamp-5">
                                        &quot;{testimonial.quote}&quot;
                                    </blockquote>
                                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                        <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center">
                                            <span className="font-semibold text-primary-green text-sm">
                                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-text-primary">{testimonial.author}</div>
                                            <div className="text-xs text-text-muted">
                                                {testimonial.role}, {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>

                    {filteredTestimonials.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-text-muted">No testimonials found for this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="max-w-4xl mx-auto">
                        <Badge variant="green" className="mb-4">Featured Case Study</Badge>
                        <Card className="bg-surface-dark text-white border-0">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                        40% Cost Reduction While Doubling Support Capacity
                                    </h2>
                                    <p className="text-slate-300 mb-6">
                                        A fast-growing SaaS company needed to scale their customer support team without breaking the bank. Meta Blend built a dedicated 24/7 support team that reduced response times by 60% and cut costs by 40%.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-slate-800 rounded-lg">
                                            <div className="text-3xl font-bold text-primary-green">40%</div>
                                            <div className="text-xs text-slate-400">Cost Savings</div>
                                        </div>
                                        <div className="text-center p-4 bg-slate-800 rounded-lg">
                                            <div className="text-3xl font-bold text-primary-green">60%</div>
                                            <div className="text-xs text-slate-400">Faster Responses</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="aspect-square bg-slate-800 rounded-xl flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-primary-green mb-2">TechFlow</div>
                                            <div className="text-slate-400">SaaS Company</div>
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
