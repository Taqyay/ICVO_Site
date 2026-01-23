"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Database, Brain, Sparkles, ArrowRight, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";

export function ICVOFramework() {
    const [activeStage, setActiveStage] = useState<"input" | "value" | "output">("value");

    const stages = {
        input: {
            id: "input",
            index: 0,
            icon: Database,
            label: "Input",
            title: "Complexity Absorption",
            description: "We ingest fragmented data, legacy technical debt, and operational noise. Instead of letting complexity paralyze your organization, we structurally absorb it.",
            detail: "Audit & Ingestion"
        },
        value: {
            id: "value",
            index: 1,
            icon: Brain,
            label: "Value",
            title: "The Invisible Engine",
            description: "An intentional architecture that processes entropy. We deploy AI agents and strategic logic layers to solve problems before they ever reach the human layer.",
            detail: "Process & Synthesis"
        },
        output: {
            id: "output",
            index: 2,
            icon: Sparkles,
            label: "Output",
            title: "Societal Evolution",
            description: "Frictionless human engagement. Technology becomes an invisible enabler, allowing you to focus purely on high-leverage mission objectives.",
            detail: "Impact & Growth"
        }
    };

    const activeIndex = stages[activeStage].index;

    return (
        <section className="py-32 bg-secondary/20 relative overflow-hidden" id="framework">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

            <Container>
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1.5 border border-border/60 rounded-full text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 bg-white/50 backdrop-blur-sm">
                        The Logic of Evolution
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 text-foreground">
                        From Chaos to <span className="text-primary">Clarity</span>.
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        The ICVO framework is our sovereign methodology for transforming raw operational input into refined human value.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Interactive Diagram */}
                    <div className="lg:col-span-7 relative">
                        {/* Connecting Line Container */}
                        <div className="absolute top-[3rem] left-8 right-8 h-1 bg-border/40 rounded-full -z-10 hidden lg:block" />

                        {/* Animated Progress Line */}
                        <motion.div
                            className="absolute top-[3rem] left-8 h-1 bg-primary rounded-full -z-10 hidden lg:block"
                            initial={{ width: "50%" }}
                            animate={{ width: `${activeStage === 'input' ? 0 : activeStage === 'value' ? 50 : 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {(Object.keys(stages) as Array<"input" | "value" | "output">).map((key) => {
                                const stage = stages[key];
                                const isActive = activeStage === key;
                                const isPast = stage.index < activeIndex;

                                return (
                                    <div key={key} className="flex flex-col items-center">
                                        <motion.button
                                            onClick={() => setActiveStage(key)}
                                            className={cn(
                                                "w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center bg-background transition-all duration-300 relative z-10",
                                                isActive
                                                    ? "border-primary shadow-[0_0_30px_-5px_rgba(167,139,250,0.3)] scale-110"
                                                    : isPast
                                                        ? "border-primary/50 text-foreground"
                                                        : "border-border text-muted-foreground hover:border-primary/40"
                                            )}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <stage.icon className={cn(
                                                "w-8 h-8 mb-2 transition-colors",
                                                isActive ? "text-primary" : isPast ? "text-primary/70" : "text-muted-foreground"
                                            )} />
                                            <span className={cn(
                                                "text-[10px] font-bold uppercase tracking-wider",
                                                isActive ? "text-primary" : "text-muted-foreground"
                                            )}>
                                                {stage.label}
                                            </span>
                                        </motion.button>

                                        {/* Mobile Connecting Line (Vertical) */}
                                        <div className={cn(
                                            "h-12 w-0.5 bg-border lg:hidden",
                                            key === 'output' && "hidden"
                                        )} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-5 relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-10 border border-border shadow-sm relative overflow-hidden group"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110 duration-700" />

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-secondary/50 rounded-lg">
                                        <Layers className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-bold text-primary uppercase tracking-widest">
                                        {stages[activeStage].detail}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-heading font-bold mb-6 text-foreground">
                                    {stages[activeStage].title}
                                </h3>

                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    {stages[activeStage].description}
                                </p>

                                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
}
