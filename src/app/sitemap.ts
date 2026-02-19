import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://metablend.com";

    const staticRoutes = [
        "",
        "/about",
        "/services",
        "/testimonials",
        "/blog",
        "/contact",
        "/privacy",
        "/terms",
    ];

    const serviceRoutes = [
        "/services/customer-support",
        "/services/tech-staffing",
        "/services/design-creative",
        "/services/back-office",
    ];

    const blogRoutes = [
        "/blog/outstaffing-vs-outsourcing",
        "/blog/building-remote-team-culture",
        "/blog/hiring-remote-developers",
        "/blog/cost-benefits-remote-staffing",
    ];

    const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
    }));
}
