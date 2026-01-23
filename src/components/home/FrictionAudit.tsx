import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Search, ListChecks, Zap, Map, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        week: "Week 1",
        title: "Contextual Shadowing",
        description: "Deep dive observation of your operational reality to identify invisible friction points.",
        icon: Search,
    },
    {
        week: "Week 2",
        title: "Complexity Distillation",
        description: "Mapping the chaos and isolating high-leverage intervention points.",
        icon: ListChecks,
    },
    {
        week: "Week 3",
        title: "Logic of Evolution",
        description: "Designing the systems and workflows that will bridge the gap between vision and reality.",
        icon: Zap,
    },
    {
        week: "Week 4",
        title: "The Sovereign Roadmap",
        description: " delivering a clear, actionable execution plan to achieve operational sovereignty.",
        icon: Map,
    },
];

export function FrictionAudit() {
    return (
        <section id="friction-audit" className="py-32 bg-background border-t border-border">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
                    <div>
                        <div className="inline-block px-4 py-1.5 border border-border text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                            Productized Service
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
                            The Friction Audit.
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                            A 4-week intensive engagement to uncover, analyze, and dissolve the structural drag holding your organization back.
                        </p>
                    </div>
                    <div className="lg:text-right">
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 h-12">
                                Inquire About an Audit <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group p-8 border-r border-b border-border bg-background hover:bg-secondary/10 transition-colors duration-500"
                        >
                            <div className="mb-8 flex justify-between items-start">
                                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                                    {step.week}
                                </span>
                                <step.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
