import { Headphones, Code2, Palette, Briefcase, Megaphone, Share2 } from "lucide-react";
import React from "react";

export interface MarketingPackage {
    name: string;
    price: string;
    platforms: string;
    posts: string;
    seo: string;
    bestFor: string;
}

export interface Service {
    slug: string;
    title: string;
    icon: string;
    tagline: string;
    description: string;
    features: string[];
    teamSizeRange: string;
    industry: string[];
    packages?: MarketingPackage[];
    isPremium?: boolean;
}

export const services: Service[] = [
    {
        slug: "marketing",
        title: "Social Media & Digital Marketing",
        icon: "Megaphone",
        tagline: "Amplify your brand voice with targeted digital strategies",
        description: "Scale your presence across digital channels with our expert marketing teams. We specialize in social media management, content strategy, and high-performance paid advertising.",
        features: [
            "Comprehensive Social Media Management",
            "Digital Marketing Strategy & Execution",
            "Search Engine Optimization (SEO)",
            "Content Creation & Scheduling",
            "Performance Tracking & Reporting",
            "Paid Ads Management (Google & Meta)"
        ],
        teamSizeRange: "1-5 specialists",
        industry: ["SaaS", "E-commerce", "Personal Brands", "Real Estate"],
        isPremium: true,
        packages: [
            {
                name: "The Lite Start",
                price: "£200 /mo",
                platforms: "Instagram + LinkedIn (Brief)",
                posts: "10-12 Posts /mo",
                seo: "N/A",
                bestFor: "New Brands / Personal"
            },
            {
                name: "The Growth Pro",
                price: "£300 /mo",
                platforms: "IG + LI + SEO (Basic)",
                posts: "15-20 Posts /mo",
                seo: "Basic On-Page",
                bestFor: "Small Businesses seeking growth"
            },
            {
                name: "The Full Authority",
                price: "£500 /mo",
                platforms: "IG + FB + LI + SEO (Full)",
                posts: "20-25 Posts /mo",
                seo: "Full Monthly SEO",
                bestFor: "Established Brands"
            }
        ]
    },
    {
        slug: "customer-support-operations",
        title: "Support & Operations",
        icon: "Headphones",
        tagline: "Seamless support and back-office operations",
        description: "A merged solution for companies needing both customer-facing support and behind-the-scenes operational excellence. We handle the logistics so you can focus on the vision.",
        features: [
            "24/7 Customer Support (Phone, Email, Chat)",
            "Back-Office Administrative Support",
            "Data Entry & Management",
            "Finance & Accounting Assistance",
            "HR & Payroll Support",
            "Quality Assurance & Process Improvement"
        ],
        teamSizeRange: "3-50 staff",
        industry: ["E-commerce", "Healthcare", "Legal", "Enterprise"]
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
    }
];

// Static icon lookup to avoid creating components during render
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    Headphones,
    Code2,
    Palette,
    Briefcase,
    Megaphone,
    Share2
};

export function getServiceIcon(iconName: string): React.ComponentType<{ className?: string }> {
    return iconComponents[iconName] || Briefcase;
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}
