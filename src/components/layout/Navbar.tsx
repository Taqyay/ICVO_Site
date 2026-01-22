"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LogoText } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
    { name: "Strategy", href: "#strategy" },
    { name: "Framework", href: "#framework" },
    { name: "Consultation", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass py-2" : "bg-transparent py-4"
            )}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <LogoText />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/contact">
                            <Button variant="glass" size="sm" className="rounded-full">
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </Container>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-black/5 p-4 flex flex-col gap-4 animate-accordion-down">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full">Contact Us</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
