"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FrameworkAnimation() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30 animate-pulse" />

            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center preserve-3d rotate-x-12">
                {/* Strategic Layer (Top) */}
                <Layer
                    label="Strategic"
                    color="bg-primary"
                    delay={0}
                    className="translate-y-[-100px] scale-90 z-30"
                    description="Vision & Direction"
                />

                {/* Tactical Layer (Middle) */}
                <Layer
                    label="Tactical"
                    color="bg-secondary"
                    delay={0.2}
                    className="z-20"
                    description="Planning & Orchestration"
                />

                {/* Operational Layer (Bottom) */}
                <Layer
                    label="Operational"
                    color="bg-white"
                    delay={0.4}
                    className="translate-y-[100px] scale-90 z-10"
                    description="Execution & Delivery"
                />

                {/* Connecting Beams */}
                <Beam delay={1} className="h-[100px] top-[50%] -translate-y-[100px]" />
                <Beam delay={1.5} className="h-[100px] top-[50%]" />
            </div>
        </div>
    );
}

function Layer({
    label,
    color,
    delay,
    className,
    description
}: {
    label: string;
    color: string;
    delay: number;
    className?: string;
    description: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 1,
                delay,
                type: "spring",
                stiffness: 50
            }}
            className={cn(
                "absolute w-64 h-64 md:w-80 md:h-80 rounded-2xl glass-card flex flex-col items-center justify-center border-t border-l border-white/40 shadow-2xl backdrop-blur-xl transition-transform hover:scale-105 hover:bg-white/40 cursor-default group",
                className
            )}
        >
            <div className={cn("w-12 h-12 rounded-full mb-4 opacity-80 group-hover:opacity-100 transition-opacity blur-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", color)} />
            <div className={cn("w-4 h-4 rounded-full mb-4 relative z-10", color)} />

            <h3 className="text-xl font-bold font-heading relative z-10 group-hover:text-primary transition-colors">
                {label}
            </h3>
            <p className="text-xs text-muted-foreground mt-2 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {description}
            </p>
        </motion.div>
    );
}

function Beam({ delay, className }: { delay: number; className?: string }) {
    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 100, opacity: 1 }}
            transition={{ delay, duration: 1 }}
            className={cn(
                "absolute w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent left-1/2 -translate-x-1/2 z-0",
                className
            )}
        />
    )
}
