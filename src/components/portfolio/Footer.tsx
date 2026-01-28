"use client";

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a> */}
            {/* <a
              href="mailto:jadavmanisha722@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a> */}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
              by Manisha Jadav
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
