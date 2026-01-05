"use client";

import { Award, BookOpen, Code2, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Leadership",
      description: "Strong decision-making and task prioritization",
    },
    {
      icon: Heart,
      title: "Team-Oriented",
      description: "Effective collaboration in quality-driven environments",
    },
    {
      icon: BookOpen,
      title: "Scientific Knowledge",
      description: "Expertise in microbiological techniques",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to analytical skills and precision",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dedicated M.Sc. Microbiology graduate from A. N. Patel Institute of Science and Research under 
                Sardar Patel University. I possess strong communication and decision-making skills with the 
                ability to work effectively in team-oriented and quality-driven environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Secured First Prize in the Intercollegiate Youth Festival 2025 for mimicry, demonstrating 
                creativity and stage presence. Seeking a full-time position in Quality Control (QC), Quality 
                Assurance (QA), or Research & Development (R&D) to contribute scientific knowledge, analytical 
                skills, and a commitment to quality excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-border/50"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
