import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "green" | "outline";
    className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    const variants = {
        default: "bg-slate-100 text-slate-700",
        green: "bg-green-tint text-primary-green",
        outline: "border border-slate-200 text-slate-600",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
