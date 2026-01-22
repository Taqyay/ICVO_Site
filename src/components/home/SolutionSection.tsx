import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

export function SolutionSection() {
    return (
        <section className="py-24 bg-muted/20">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        The <span className="text-primary">ICVO Framework</span>.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We don't just patch holes. We rebuild the foundation through a unified three-tiered approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SolutionCard
                        layer="Strategic"
                        title="Unified Vision"
                        description="Aligning technology with core business objectives to ensure every tool serves a purpose."
                        features={["Tech Roadmap Alignment", "ROI Analysis", "Future-Proofing"]}
                        delay={0}
                    />
                    <SolutionCard
                        layer="Tactical"
                        title="Intelligent Orchestration"
                        description="Designing seamless workflows that connect disparates systems into a cohesive ecosystem."
                        features={["API Integration", "Data Flow Optimization", "System Architecture"]}
                        delay={0.1}
                    />
                    <SolutionCard
                        layer="Operational"
                        title="Precision Execution"
                        description="Empowering teams with the right tools and processes to deliver consistent excellence."
                        features={["Automated Workflows", "Performance Monitoring", "Team Enablement"]}
                        delay={0.2}
                    />
                </div>
            </Container>
        </section>
    );
}

function SolutionCard({ layer, title, description, features, delay }: { layer: string, title: string, description: string, features: string[], delay: number }) {
    return (
        <div className="glass-card p-8 rounded-2xl hover:bg-black/5 transition-colors group">
            <div className="text-xs font-bold tracking-widest text-primary uppercase mb-4">{layer}</div>
            <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {description}
            </p>
            <ul className="space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                        <CheckCircle2 size={16} className="text-secondary" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    )
}
