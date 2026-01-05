"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/image.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center fade-in fade-in-visible">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                Manisha Jadav
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient-primary">
                M.Sc. Microbiology Graduate
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dedicated M.Sc. Microbiology graduate from A. N. Patel Institute of Science and Research. 
              Strong communication and decision-making skills with team-oriented approach and quality-driven mindset.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full primary-glow"
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#projects")}
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt="Manisha Jadav"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl -z-10 blur-2xl" />
          </div>
        </div>

          {/* <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jadavmanisha722@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div> */}

          {/* <button
            onClick={() => scrollToSection("#about")}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button> */}
      </div>
    </section>
  );
}
