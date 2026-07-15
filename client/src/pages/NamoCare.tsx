import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const accuracyData = [
  { month: "Jan", accuracy: 82 },
  { month: "Feb", accuracy: 85 },
  { month: "Mar", accuracy: 88 },
  { month: "Apr", accuracy: 91 },
  { month: "May", accuracy: 93 },
  { month: "Jun", accuracy: 95 },
];

const latencyData = [
  { model: "Claude", latency: 145 },
  { model: "GPT-4", latency: 120 },
  { model: "Llama", latency: 95 },
  { model: "Mistral", latency: 110 },
  { model: "Custom", latency: 78 },
];

export default function NamoCare() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-accent transition">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back</span>
            </div>
          </Link>
          <img
            src="/manus-storage/namonexus-logo_66b46ffc.png"
            alt="NamoNexus"
            className="w-8 h-8"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-4xl space-y-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/30 rounded-full">
              LIVE
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              Production Showcase — Mock Environment
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              NaMo Care
            </h1>
            <p className="text-xl text-muted-foreground">
              Enterprise AI system for elderly care, combining real-time health monitoring with intelligent caregiving assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Global elderly population is growing 3x faster than the general population. Simultaneously, caregiver availability is declining, creating a critical gap in quality care delivery. Current systems are fragmented: health monitoring is disconnected from caregiving assistance, alerts are reactive rather than predictive, and there is no unified intelligence layer to coordinate care decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              NaMo Care addresses this by building a sovereign AI system that augments—not replaces—human caregivers. It provides real-time health insights, predictive alerts, and intelligent care recommendations, all while maintaining transparency and user agency.
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">System Architecture</h2>
            <p className="text-muted-foreground">
              Data flows through four integrated layers: input collection, knowledge retrieval, multi-model processing, and intelligent output.
            </p>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-4xl space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Evidence</h2>
            <p className="text-muted-foreground">
              Objective metrics demonstrating system performance and reliability.
            </p>
          </div>

          {/* Accuracy Chart */}
          <div className="border border-border rounded-lg p-12 space-y-6">
            <h3 className="text-xl font-bold">Model Accuracy Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0, 224, 255, 0.1)"
                />
                <XAxis stroke="#8A8AA0" />
                <YAxis stroke="#8A8AA0" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1F3A",
                    border: "1px solid #00E0FF",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#E8E8E8" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#00E0FF"
                  strokeWidth={3}
                  dot={{ fill: "#00E0FF", r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Accuracy (%)"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground">
              System accuracy improved from 82% to 95% over 6 months through iterative model refinement and ensemble optimization.
            </p>
          </div>

          {/* Latency Chart */}
          <div className="border border-border rounded-lg p-12 space-y-6">
            <h3 className="text-xl font-bold">Model Latency Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={latencyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0, 224, 255, 0.1)"
                />
                <XAxis stroke="#8A8AA0" />
                <YAxis stroke="#8A8AA0" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1F3A",
                    border: "1px solid #00E0FF",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#E8E8E8" }}
                />
                <Legend />
                <Bar
                  dataKey="latency"
                  fill="#00E0FF"
                  name="Latency (ms)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground">
              Custom-optimized model achieves 78ms latency, enabling real-time decision-making for time-critical health events.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Technology Stack</h2>
            <p className="text-muted-foreground">
              Enterprise-grade infrastructure built for reliability, scalability, and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "AI/ML",
                techs: ["LLMs", "RAG", "Vector DB", "Transformers", "Ensemble"],
              },
              {
                category: "Backend",
                techs: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kubernetes"],
              },
              {
                category: "Frontend",
                techs: ["React", "TypeScript", "Tailwind", "Recharts", "Vite"],
              },
            ].map((stack, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg p-8 space-y-6"
              >
                <h3 className="text-lg font-bold text-accent">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Key Metrics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Model Accuracy", value: "95%", desc: "End-to-end system accuracy" },
              { label: "Response Latency", value: "78ms", desc: "P95 response time" },
              { label: "Uptime SLA", value: "99.9%", desc: "Production availability" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg p-8 space-y-3 text-center"
              >
                <p className="text-3xl font-bold text-accent">{metric.value}</p>
                <p className="text-sm font-bold text-foreground">{metric.label}</p>
                <p className="text-xs text-muted-foreground">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card/30 border-t border-border">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            <strong>Production Showcase — Mock Environment</strong>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This case study demonstrates system architecture and capabilities. All data is simulated for demonstration purposes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Explore?</h2>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
              >
                Back to Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border text-center text-xs text-muted-foreground">
        <p>NamoNexus © 2026 · Sovereign AI Ecosystems</p>
      </footer>
    </div>
  );
}
