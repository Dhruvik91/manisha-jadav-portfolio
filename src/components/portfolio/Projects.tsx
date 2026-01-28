"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Microbiological Techniques Research",
      description:
        "Comprehensive hands-on training in advanced microbiological techniques including culture methods, identification, and analysis.",
      technologies: ["Laboratory Practices", "Microbiology", "Research"],
      image: "🔬",
    },
    {
      title: "Quality Control & Assurance",
      description:
        "Practical experience in quality control procedures, good laboratory practices, and quality assurance protocols in pharmaceutical settings.",
      technologies: ["QC", "QA", "GLP"],
      image: "✅",
    },
    {
      title: "Molecular Microbiology Workshop",
      description:
        "Participated in hands-on workshop covering molecular techniques and scientific model making in microbiology.",
      technologies: ["Molecular Biology", "Scientific Methods"],
      image: "🧬",
    },
    {
      title: "Instrument Handling & Media Preparation",
      description:
        "Expertise in handling laboratory instruments, preparing culture media, and maintaining sterile techniques.",
      technologies: ["Lab Equipment", "Media Prep", "Sterile Technique"],
      image: "⚗️",
    },
    // {
    //   title: "Research & Development",
    //   description:
    //     "Contributing to R&D initiatives with analytical skills and scientific knowledge in microbiological applications.",
    //   technologies: ["R&D", "Analysis", "Innovation"],
    //   image: "📊",
    // },
    {
      title: "Postbiotics Seminar Participation",
      description:
        "Attended national seminar on emerging postbiotics in functional foods, health benefits, and future prospects.",
      technologies: ["Postbiotics", "Functional Foods", "Health"],
      image: "🌱",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Research & Activities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic research, laboratory work, and professional development activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-lift border-border/50 flex flex-col"
            >
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <CardTitle className="text-xl text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-foreground"
                    >
                      {tech}
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
