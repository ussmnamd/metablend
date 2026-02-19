"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CTA() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-mesh" />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Green glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-green/20 rounded-full blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Build Your Dream Team?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        Join 100+ companies who scaled smarter with Meta Blend
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="green-glow group">
                            Book Your Free Consultation
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
