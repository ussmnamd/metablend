"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const companies = [
    { name: "TechFlow", initials: "TF" },
    { name: "DataSync", initials: "DS" },
    { name: "CloudLaunch", initials: "CL" },
    { name: "BrandCraft", initials: "BC" },
    { name: "HealthTech", initials: "HT" },
    { name: "PayStream", initials: "PS" },
];

export function LogoBar() {
    return (
        <section className="bg-white py-12 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <FadeIn>
                    <p className="text-center text-text-muted text-sm mb-8">
                        Trusted by innovative companies
                    </p>
                </FadeIn>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {companies.map((company, i) => (
                        <FadeIn key={company.name} delay={i * 0.1}>
                            <div className="group flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-all duration-300 cursor-default">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-primary-green/10 flex items-center justify-center transition-colors">
                                    <span className="font-bold text-sm text-slate-500 group-hover:text-primary-green transition-colors">
                                        {company.initials}
                                    </span>
                                </div>
                                <span className="font-semibold text-lg">{company.name}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
