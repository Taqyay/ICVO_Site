"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate API call
        setTimeout(() => setStatus("success"), 2000);
    };

    if (status === "success") {
        return (
            <div className="glass-card p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4 font-heading text-primary">Message Sent</h3>
                <p className="text-muted-foreground">Thank you for reaching out. Our team will be in touch shortly typically within 24 hours.</p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Send Another</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">First name</label>
                    <input
                        id="firstName"
                        required
                        className="w-full bg-white border border-input rounded-none px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">Last name</label>
                    <input
                        id="lastName"
                        required
                        className="w-full bg-white border border-input rounded-none px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-muted-foreground">Organization</label>
                <input
                    id="company"
                    type="text"
                    required
                    className="w-full bg-white border border-input rounded-none px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Company Name"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Work Email</label>
                <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-white border border-input rounded-none px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@company.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Strategic Objective</label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-white border border-input rounded-none px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Briefly describe your current technical barrier..."
                />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
