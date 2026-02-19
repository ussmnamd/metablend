import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "Privacy Policy | Meta Blend",
    description: "Meta Blend's privacy policy. Learn how we protect your data.",
};

export default function PrivacyPage() {
    return (
        <section className="pt-32 pb-24 bg-background-light min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <FadeIn>
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg max-w-none text-text-secondary">
                        <p className="text-sm text-text-muted mb-8">Last updated: January 2026</p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">1. Introduction</h2>
                        <p>
                            At Meta Blend, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">2. Information We Collect</h2>
                        <p>
                            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                        </p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">3. How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>

                        <h2 className="text-xl font-bold text-text-primary mt-8 mb-4">4. Contact Us</h2>
                        <p>
                            If you have questions or comments about this policy, you may email us at hello@metablend.com.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
