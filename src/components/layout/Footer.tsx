import Link from "next/link";
import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const servicesLinks = [
    { href: "/services/marketing", label: "Marketing & SMM" },
    { href: "/services/tech-staffing", label: "Tech & Engineering" },
    { href: "/services/design-creative", label: "Design & Creative" },
    { href: "/services/customer-support-operations", label: "Support & Operations" },
];

const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export function Footer() {
    return (
        <footer className="bg-surface-dark text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Logo & Tagline */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-green to-primary-green-light flex items-center justify-center">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="font-bold text-xl">Meta Blend</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Building world-class remote teams, one placement at a time.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-primary-green transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-primary-green transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-primary-green transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-primary-green transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Co-Founders</p>
                            <p className="text-sm text-slate-300">Ali Imran Malik</p>
                            <p className="text-sm text-slate-300">Faiz Subhani</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                <a href="mailto:sales@metablend.com" className="hover:text-primary-green transition-colors">
                                    sales@metablend.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Headquartered</p>
                                    <p>United Kingdom</p>
                                    <p className="font-semibold text-white text-xs uppercase tracking-wider mt-2 mb-1">Operations</p>
                                    <p>Pakistan</p>
                                    <p className="mt-2">+92-3323999370</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Meta Blend. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-slate-500 hover:text-primary-green transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-500 hover:text-primary-green transition-colors text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
