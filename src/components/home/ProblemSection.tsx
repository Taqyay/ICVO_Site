"use client";

import { Container } from "@/components/ui/container";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            The <span className="text-secondary">Velocity Trap</span>.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Modern enterprises are drowning in tools, data, and initiatives.
                            Efficiency has become noise. Speed has become chaos.
                        </p>
                        <div className="space-y-6">
                            <ProblemItem
                                title="Fragmented Strategy"
                                description="Vision disconnects from execution as teams sprint in different directions."
                            />
                            <ProblemItem
                                title="Tech Debt Accumulation"
                                description="Rapid adoption of new tools creates unmanageable integration layers."
                            />
                            <ProblemItem
                                title="Operational Drag"
                                description="Complexity slows down the very processes meant to accelerate growth."
                            />
                        </div>
                    </div>

                    <div className="relative h-[500px] w-full bg-muted/30 rounded-2xl border border-border p-8 flex items-center justify-center overflow-hidden">
                        {/* Abstract visual of chaos/noise */}
                        <div className="absolute inset-0 opacity-20">
                            <svg width="100%" height="100%">
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>

                        {/* "Chaos" Elements */}
                        <motion.div
                            animate={{
                                x: [0, 20, -20, 10, -10, 0],
                                y: [0, -10, 10, -5, 5, 0],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 blur-xl rounded-full"
                        />
                        <motion.div
                            animate={{
                                x: [0, -30, 30, -10, 10, 0],
                                y: [0, 20, -20, 10, -10, 0],
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-orange-500/20 blur-xl rounded-full"
                        />

                        <div className="relative z-10 text-center">
                            <div className="text-4xl font-bold mb-2">Complexity</div>
                            <div className="text-sm text-muted-foreground">is the silent killer of growth</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ProblemItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex gap-4 items-start group">
            <div className="mt-1 text-secondary group-hover:translate-x-1 transition-transform">
                <MoveRight size={20} />
            </div>
            <div>
                <h3 className="font-semibold text-foreground text-lg">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}
