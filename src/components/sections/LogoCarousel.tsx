"use client";

import Image from "next/image";

const clientLogos = [
    "/clients/clientlogo1.jpeg",
    "/clients/clientlogo2.jpeg",
    "/clients/clientlogo3.jpeg",
    "/clients/clientlogo4.jpeg",
    "/clients/clientlogo6.jpeg",
    "/clients/clientlogo7.jpeg",
    "/clients/clientlogo8.jpeg",
    "/clients/clientlogo9.jpeg",
    "/clients/clientlogo10.jpeg",
];

interface LogoCarouselProps {
    className?: string;
    showTitle?: boolean;
    title?: string;
    logos?: string[];
    speed?: number;
}

export function LogoCarousel({
    className = "",
    showTitle = true,
    title = "Trusted by innovative companies",
    logos = clientLogos,
    speed = 40
}: LogoCarouselProps) {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className={`py-12 bg-white border-b border-slate-100 overflow-hidden ${className}`}>
            {showTitle && (
                <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
                    <p className="text-center text-text-muted text-sm">
                        {title}
                    </p>
                </div>
            )}

            <div className="relative flex">
                <div
                    className="flex whitespace-nowrap gap-12 items-center"
                    style={{
                        animation: `marquee ${speed}s linear infinite`,
                    }}
                >
                    {duplicatedLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="w-32 md:w-48 h-20 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={logo}
                                alt="Client Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for marquee animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                section:hover div[style*="animation"] {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
