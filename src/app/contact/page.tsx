import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">
                            Request <span className="text-primary">Consultation</span>.
                        </h1>
                        <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
                            For organizations ready to evolve. Engage our strategists to architect your invisible AI foundation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-muted rounded-lg text-primary">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">hello@icvo.co.uk</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-muted rounded-lg text-secondary">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        123 Tech Hub Square<br />
                                        London, UK
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-muted rounded-lg text-foreground">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+44 20 1234 5678</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-border shadow-2xl">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </div>
    );
}
