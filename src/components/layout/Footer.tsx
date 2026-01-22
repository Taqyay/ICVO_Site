import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30 py-12 mt-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-heading tracking-tighter mb-4 block">
                            <span className="text-primary">ICVO</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Helping organizations navigate complexity through strategic technology implementation.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Digital Strategy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">System Architecture</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Operational Efficiency</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} ICVO Ltd. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
