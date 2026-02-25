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
        quote: "Thanks to their solutions, bookings soared, and our online reputation improved. They truly turned our business around.",
        author: "Harris Aslam",
        role: "Managing Director",
        company: "Glenshire Group",
        rating: 5,
        service: "tech-staffing",
        industry: "Professional Services",
        avatar: "/testimonials/harris.jpg"
    },
    {
        id: "2",
        quote: "Thanks to their development of building NZF's CRM from scratch, my sales have grown, and my business feels more connected to customers than ever.",
        author: "Dr. Sohail Hanif",
        role: "CEO",
        company: "NZF UK",
        rating: 5,
        service: "tech-staffing",
        industry: "Professional Services",
        avatar: "/testimonials/sohail.jpg"
    }
];

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
    return testimonials.filter(t => t.service === serviceSlug);
}

export function getFeaturedTestimonial(): Testimonial | undefined {
    return testimonials.find(t => t.featured);
}
