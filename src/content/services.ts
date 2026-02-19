import { Headphones, Code2, Palette, Briefcase } from "lucide-react";
import React from "react";

export interface Service {
    slug: string;
    title: string;
    icon: string;
    tagline: string;
    description: string;
    features: string[];
    teamSizeRange: string;
    industry: string[];
}

export const services: Service[] = [
    {
        slug: "customer-support",
        title: "Customer Support",
        icon: "Headphones",
        tagline: "Always-on support teams that feel like your own",
        description: "Provide exceptional customer experiences with our dedicated support teams. Available 24/7 across multiple channels to resolve issues quickly and keep your customers satisfied.",
        features: [
            "24/7 coverage across all time zones",
            "Omnichannel support (phone, email, chat, social)",
            "Multi-language capabilities",
            "Customized scripts and workflows",
            "Quality assurance and monitoring",
            "Dedicated team lead"
        ],
        teamSizeRange: "2-50 agents",
        industry: ["SaaS", "E-commerce", "FinTech", "Healthcare"]
    },
    {
        slug: "tech-staffing",
        title: "Tech & Engineering",
        icon: "Code2",
        tagline: "Build your technical foundation with world-class developers",
        description: "Access top-tier developers, engineers, and technical talent. From full-stack developers to DevOps specialists, we find the right fit for your technical needs.",
        features: [
            "Full-stack developers",
            "Frontend & backend specialists",
            "DevOps & cloud engineers",
            "QA automation engineers",
            "Mobile app developers",
            "Data scientists & engineers"
        ],
        teamSizeRange: "1-20 developers",
        industry: ["SaaS", "FinTech", "Healthcare", "E-commerce"]
    },
    {
        slug: "design-creative",
        title: "Design & Creative",
        icon: "Palette",
        tagline: "Bring your brand vision to life with talented designers",
        description: "Elevate your brand with creative professionals who understand your vision. From UI/UX design to branding and marketing materials.",
        features: [
            "UI/UX design",
            "Brand identity & logo design",
            "Web design & development",
            "Graphic design & illustration",
            "Motion graphics & animation",
            "Video production & editing"
        ],
        teamSizeRange: "1-10 designers",
        industry: ["SaaS", "E-commerce", "Marketing Agencies", "Media"]
    },
    {
        slug: "back-office",
        title: "Back-Office & Operations",
        icon: "Briefcase",
        tagline: "Streamline your operations with efficient administrative support",
        description: "Keep your business running smoothly with dedicated operational support. From data entry to financial processing, we handle the details so you can focus on growth.",
        features: [
            "Data entry & management",
            "Finance & accounting support",
            "HR & payroll assistance",
            "Virtual assistants",
            "Document processing",
            "Customer service support"
        ],
        teamSizeRange: "2-30 staff",
        industry: ["Enterprise", "Healthcare", "Legal", "Real Estate"]
    }
];

// Static icon lookup to avoid creating components during render
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    Headphones,
    Code2,
    Palette,
    Briefcase
};

export function getServiceIcon(iconName: string): React.ComponentType<{ className?: string }> {
    return iconComponents[iconName] || Briefcase;
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}
