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

                {/* Other Testimonials Grid */}
                <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <FadeInChild key={testimonial.id}>
                            <Card className="h-full border-t-4 border-t-primary-green relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <svg width="40" height="30" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2857 0L0 20H11.4286V45H28.5714V20H17.1429L31.4286 0H14.2857ZM42.8571 0L28.5714 20H40V45H57.1429V20H45.7143L60 0H42.8571Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-base text-text-primary mb-6 leading-relaxed">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-primary-green/10 flex items-center justify-center relative">
                                        {testimonial.avatar ? (
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-sm font-semibold text-primary-green">
                                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-bold text-text-primary text-sm">{testimonial.author}</div>
                                        <div className="text-xs text-primary-green font-medium">
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
