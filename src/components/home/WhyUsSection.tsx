import { Container } from "@/components/ui/container";

const stats = [
    { label: "Revenue Increase", value: "35%", prefix: "+" },
    { label: "Systems Integrated", value: "50", prefix: "+" },
    { label: "Client Satisfaction", value: "100", prefix: "%" },
];

export function WhyUsSection() {
    return (
        <section className="py-24 bg-background border-t border-border" id="about">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                            Why <span className="text-primary">ICVO</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            We bridge the gap between technical complexity and business reality. Our team is composed of veteran architects who have seen—and solved—it all.
                        </p>
                        <div className="grid grid-cols-3 gap-8 mt-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center md:text-left">
                                    <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                                        {stat.prefix === "+" && <span className="text-primary">+</span>}
                                        {stat.value}
                                        {stat.prefix === "%" && <span className="text-primary">%</span>}
                                    </div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[100px] -z-10 rounded-full" />
                        <div className="glass-card p-8 rounded-2xl border border-border relative z-10">
                            <h3 className="text-xl font-bold mb-4 font-heading">Our Philosophy</h3>
                            <blockquote className="text-lg italic text-muted-foreground border-l-2 border-primary pl-4 my-6">
                                "Technology should not be a labyrinth. It should be a lever."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/5" />
                                <div>
                                    <div className="font-bold text-foreground">James C.</div>
                                    <div className="text-xs text-muted-foreground">Principal Architect</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
