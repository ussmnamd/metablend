export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    service: string;
    industry: string;
    avatar?: string;
    featured?: boolean;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        quote: "Meta Blend transformed our customer support operation. We went from overwhelmed to having a world-class support team that our customers actually praise. The cost savings were immediate, but the quality improvement was priceless.",
        author: "Sarah Chen",
        role: "CEO",
        company: "TechFlow SaaS",
        rating: 5,
        service: "customer-support",
        industry: "SaaS",
        featured: true
    },
    {
        id: "2",
        quote: "We needed to scale our engineering team quickly for a major product launch. Meta Blend delivered three senior developers within two weeks who integrated seamlessly with our existing team. Exceptional talent, exceptional service.",
        author: "Michael Rodriguez",
        role: "CTO",
        company: "DataSync Analytics",
        rating: 5,
        service: "tech-staffing",
        industry: "FinTech"
    },
    {
        id: "3",
        quote: "Our design needs were sporadic and it was hard to justify a full-time hire. Meta Blend's flexible design team model has been perfect - we get senior designers when we need them without the overhead.",
        author: "Emily Watson",
        role: "Marketing Director",
        company: "BrandCraft Agency",
        rating: 5,
        service: "design-creative",
        industry: "Marketing"
    },
    {
        id: "4",
        quote: "The back-office team Meta Blend provided has been a game-changer for our accounting firm. Accurate, efficient, and professional - they've handled everything from data entry to client communications flawlessly.",
        author: "David Park",
        role: "Managing Partner",
        company: "Park & Associates CPA",
        rating: 5,
        service: "back-office",
        industry: "Professional Services"
    },
    {
        id: "5",
        quote: "We've worked with several staffing agencies over the years, but Meta Blend is different. They truly understand our culture and only send candidates who are genuinely a great fit. Our retention rate with their placements is over 95%.",
        author: "Jessica Miller",
        role: "VP of Operations",
        company: "HealthTech Solutions",
        rating: 5,
        service: "customer-support",
        industry: "Healthcare"
    },
    {
        id: "6",
        quote: "As a startup, we needed to move fast but couldn't afford the Silicon Valley price tags. Meta Blend helped us build a complete remote team at a fraction of the cost - without sacrificing quality. We're now a 50-person company with team members across three continents.",
        author: "Alex Thompson",
        role: "Founder & CEO",
        company: "CloudLaunch",
        rating: 5,
        service: "tech-staffing",
        industry: "SaaS"
    }
];

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
    return testimonials.filter(t => t.service === serviceSlug);
}

export function getFeaturedTestimonial(): Testimonial | undefined {
    return testimonials.find(t => t.featured);
}
