"use client";

import { Star } from "lucide-react";
import { FadeIn, StaggerChildren, FadeInChild } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
    const featuredTestimonial = testimonials.find(t => t.featured);
    const otherTestimonials = testimonials.filter(t => !t.featured);

    return (
        <section className="py-16 md:py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <FadeIn className="text-center mb-12">
                    <Badge variant="green" className="mb-4">Client Stories</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                        What Our Clients Say
                    </h2>
                </FadeIn>

                {/* Featured Testimonial */}
                {featuredTestimonial && (
                    <FadeIn className="mb-8">
                        <Card className="bg-white border-l-4 border-l-primary-green max-w-4xl mx-auto">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-lg md:text-xl text-text-primary mb-6 leading-relaxed">
                                &quot;{featuredTestimonial.quote}&quot;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center">
                                    <span className="font-semibold text-primary-green">
                                        {featuredTestimonial.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-text-primary">{featuredTestimonial.author}</div>
                                    <div className="text-sm text-text-muted">
                                        {featuredTestimonial.role}, {featuredTestimonial.company}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                )}

                {/* Other Testimonials Grid */}
                <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherTestimonials.map((testimonial) => (
                        <FadeInChild key={testimonial.id}>
                            <Card className="h-full border-l-4 border-l-primary-green">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-sm text-text-secondary mb-4 line-clamp-4">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <span className="text-xs font-semibold text-slate-500">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-text-primary text-sm">{testimonial.author}</div>
                                        <div className="text-xs text-text-muted">
                                            {testimonial.role}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </FadeInChild>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
