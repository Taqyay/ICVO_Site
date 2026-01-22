"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Database, Brain, Sparkles } from "lucide-react";

export function ICVOFramework() {
    const [activeStage, setActiveStage] = useState<"input" | "value" | "output">("value");

    const stages = {
        input: {
            icon: Database,
            label: "Input",
            title: "Complexity Absorption",
            description: "We ingest fragmented data, legacy systems, and operational noise. Not just observing it, but structurally absorbing it.",
            color: "text-gray-400"
        },
        value: {
            icon: Brain,
            label: "Create Value",
            title: "The Invisible Engine",
            description: "Intentional AI architecture that processes complexity. It solves problems before they reach the human layer.",
            color: "text-primary"
        },
        output: {
            icon: Sparkles,
            label: "Output",
            title: "Societal Evolution",
            description: "Frictionless human engagement. Technology that serves as a universal enabler for growth and betterment.",
            color: "text-foreground"
        }
    };

    return (
        <section className="py-32 border-y border-gray-100" id="framework">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">The Logic of Evolution</h2>
                    <p className="max-w-xl text-muted-foreground">The ICVO framework transforms raw chaotic input into refined human value.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Interactive Diagram */}
                    <div className="lg:col-span-7 flex items-center justify-between relative px-4">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10" />

                        {(Object.keys(stages) as Array<"input" | "value" | "output">).map((key) => {
                            const Icon = stages[key].icon;
                            const isActive = activeStage === key;
                            return (
                                <motion.button
                                    key={key}
                                    onClick={() => setActiveStage(key)}
                                    className={cn(
                                        "w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center bg-white transition-all duration-300 relative z-10",
                                        isActive ? "border-primary scale-110 shadow-xl shadow-primary/10" : "border-gray-200 hover:border-gray-300"
                                    )}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className={cn("w-8 h-8 mb-2 transition-colors", isActive ? "text-primary" : "text-gray-400")} />
                                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", isActive ? "text-primary" : "text-gray-400")}>
                                        {stages[key].label}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-5">
                        <motion.div
                            key={activeStage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                                {stages[activeStage].label} Phase
                            </div>
                            <h3 className="text-3xl font-bold mb-6">{stages[activeStage].title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {stages[activeStage].description}
                            </p>

                            <div className="h-1 w-20 bg-primary/20 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
