import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Handshake, Star, Scale } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/namonexus-logo_66b46ffc.png"
              alt="NamoNexus"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-accent">NamoNexus</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 md:py-48">
        <div className="container space-y-8 max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Sovereign AI Ecosystems, Engineered with Care.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enterprise-grade AI systems built on principles of precision, transparency, and human-centered design.
            </p>
          </div>
          <div>
            <Link href="#initiatives">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
              >
                Explore Initiatives
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Initiatives Section */}
      <section id="initiatives" className="py-32 border-t border-border">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Core Initiatives</h2>
            <p className="text-muted-foreground text-lg">
              High-impact AI systems in production and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NaMo Care */}
            <Link href="/projects/namo-care">
              <div className="group cursor-pointer">
                <div className="border border-border rounded-lg p-12 space-y-6 hover:border-accent/50 transition-all duration-200 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition">
                      NaMo Care
                    </h3>
                    <span className="px-3 py-1 text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/30 rounded-full">
                      LIVE
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    AI-powered elderly care system with real-time health monitoring, intelligent caregiving assistance, and proactive caregiver alerts.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {["RAG", "Multi-model", "Real-time"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            {/* Smart Classroom */}
            <div>
              <div className="border border-border rounded-lg p-12 space-y-6 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold">Smart Classroom</h3>
                  <span className="px-3 py-1 text-xs font-mono bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded-full">
                    INTERNAL AUDIT
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Adaptive learning platform that personalizes education for each student using AI-driven insights and real-time analytics.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["Adaptive", "Analytics", "LLM"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* R&D Lab */}
            <div>
              <div className="border border-border rounded-lg p-12 space-y-6 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold">R&D Lab</h3>
                  <span className="px-3 py-1 text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-full">
                    STEALTH MODE
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Experimental research exploring novel architectures for human-AI collaboration and next-generation sovereign systems.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["Research", "Experimental", "Collaboration"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Engineering Section */}
      <section id="research" className="py-32 border-t border-border">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Research & Engineering</h2>
            <p className="text-muted-foreground text-lg">
              Technical deep-dives and architectural insights.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Optimizing RAG Pipelines for Sovereign AI Infrastructure",
                summary: "Techniques for maximizing retrieval accuracy and latency in production RAG systems.",
                timestamp: "2026-07-15",
                topics: ["Architecture", "Performance"],
              },
            ].map((article, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold leading-tight max-w-2xl">
                      {article.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex gap-2 flex-wrap">
                      {article.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground font-mono">
                        {article.timestamp}
                      </span>
                      <a
                        href="#"
                        className="text-xs font-mono text-accent hover:text-accent/80 transition"
                      >
                        Read Brief →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Design Principles */}
      <section id="principles" className="py-32 border-t border-border">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">System Design Principles</h2>
            <p className="text-muted-foreground text-lg">
              Foundational values guiding every architectural decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Metta",
                subtitle: "Loving-kindness",
                desc: "Compassion embedded in every system design.",
              },
              {
                icon: Handshake,
                title: "Karuna",
                subtitle: "Compassion",
                desc: "Empathy for users and stakeholders.",
              },
              {
                icon: Star,
                title: "Mudita",
                subtitle: "Sympathetic Joy",
                desc: "Celebrating human achievement and growth.",
              },
              {
                icon: Scale,
                title: "Upekkha",
                subtitle: "Equanimity",
                desc: "Balanced, unbiased, fair systems.",
              },
            ].map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-8 space-y-4 flex flex-col"
                >
                  <Icon className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="text-lg font-bold">{principle.title}</h3>
                    <p className="text-sm text-accent font-mono mt-1">
                      {principle.subtitle}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <h3 className="font-bold text-accent">Contact</h3>
              <a
                href="mailto:contact@namonexus.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
              >
                <Mail className="w-4 h-4" />
                contact@namonexus.com
              </a>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-accent">Social</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-accent">Copyright</h3>
              <p className="text-sm text-muted-foreground">
                NamoNexus © 2026
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
            <p>Sovereign AI ecosystems, engineered with precision and care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
