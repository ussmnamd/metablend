import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Headphones, Code2, Palette, Briefcase, Megaphone, Share2 } from "lucide-react";
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
    Briefcase,
    Megaphone,
    Share2
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

            {/* Packages Section (if marketing) */}
            {service.packages && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-8">
                        <FadeIn className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                                Marketing Packages
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Choose the plan that best fits your current business needs.
                            </p>
                        </FadeIn>
                        <div className="grid md:grid-cols-3 gap-6">
                            {service.packages.map((pkg) => (
                                <FadeIn key={pkg.name}>
                                    <Card className="h-full border-t-4 border-t-primary-green flex flex-col">
                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold text-text-primary mb-2">{pkg.name}</h3>
                                            <div className="text-3xl font-bold text-primary-green">{pkg.price}</div>
                                        </div>
                                        <div className="space-y-4 mb-8 flex-1">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-text-muted">Platforms</span>
                                                <span className="font-medium text-text-primary">{pkg.platforms}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-text-muted">Post Volume</span>
                                                <span className="font-medium text-text-primary">{pkg.posts}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-text-muted">SEO Service</span>
                                                <span className="font-medium text-text-primary">{pkg.seo}</span>
                                            </div>
                                            <div className="flex justify-between text-sm border-t border-slate-100 pt-3">
                                                <span className="text-text-muted italic">Best For</span>
                                                <span className="font-medium text-text-primary text-right">{pkg.bestFor}</span>
                                            </div>
                                        </div>
                                        <Button className="w-full" variant="outline">Select Plan</Button>
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Accelerator Plans */}
                        <div className="mt-16 bg-surface-dark rounded-3xl p-8 md:p-12 text-white">
                            <div className="grid lg:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Paid Ads Add-Ons (The "Accelerator" Plans)</h3>
                                    <p className="text-slate-400 mb-8 italic">Management fees only. Ad spend paid directly to Google/Meta.</p>
                                    <div className="space-y-6">
                                        <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-lg">Google Ads Specialist</h4>
                                                <div className="text-primary-green font-bold">+£250/mo</div>
                                            </div>
                                            <p className="text-sm text-slate-400">Search/Display Campaign Setup + Weekly Optimization.</p>
                                        </div>
                                        <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-lg">The Duo (Google + Meta Ads)</h4>
                                                <div className="text-primary-green font-bold">+£350/mo</div>
                                            </div>
                                            <p className="text-sm text-slate-400">Integrated strategy for Google Search and Facebook/Instagram Sponsored posts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 bg-gradient-to-br from-primary-green/20 to-primary-green/5 rounded-3xl border border-primary-green/20">
                                    <h3 className="text-2xl font-bold mb-4 text-primary-green">The Global Reach</h3>
                                    <div className="text-4xl font-bold mb-6">£500 /mo</div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0" />
                                            Google Ads + YouTube Ads + Meta Ads
                                        </li>
                                        <li className="flex gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0" />
                                            <span className="font-bold text-white">Bonus:</span> Includes standard Instagram & Facebook SMM for free.
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-primary-green hover:bg-primary-green-light">Get Global Reach</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* What's Included */}
            <section className="py-16 md:py-24 bg-background-light">
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
