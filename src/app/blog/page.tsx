import Link from "next/link";
import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
    title: "Blog | Remote Work & Staffing Insights | Meta Blend",
    description: "Discover insights on remote staffing, hiring best practices, and building high-performing distributed teams.",
};

const posts = [
    {
        slug: "outstaffing-vs-outsourcing",
        title: "Outstaffing vs Outsourcing: What's the Difference?",
        description: "A comprehensive guide to understanding the two models and choosing the right one for your business.",
        category: "Remote Work",
        date: "January 15, 2026",
        readTime: "5 min read"
    },
    {
        slug: "building-remote-team-culture",
        title: "Building a Strong Remote Team Culture",
        description: "Learn how to create a cohesive and productive culture with your distributed team.",
        category: "Leadership",
        date: "January 8, 2026",
        readTime: "7 min read"
    },
    {
        slug: "hiring-remote-developers",
        title: "The Complete Guide to Hiring Remote Developers",
        description: "Best practices for finding, vetting, and onboarding remote technical talent.",
        category: "Tech Hiring",
        date: "December 28, 2025",
        readTime: "10 min read"
    },
    {
        slug: "cost-benefits-remote-staffing",
        title: "Cost Benefits of Remote Staffing: A Deep Dive",
        description: "How companies are saving up to 60% while accessing global talent pools.",
        category: "Business",
        date: "December 15, 2025",
        readTime: "6 min read"
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <Badge variant="green" className="mb-4">Blog</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Insights & Resources
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Expert perspectives on remote work, staffing strategies, and building high-performing distributed teams.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <FadeIn key={post.slug} delay={i * 0.1}>
                                <Link href={`/blog/${post.slug}`}>
                                    <Card hover className="h-full group">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge variant="green" className="text-xs">{post.category}</Badge>
                                        </div>
                                        <h2 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-green transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-text-muted">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </Card>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
