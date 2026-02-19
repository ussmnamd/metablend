import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Headphones, Code2, Palette, Briefcase } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import React from "react";

// Static icon lookup
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Headphones,
    Code2,
    Palette,
    Briefcase
};

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { title: "Service Not Found | Meta Blend" };
    }

    return {
        title: `${service.title} | Remote Staffing Solutions | Meta Blend`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-primary-green hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = iconMap[service.icon] || Briefcase;

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="max-w-3xl">
                        <Link
                            href="/services"
                            className="text-sm text-text-muted hover:text-primary-green mb-4 inline-block"
                        >
                            ← Back to Services
                        </Link>
                        <Badge variant="green" className="mb-4">{service.teamSizeRange}</Badge>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 rounded-xl bg-green-tint flex items-center justify-center shrink-0">
                                <Icon className="w-8 h-8 text-primary-green" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                                    {service.title}
                                </h1>
                            </div>
                        </div>
                        <p className="text-lg text-text-secondary">
                            {service.description}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <FadeIn>
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                                What&apos;s Included
                            </h2>
                            <div className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                        <span className="text-text-secondary">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Card className="h-fit">
                                <h3 className="text-lg font-semibold text-text-primary mb-4">
                                    Industries We Serve
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.industry.map((ind) => (
                                        <span key={ind} className="px-3 py-1 bg-green-tint text-primary-green rounded-full text-sm font-medium">
                                            {ind}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                                        Team Size
                                    </h3>
                                    <p className="text-text-secondary">
                                        {service.teamSizeRange} professionals
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <Link href="/contact">
                                        <Button className="w-full">
                                            Get Started
                                            <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-tint">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                            Ready to build your {service.title.toLowerCase()} team?
                        </h2>
                        <p className="text-text-secondary mb-6">
                            Let&apos;s discuss how we can help you find the perfect talent.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
