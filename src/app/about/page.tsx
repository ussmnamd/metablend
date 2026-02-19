import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, MapPin, Users, Target, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About Us | Global Outstaffing Agency | Meta Blend",
    description: "Learn about Meta Blend's mission to build world-class remote teams. Discover our story, values, and global presence.",
};

const values = [
    {
        icon: Target,
        title: "Quality First",
        description: "We never compromise on talent quality. Every candidate is rigorously vetted to ensure they meet our high standards."
    },
    {
        icon: Users,
        title: "Partnership",
        description: "We see ourselves as an extension of your team, not just a vendor. Your success is our success."
    },
    {
        icon: Heart,
        title: "Transparency",
        description: "Clear communication, honest pricing, and straightforward processes. No hidden fees or surprises."
    }
];

const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", location: "Canada" },
    { name: "Ahmed Hassan", role: "COO", location: "Bahrain" },
    { name: "Maria Garcia", role: "Head of Operations", location: "USA" },
    { name: "James Chen", role: "Head of Talent", location: "Singapore" },
];

const locations = [
    { name: "Canada", flag: "🇨🇦", description: "North American HQ" },
    { name: "Bahrain", flag: "🇧🇭", description: "Middle East Hub" },
    { name: "Pakistan", flag: "🇵🇰", description: "South Asia Operations" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="max-w-3xl">
                        <Badge variant="green" className="mb-4">About Us</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Building World-Class Remote Teams
                        </h1>
                        <p className="text-lg text-text-secondary">
                            We believe great talent shouldn&apos;t be limited by geography. Our mission is to connect ambitious companies with exceptional professionals from around the world.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Story */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn>
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-text-secondary">
                                <p>
                                    Founded in 2020, Meta Blend was born from a simple observation: companies were struggling to build high-quality teams while managing costs. Traditional hiring was slow, expensive, and often resulted in mismatches.
                                </p>
                                <p>
                                    We set out to change that. By combining global talent pools with rigorous vetting processes and dedicated support, we created a new model for remote staffing that delivers both quality and value.
                                </p>
                                <p>
                                    Today, we&apos;ve helped over 100 companies across North America and Europe build remote teams that have transformed their businesses. And we&apos;re just getting started.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-green-tint rounded-2xl p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary-green mb-2">100+</div>
                                        <div className="text-sm text-text-muted">Companies Served</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary-green mb-2">200+</div>
                                        <div className="text-sm text-text-muted">Professionals Placed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary-green mb-2">98%</div>
                                        <div className="text-sm text-text-muted">Client Retention</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary-green mb-2">15+</div>
                                        <div className="text-sm text-text-muted">Countries</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center mb-12">
                        <Badge variant="green" className="mb-4">Our Values</Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                            What Drives Us
                        </h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <FadeIn key={value.title} delay={i * 0.1}>
                                <Card hover className="h-full text-center">
                                    <div className="w-14 h-14 rounded-xl bg-green-tint flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-7 h-7 text-primary-green" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">{value.title}</h3>
                                    <p className="text-text-secondary text-sm">{value.description}</p>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center mb-12">
                        <Badge variant="green" className="mb-4">Our Team</Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                            Meet the Leadership
                        </h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <FadeIn key={member.name} delay={i * 0.1}>
                                <Card className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-primary-green/10 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-primary-green">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-text-primary">{member.name}</h3>
                                    <p className="text-sm text-text-muted">{member.role}</p>
                                    <div className="flex items-center justify-center gap-1 mt-2 text-sm text-text-muted">
                                        <MapPin className="w-4 h-4" />
                                        {member.location}
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-16 md:py-24 bg-surface-dark">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center mb-12">
                        <Badge variant="default" className="mb-4 text-white bg-slate-700">Global Presence</Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Serving Clients Worldwide
                        </h2>
                    </FadeIn>
                    <div className="flex flex-wrap justify-center gap-6">
                        {locations.map((location, i) => (
                            <FadeIn key={location.name} delay={i * 0.1}>
                                <div className="text-center p-6">
                                    <div className="text-5xl mb-3">{location.flag}</div>
                                    <h3 className="text-lg font-semibold text-white">{location.name}</h3>
                                    <p className="text-sm text-slate-400">{location.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-tint">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                            Want to learn more?
                        </h2>
                        <p className="text-text-secondary mb-6">
                            Let&apos;s discuss how we can help you build your dream team.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
