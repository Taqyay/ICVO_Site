import { Container } from "@/components/ui/container";

export default function EnginePage() {
    return (
        <div className="py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">The Warmth</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Contextualizing tech not as a machine, but as a quiet, supportive foundation. Like the floorboards of a home—essential, strong, and largely unnoticed until you need them to hold you up.
                        </p>
                        <div className="space-y-6">
                            <EngineItem title="Architecture as Foundation" description="Solid, reliable, and designed to bear the weight of your ambition." />
                            <EngineItem title="Code as Poetry" description="Clean, efficient, and expressive. Written for humans, read by machines." />
                            <EngineItem title="Security as Shelter" description="A protective layer that provides peace of mind without creating walls." />
                        </div>
                    </div>
                    <div className="relative h-[600px] bg-secondary/10 rounded-t-full flex items-center justify-center p-12">
                        {/* Abstract representation of "Quiet Tech" */}
                        <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <div className="z-10 text-center">
                            <div className="text-9xl font-serif text-primary opacity-20"> & </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

function EngineItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="group">
            <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    )
}
