import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { services, getServiceIcon } from "@/content/services";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Our Services | Remote Staffing Solutions | Meta Blend",
    description: "Discover our comprehensive remote staffing solutions. From customer support to tech engineering, design, and back-office operations.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <Badge variant="green" className="mb-4">Our Services</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Comprehensive Talent Solutions
                        </h1>
                        <p className="text-lg text-text-secondary">
                            From customer support to technical development, we provide end-to-end staffing solutions tailored to your business needs. Build your dream team with world-class remote talent.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h2 className="sr-only">Available Services</h2>
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((service) => {
                            const Icon = getServiceIcon(service.icon);
                            return (
                                <FadeIn key={service.slug}>
                                    <Link href={`/services/${service.slug}`}>
                                        <Card hover className="h-full group border-l-4 border-l-transparent hover:border-l-primary-green">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 rounded-xl bg-green-tint flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-colors">
                                                    <Icon className="w-7 h-7 text-primary-green group-hover:text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-green transition-colors">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-text-secondary mb-4">
                                                        {service.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {service.industry.slice(0, 3).map((ind) => (
                                                            <span key={ind} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                                                {ind}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <span className="inline-flex items-center gap-1 text-primary-green font-medium text-sm group-hover:gap-2 transition-all">
                                                        Learn More <ArrowRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-tint">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                            Not sure which service is right for you?
                        </h2>
                        <p className="text-text-secondary mb-6">
                            Our team can help you identify the best solution for your specific needs.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">
                                Talk to an Expert
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
