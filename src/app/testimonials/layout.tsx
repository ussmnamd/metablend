import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Testimonials & Case Studies | Meta Blend",
    description: "Read what our clients say about working with Meta Blend. Discover success stories from companies across SaaS, FinTech, and more.",
};

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
