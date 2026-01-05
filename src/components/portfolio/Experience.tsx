"use client";

import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "M.Sc. in Microbiology",
      company: "Sardar Patel University",
      period: "06/2024 - Present",
      location: "Anand, Gujarat",
      description:
        "Currently pursuing M.Sc. in Microbiology at Shri A. N. Patel Post-Graduate Institute of Science and Research, with comprehensive hands-on training and practical laboratory exposure in microbiological techniques.",
      achievements: [],
    },
    {
      title: "B.Sc. in Microbiology",
      company: "Saurashtra University",
      period: "06/2021 - 03/2024",
      location: "Amreli, Gujarat",
      description:
        "Completed B.Sc. in Microbiology at Kabiriya Arts, Vaghsiya Commerce and Bhagat Science Mahila College, affiliated with Saurashtra University.",
      achievements: [],
    },
    {
      title: "Summer Internship",
      company: "Dr. Patel Pharmaceutical Pvt. Ltd.",
      period: "05/2025",
      location: "",
      description:
        "Successfully completed a summer internship at Dr. Patel Pharmaceuticals Pvt. Ltd. with hands-on industrial exposure and structured field training.",
      achievements: [],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My academic journey and professional training
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-card hover-lift border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mt-1">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-muted-foreground text-sm mt-1">
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                {exp.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
