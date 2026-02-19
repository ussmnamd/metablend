import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "Terms of Service | Meta Blend",
    description: "Meta Blend's terms of service. Learn about our service agreement.",
};

export default function TermsPage() {
    return (
        <section className="pt-32 pb-24 bg-background-light min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <FadeIn>
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Terms of Service</h1>
                    <div className="prose prose-lg max-w-none text-text-secondary">
                        <p className="text-sm text-text-muted mb-8">Last updated: January 2026</p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, then you may not access our services.
                        </p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">2. Intellectual Property</h2>
                        <p>
                            The Website and its original content, features, and functionality are and will remain the exclusive property of Meta Blend and its licensors.
                        </p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">3. User Content</h2>
                        <p>
                            Our Website allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Website.
                        </p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall Meta Blend, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
                        </p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at hello@metablend.com.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
