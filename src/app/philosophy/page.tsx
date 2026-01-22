import { Container } from "@/components/ui/container";

export default function PhilosophyPage() {
    return (
        <div className="py-24">
            <Container>
                <h1 className="text-5xl md:text-7xl font-serif text-primary mb-12">Trust Building</h1>
                <div className="max-w-3xl space-y-8 text-lg text-muted-foreground leading-loose">
                    <p>
                        Technology is personal. It touches lives, shapes days, and defines careers. That’s why we don’t start with architecture diagrams. We start with coffee.
                    </p>
                    <p>
                        Our Human-Centred Design process is built on a radical premise: <strong>The user is the expert of their own experience.</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="border-l-2 border-primary pl-6">
                            <h3 className="text-2xl font-serif text-foreground mb-4">Listen</h3>
                            <p className="text-sm">We spend days shadowing your teams, understanding not just what they do, but how it feels to do it.</p>
                        </div>
                        <div className="border-l-2 border-primary pl-6">
                            <h3 className="text-2xl font-serif text-foreground mb-4">Distill</h3>
                            <p className="text-sm">We strip away the complexity to reveal the core human need hiding behind the technical requirement.</p>
                        </div>
                        <div className="border-l-2 border-primary pl-6">
                            <h3 className="text-2xl font-serif text-foreground mb-4">Empower</h3>
                            <p className="text-sm">We build tools that amplify human capability rather than replacing it.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
