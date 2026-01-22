import { ICVOFramework } from "@/components/home/ICVOFramework";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Vision Hero */}
      <section className="min-h-[85vh] flex items-center justify-center bg-white relative overflow-hidden">
        <Container className="text-center max-w-5xl mx-auto z-10">
          <div className="inline-block px-4 py-1.5 border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Systemic Evolution Partner
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            To redefine the relationship between <br className="hidden md:block" />
            humanity and <span className="text-primary">innovation</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Ensuring technology serves as a universal enabler of societal evolution.
            We remove the friction so you can shape the future.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-12">
              Start Consultation
            </Button>
            <Button size="lg" variant="outline" className="rounded-none px-8 h-12 border-gray-200 hover:bg-gray-50">
              Explore The Framework
            </Button>
          </div>
        </Container>

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </section>

      {/* The Framework */}
      <ICVOFramework />

      {/* Enabler vs Barrier Section */}
      <section className="py-32 bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Dissolving The Barrier</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Legacy debt, operational friction, and fragmented data are not just technical problems. They are barriers to human potential. ICVO exists to dismantle these barriers systematically.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">From Tech Debt to Tech Asset</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">From Operational Drag to Velocity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">From Data Noise to Strategic Clarity</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-12 border border-gray-200 shadow-sm relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5" />
              <h3 className="text-2xl font-bold mb-2">The Sovereign Standard</h3>
              <p className="text-muted-foreground">Minimal friction. Maximum impact. Our architecture is designed to be invisible, allowing your mission to take center stage.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Pillars */}
      <section className="py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-4">Architecting Value</h2>
            <p className="text-muted-foreground">Our three-pillared approach to systemic transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain className="w-8 h-8 text-primary" />}
              title="Strategic AI Implementation"
              description="The Invisible Engine. We deploy intentional AI layers that process complexity autonomously."
            />
            <ServiceCard
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Operational Efficiency Audits"
              description="The Friction Removal. Identifying and eliminating the structural drag on your organization."
            />
            <ServiceCard
              icon={<ShieldCheck className="w-8 h-8 text-primary" />}
              title="Social Value Architecting"
              description="The Human Impact. Ensuring every technical decision translates into tangible societal betterment."
            />
          </div>
        </Container>
      </section>

    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="minimal-card">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-6 flex items-center text-primary text-sm font-semibold cursor-pointer group">
        Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
