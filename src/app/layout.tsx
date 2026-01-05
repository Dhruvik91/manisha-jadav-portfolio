import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/lib/providers/query-provider";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manisha Jadav - Portfolio",
  description:
    "Professional portfolio of Manisha Jadav showcasing skills, experience, projects, and achievements.",
  keywords: ["portfolio", "Manisha", "Jadav", "developer", "professional"],
  authors: [{ name: "Manisha Jadav" }],
  openGraph: {
    title: "Manisha Jadav - Portfolio",
    description: "Professional portfolio showcasing skills and projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manisha Jadav - Portfolio",
    description: "Professional portfolio showcasing skills and projects",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
