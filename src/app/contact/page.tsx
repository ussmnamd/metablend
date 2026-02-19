"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    companyName: z.string().min(2, "Company name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    hearAbout: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
    { value: "customer-support", label: "Customer Support" },
    { value: "tech-staffing", label: "Tech & Engineering" },
    { value: "design-creative", label: "Design & Creative" },
    { value: "back-office", label: "Back-Office & Operations" },
    { value: "not-sure", label: "Not Sure / Need Advice" },
];

const hearOptions = [
    { value: "google", label: "Google Search" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "referral", label: "Referral" },
    { value: "social", label: "Social Media" },
    { value: "other", label: "Other" },
];

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", data);
        setIsSubmitted(true);
        setIsLoading(false);
        reset();
    };

    if (isSubmitted) {
        return (
            <section className="pt-32 pb-24 bg-background-light min-h-screen">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <FadeIn>
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-10 h-10 text-primary-green" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            Thank You!
                        </h1>
                        <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                            We&apos;ve received your message and will be in touch within 24 hours. We&apos;re excited to learn more about your needs.
                        </p>
                        <Link href="/">
                            <Button>Back to Home</Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <Badge variant="green" className="mb-4">Contact Us</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Let&apos;s Build Your Dream Team
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Ready to transform your business with world-class remote talent? We&apos;re here to help.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <FadeIn>
                            <Card>
                                <h2 className="text-xl font-bold text-text-primary mb-6">
                                    Send us a message
                                </h2>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-text-primary mb-1">
                                                Full Name *
                                            </label>
                                            <input
                                                {...register("fullName")}
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition"
                                                placeholder="John Smith"
                                            />
                                            {errors.fullName && (
                                                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-text-primary mb-1">
                                                Company Name *
                                            </label>
                                            <input
                                                {...register("companyName")}
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition"
                                                placeholder="Acme Inc."
                                            />
                                            {errors.companyName && (
                                                <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-text-primary mb-1">
                                                Work Email *
                                            </label>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition"
                                                placeholder="john@company.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-text-primary mb-1">
                                                Phone (optional)
                                            </label>
                                            <input
                                                {...register("phone")}
                                                type="tel"
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-primary mb-1">
                                            Service Interest *
                                        </label>
                                        <select
                                            {...register("service")}
                                            aria-label="Service Interest"
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s.value} value={s.value}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.service && (
                                            <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-primary mb-1">
                                            Message *
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition resize-none"
                                            placeholder="Tell us about your needs..."
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-primary mb-1">
                                            How did you hear about us?
                                        </label>
                                        <select
                                            {...register("hearAbout")}
                                            aria-label="How did you hear about us"
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition"
                                        >
                                            <option value="">Select an option</option>
                                            {hearOptions.map((o) => (
                                                <option key={o.value} value={o.value}>
                                                    {o.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                                        Send Message
                                    </Button>
                                </form>
                            </Card>
                        </FadeIn>

                        {/* Contact Info */}
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <Card>
                                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                                        Get in touch
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-text-primary">Email</p>
                                                <a href="mailto:hello@metablend.com" className="text-text-secondary hover:text-primary-green">
                                                    hello@metablend.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-text-primary">Phone</p>
                                                <a href="tel:+1234567890" className="text-text-secondary hover:text-primary-green">
                                                    +1 (234) 567-890
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-text-primary">Locations</p>
                                                <p className="text-text-secondary">Canada, Bahrain, Pakistan</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                                        Why work with us?
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-text-primary">Fast Response</p>
                                                <p className="text-sm text-text-secondary">We respond within 24 hours</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Star className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-text-primary">5-Star Rating</p>
                                                <p className="text-sm text-text-secondary">98% client satisfaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="bg-green-tint border-green-200">
                                    <p className="text-text-secondary text-sm">
                                        <strong className="text-text-primary">No commitment required.</strong>
                                        Our discovery call is completely free and there&apos;s no obligation to proceed.
                                    </p>
                                </Card>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    );
}
