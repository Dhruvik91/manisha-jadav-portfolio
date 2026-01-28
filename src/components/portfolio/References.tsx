"use client";

import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function References() {
    const references = [
        {
            name: "Dr. Nirav Bhavsar",
            title: "Professor",
            organization: "Sardar Patel University",
            contact: "9924506502",
        },
        {
            name: "Dr. Yati Vaidya",
            title: "Professor",
            organization: "Sardar Patel University",
            contact: "8690875656",
        },
    ];

    return (
        <section id="references" className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        References
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {references.map((ref, index) => (
                        <Card
                            key={index}
                            className="glass-card hover-lift border-border/50"
                        >
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <User className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl text-foreground">
                                            {ref.name}
                                        </CardTitle>
                                        <p className="text-primary font-medium">
                                            {ref.title}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-muted-foreground pl-[4.5rem]">
                                    <p>{ref.organization}</p>
                                    <p className="font-medium text-foreground">{ref.contact}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
