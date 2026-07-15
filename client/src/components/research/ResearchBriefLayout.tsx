import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export function Term({ children }: { children: ReactNode }) {
  return <span className="text-cyan-400 font-mono">{children}</span>;
}

interface ResearchBriefLayoutProps {
  title: string;
  summary: string;
  timestamp: string;
  topics: string[];
  children: ReactNode;
}

export default function ResearchBriefLayout({
  title,
  summary,
  timestamp,
  topics,
  children,
}: ResearchBriefLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link
            href="/#research"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition text-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Research
          </Link>
          <img
            src="/manus-storage/namonexus-logo_66b46ffc.png"
            alt="NamoNexus"
            className="w-8 h-8"
          />
        </div>
      </header>

      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-3xl space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            {topics.map(topic => (
              <span
                key={topic}
                className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded"
              >
                {topic}
              </span>
            ))}
            <span className="text-xs text-muted-foreground font-mono">
              {timestamp}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {summary}
          </p>
        </div>
      </section>

      <article className="py-24 md:py-32">
        <div className="container max-w-3xl space-y-20">{children}</div>
      </article>

      <footer className="py-12 border-t border-border text-center text-sm text-muted-foreground">
        <p>NamoNexus v5.0.0 © 2026 · Research &amp; Engineering</p>
      </footer>
    </div>
  );
}
