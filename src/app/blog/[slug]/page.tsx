import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

export async function generateStaticParams() {
    const slugs = [
        "outstaffing-vs-outsourcing",
        "building-remote-team-culture",
        "hiring-remote-developers",
        "cost-benefits-remote-staffing"
    ];
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    const titles: Record<string, string> = {
        "outstaffing-vs-outsourcing": "Outstaffing vs Outsourcing: What's the Difference?",
        "building-remote-team-culture": "Building a Strong Remote Team Culture",
        "hiring-remote-developers": "The Complete Guide to Hiring Remote Developers",
        "cost-benefits-remote-staffing": "Cost Benefits of Remote Staffing: A Deep Dive",
    };

    return {
        title: `${titles[slug] || "Blog Post"} | Meta Blend`,
        description: "Read our latest insights on remote work and staffing.",
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-background-light">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <FadeIn>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary-green mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                        <Badge variant="green" className="mb-4">Remote Work</Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                            {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-text-muted">
                            <span>January 15, 2026</span>
                            <span>•</span>
                            <span>5 min read</span>
                            <span>•</span>
                            <span>By Meta Blend Team</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <FadeIn>
                        <article className="prose prose-lg max-w-none">
                            <p className="text-xl text-text-secondary mb-8">
                                This is a placeholder for the blog post content. In a full implementation, this would contain the complete article with proper formatting, headings, and insights.
                            </p>
                            <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
                                Key Takeaways
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
                                <li>Understanding the difference between outstaffing and outsourcing models</li>
                                <li>How to choose the right model for your business needs</li>
                                <li>Cost considerations and benefits of each approach</li>
                                <li>Best practices for managing remote teams effectively</li>
                            </ul>
                            <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
                                Getting Started
                            </h2>
                            <p className="text-text-secondary mb-6">
                                Ready to explore how remote staffing can transform your business? Our team is here to help you understand the options and find the perfect solution for your needs.
                            </p>
                            <div className="bg-green-tint p-6 rounded-xl mt-12">
                                <h3 className="font-semibold text-text-primary mb-2">Ready to Build Your Dream Team?</h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Let&apos;s discuss how we can help you find the perfect talent.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-primary-green font-medium hover:underline"
                                >
                                    Book a Consultation →
                                </Link>
                            </div>
                        </article>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
