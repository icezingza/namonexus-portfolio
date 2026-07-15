import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, MessageCircle, TrendingUp } from "lucide-react";
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
            <div className="flex items-center gap-2 cursor-pointer hover:text-accent transition">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Portfolio</span>
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
      <section className="py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container space-y-6">
          <div>
            <span className="mono-pill bg-green-500/20 text-green-400 border-green-400/50">
              LIVE PROJECT
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">NaMo Care</h1>
            <p className="text-2xl text-muted-foreground">
              AI-powered elderly care assistant
            </p>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A compassionate AI system that combines real-time health monitoring,
            intelligent caregiving assistance, and proactive alerts to enhance
            the quality of life for elderly individuals and their caregivers.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container space-y-12">
          <h2 className="text-4xl font-bold text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "LINE-first UX",
                desc: "Familiar chat interface for seamless interaction.",
              },
              {
                icon: TrendingUp,
                title: "RAG Knowledge",
                desc: "Retrieval-augmented generation for accurate health insights.",
              },
              {
                icon: Bell,
                title: "Multi-model AI",
                desc: "Ensemble of specialized models for comprehensive care.",
              },
              {
                icon: Bell,
                title: "Caregiver Alert",
                desc: "Real-time notifications for critical health events.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass-card-hover p-6 space-y-4">
                  <Icon className="w-8 h-8 text-accent" />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Visualizations */}
      <section className="py-20 bg-card/30">
        <div className="container space-y-16">
          <h2 className="text-4xl font-bold text-center">Performance Metrics</h2>

          {/* Accuracy Chart */}
          <div className="glass-card-hover p-8 space-y-6">
            <h3 className="text-2xl font-bold">Model Accuracy Over Time</h3>
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
          </div>

          {/* Latency Chart */}
          <div className="glass-card-hover p-8 space-y-6">
            <h3 className="text-2xl font-bold">Model Latency Comparison</h3>
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
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="py-20">
        <div className="container space-y-12">
          <h2 className="text-4xl font-bold text-center">User Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chat Bubble */}
            <div className="glass-card-hover p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">Chat Interface</h3>
              </div>
              <div className="space-y-3 bg-card/50 p-4 rounded-lg">
                <div className="flex justify-end">
                  <div className="bg-accent/20 text-accent px-4 py-2 rounded-lg max-w-xs text-sm">
                    How's my blood pressure today?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted/30 text-muted-foreground px-4 py-2 rounded-lg max-w-xs text-sm">
                    Your BP is 128/82 mmHg. Stable and healthy. Keep up the
                    good work!
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-accent/20 text-accent px-4 py-2 rounded-lg max-w-xs text-sm">
                    Any medication reminders?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted/30 text-muted-foreground px-4 py-2 rounded-lg max-w-xs text-sm">
                    Yes, take Metformin at 8 PM tonight.
                  </div>
                </div>
              </div>
            </div>

            {/* Reminder Card */}
            <div className="glass-card-hover p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">Reminders</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-yellow-400">
                    Medication Due
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Lisinopril 10mg - 2:00 PM
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-400">
                    Health Check
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Weekly vitals measurement
                  </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-400">
                    Activity Goal
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    3,000 steps completed today
                  </p>
                </div>
              </div>
            </div>

            {/* Vitals Trend */}
            <div className="glass-card-hover p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">Vitals Trend</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Heart Rate
                    </span>
                    <span className="text-lg font-bold text-accent">72 bpm</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: "72%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Blood Oxygen
                    </span>
                    <span className="text-lg font-bold text-accent">98%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: "98%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Sleep Quality
                    </span>
                    <span className="text-lg font-bold text-accent">85%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card/30 border-t border-border">
        <div className="container">
          <div className="text-center text-xs text-muted-foreground space-y-2">
            <p>
              <strong>Demo showcase — mock data · read-only</strong>
            </p>
            <p>
              This case study demonstrates UI/UX and data visualization
              capabilities. All data is simulated for demonstration purposes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Explore?</h2>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
              >
                Back to Portfolio
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Contact for Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border text-center text-sm text-muted-foreground">
        <p>NamoNexus v5.0.0 © 2026 · Crafted with care</p>
      </footer>
    </div>
  );
}
