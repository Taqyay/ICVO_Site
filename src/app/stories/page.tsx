import { Container } from "@/components/ui/container";

export default function StoriesPage() {
    return (
        <div className="py-24">
            <Container>
                <h1 className="text-5xl md:text-7xl font-serif text-primary mb-12">The Difference Made</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-24">
                    We don’t measure success in code deployed or features shipped. We measure it in moments reclaimed.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="paper-card p-12 rounded-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full transition-transform group-hover:scale-150 duration-700" />
                        <blockquote className="text-2xl font-serif italic text-foreground mb-8 relative z-10">
                            "I used to spend my weekends worrying about data integrity. Now, I spend them with my family."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-secondary/30 rounded-full" />
                            <div>
                                <div className="font-bold">Sarah J.</div>
                                <div className="text-sm text-muted-foreground">CTO, HealthFirst</div>
                            </div>
                        </div>
                    </div>

                    <div className="paper-card p-12 rounded-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-transform group-hover:scale-150 duration-700" />
                        <blockquote className="text-2xl font-serif italic text-foreground mb-8 relative z-10">
                            "The system just works. It's invisible. That's the highest compliment I can give."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/30 rounded-full" />
                            <div>
                                <div className="font-bold">Michael R.</div>
                                <div className="text-sm text-muted-foreground">Ops Director, LogisticsCo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
