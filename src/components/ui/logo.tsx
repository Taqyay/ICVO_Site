export function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100" // Square viewbox for the icon part
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {/* Abstract structural shape suggesting complexity to simplicity */}
            <path d="M20 80 L50 20 L80 80" className="text-primary" />
            <path d="M50 20 L50 80" className="text-secondary opacity-80" />
            <path d="M20 50 L80 50" className="text-foreground opacity-20" strokeWidth="4" />
        </svg>
    );
}

export function LogoText({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <Logo className="w-8 h-8" />
            <span className="text-2xl font-bold font-heading tracking-tighter">ICVO</span>
        </div>
    )
}
