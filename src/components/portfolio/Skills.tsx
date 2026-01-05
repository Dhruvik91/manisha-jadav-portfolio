"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Core Skills",
      skills: [
        "Leadership",
        "Decision Making",
        "Task Prioritization",
        "Good Laboratory Practices",
        "Instrument Handling",
        "Media Preparation",
      ],
    },
    {
      title: "Technical Skills",
      skills: [
        "Microbiological Techniques",
        "Quality Control (QC)",
        "Quality Assurance (QA)",
        "Research & Development",
        "MS Office",
        "Computer Fundamentals",
      ],
    },
    {
      title: "Languages",
      skills: [
        "Gujarati",
        "Hindi",
        "English",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card hover-lift border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
