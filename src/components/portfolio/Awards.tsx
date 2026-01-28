"use client";

import { Award, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Awards() {
  const awards = [
    {
      title: "1st Prize in Mimicry",
      organization: "Sardar Patel University",
      date: "20/09/2025",
      description:
        "Awarded First Prize in Mimicry at the Intercollegiate Youth Festival, Sardar Patel University.",
      icon: Trophy,
    },
  ];

  const certificates = [
    {
      title: "Two Days Hands-on Workshop on Molecular Microbiology",
      description:
        "Participated in a two-day hands-on workshop on Molecular Microbiology, including scientific model making, organized by the Department of Microbiology on the occasion of National Science Day, 2025.",
      date: "2025",
    },
    {
      title: "First National Seminar on Postbiotics",
      description:
        "Participated in the First National Seminar on Postbiotics - New Emerging Area in Functional Foods: Health Benefits, Applications in Food Industry & Future Prospects, organized by ILSI India in virtual mode.",
      date: "",
    },
    {
      title: "Employability Skill Training Programme",
      description:
        "Successfully completed the Employability Skill Training Programme conducted by Mahindra Pride Classroom in collaboration with Naandi Foundation, focusing on professional, communication, and workplace skills.",
      date: "",
    },
    {
      title: "Hands-on Training on Diatom and Microalgae Sampling",
      description:
        "Participated in a one-day hands-on training program on Diatom and Microalgae Sampling, organized by P. D. Patel Institute of Applied Sciences, CHARUSAT, in association with ANRF-DST, Government of India.",
      date: "",
    },
    {
      title: "Fifteenth Late Dr. Diwaker R. Patel Memorial Lecture",
      description:
        "Attended the memorial lecture on Ayurveda for Management of Lifestyle and Diseases and Biotechnological Applications in Rice Improvement, organized by BACA Alumni Association, Anand Agricultural University.",
      date: "",
    },
    {
      title: "Certificate Course in Computer Concept (CCC)",
      description:
        "Successfully completed the Certificate Course in Computer Concept (CCC) with A+ grade, covering computer fundamentals, MS Office applications, and basic IT skills.",
      date: "",
    },
    {
      title: "Two-Day International Conference on AI-Powered Education",
      description:
        "Successfully attended a two-day international conference on AI-Powered Education: Opportunities, Challenges and Ethics, organized under RUSA 2.0 at C. B. Patel Arts College, Nadiad.",
      date: "",
    },
  ];

  return (
    <section id="awards" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Awards & Certificates
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition and professional development achievements
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Awards
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="glass-card hover-lift border-border/50 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <CardTitle className="text-xl text-foreground flex items-center gap-2">
                          <award.icon className="w-5 h-5 text-primary" />
                          {award.title}
                        </CardTitle>
                        <p className="text-primary font-semibold mt-2">
                          {award.organization}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-foreground"
                      >
                        {award.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Certificates & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="glass-card hover-lift border-border/50"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      {cert.title}
                    </CardTitle>
                    {cert.date && (
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-foreground w-fit"
                      >
                        {cert.date}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
