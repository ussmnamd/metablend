"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, FadeInChild } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { services, getServiceIcon } from "@/content/services";

export function Services() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <FadeIn className="text-center mb-12">
                    <Badge variant="green" className="mb-4">What We Do</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                        End-to-End Talent Solutions
                    </h2>
                </FadeIn>

                <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service) => {
                        const Icon = getServiceIcon(service.icon);
                        return (
                            <FadeInChild key={service.slug}>
                                <Link href={`/services/${service.slug}`}>
                                    <Card hover className="h-full group border-l-4 border-l-transparent hover:border-l-primary-green">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-green-tint flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-colors">
                                                <Icon className="w-6 h-6 text-primary-green group-hover:text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-green transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-text-secondary text-sm mb-4">
                                                    {service.tagline}
                                                </p>
                                                <span className="inline-flex items-center gap-1 text-primary-green font-medium text-sm group-hover:gap-2 transition-all">
                                                    Learn More <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </FadeInChild>
                        );
                    })}
                </StaggerChildren>
            </div>
        </section>
    );
}
