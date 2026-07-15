import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/namonexus-logo_66b46ffc.png"
              alt="NamoNexus"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-accent">NamoNexus</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-accent transition">
              About
            </a>
            <a href="#projects" className="text-sm hover:text-accent transition">
              Projects
            </a>
            <a href="#tech" className="text-sm hover:text-accent transition">
              Tech
            </a>
          </nav>
          <div className="flex items-center gap-4">
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('/manus-storage/hero-background_c286c088.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/20 to-background" />

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Elevate your existence with{" "}
              <span className="text-accent">NamoNexus</span>.
            </h1>
            <p className="text-lg text-muted-foreground">
              Human-centered AI, engineered with care.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
              >
                Explore Projects
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Glass Card with Video */}
          <div className="flex justify-center">
            <div className="glass-card glow-ring p-2 w-full max-w-md">
              <video
                src="/manus-storage/vdoLogo_ec454df2.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">About Kanin Raksaraj</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Senior AI Architect crafting systems that respect humanity.
            </p>
          </div>

          {/* Bio & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card-hover p-8 space-y-4">
              <h3 className="text-2xl font-bold text-accent">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over a decade in AI architecture, I design systems that
                scale intelligently while preserving human agency. My work spans
                healthcare, education, and enterprise—always with compassion at
                the core.
              </p>
            </div>
            <div className="glass-card-hover p-8 space-y-4">
              <h3 className="text-2xl font-bold text-accent">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build AI systems that augment human capability, not replace
                it. Every system should be transparent, ethical, and designed
                with the end-user's wellbeing in mind.
              </p>
            </div>
          </div>

          {/* Brahma-vihara Philosophy */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Philosophy: Brahma-vihara
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Metta",
                  subtitle: "Loving-kindness",
                  desc: "Compassion in every line of code.",
                },
                {
                  title: "Karuna",
                  subtitle: "Compassion",
                  desc: "Empathy for users and stakeholders.",
                },
                {
                  title: "Mudita",
                  subtitle: "Sympathetic Joy",
                  desc: "Celebrating human achievement.",
                },
                {
                  title: "Upekkha",
                  subtitle: "Equanimity",
                  desc: "Balanced, unbiased systems.",
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-card-hover p-6 space-y-3">
                  <h4 className="text-lg font-bold text-accent">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground">
              Showcasing AI systems built with care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NaMo Care */}
            <Link href="/projects/namo-care">
              <div className="glass-card-hover p-8 space-y-4 cursor-pointer group">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-accent transition">
                    NaMo Care
                  </h3>
                  <span className="mono-pill bg-green-500/20 text-green-400 border-green-400/50">
                    LIVE
                  </span>
                </div>
                <p className="text-muted-foreground">
                  AI-powered elderly care assistant with real-time health
                  monitoring and caregiver alerts.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["RAG", "Multi-model AI", "Real-time"].map((tag) => (
                    <span key={tag} className="mono-pill text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Smart Classroom */}
            <div className="glass-card-hover p-8 space-y-4 opacity-75">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold">Smart Classroom</h3>
                <span className="mono-pill bg-yellow-500/20 text-yellow-400 border-yellow-400/50">
                  BETA
                </span>
              </div>
              <p className="text-muted-foreground">
                Adaptive learning platform that personalizes education for each
                student using AI-driven insights.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Adaptive Learning", "Analytics", "LLM"].map((tag) => (
                  <span key={tag} className="mono-pill text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* R&D Lab */}
            <div className="glass-card-hover p-8 space-y-4 opacity-75 md:col-span-2">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold">R&D Lab</h3>
                <span className="mono-pill bg-purple-500/20 text-purple-400 border-purple-400/50">
                  STEALTH
                </span>
              </div>
              <p className="text-muted-foreground">
                Experimental AI research exploring novel architectures for
                human-AI collaboration.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Research", "Experimental", "Collaboration"].map((tag) => (
                  <span key={tag} className="mono-pill text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-card/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Tech Stack</h2>
            <p className="text-muted-foreground">
              Tools and frameworks powering NamoNexus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "AI/ML",
                techs: [
                  "LLMs",
                  "RAG",
                  "Vector DB",
                  "Transformers",
                  "Fine-tuning",
                ],
              },
              {
                category: "Backend",
                techs: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
              },
              {
                category: "Frontend",
                techs: ["React", "TypeScript", "Tailwind", "Next.js", "Vite"],
              },
            ].map((stack, idx) => (
              <div key={idx} className="glass-card-hover p-8 space-y-6">
                <h3 className="text-xl font-bold text-accent">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="mono-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-accent">Contact</h3>
              <a
                href="mailto:contact@namonexus.com"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Mail className="w-5 h-5" />
                contact@namonexus.com
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-accent">Social</h3>
              <div className="flex gap-4">
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
            <div className="space-y-4">
              <h3 className="font-bold text-accent">Brand</h3>
              <p className="text-sm text-muted-foreground">
                NamoNexus v5.0.0 © 2026
              </p>
            </div>
          </div>

          {/* Video Stinger */}
          <div className="flex justify-center py-8">
            <div className="w-32 h-32 glass-card p-1">
              <video
                src="/manus-storage/vdoLogo_ec454df2.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full rounded"
              />
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            <p>Crafted with care. Engineered with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
