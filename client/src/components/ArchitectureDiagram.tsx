import React from "react";
import { ArrowRight } from "lucide-react";

export default function ArchitectureDiagram() {
  return (
    <div className="w-full bg-card/30 border border-border rounded-lg p-12 overflow-x-auto">
      <div className="min-w-max flex items-center justify-center gap-4 md:gap-8">
        {/* User Input */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-24 border-2 border-accent rounded-lg flex items-center justify-center bg-accent/5">
            <div className="text-center">
              <p className="text-xs font-mono text-accent font-bold">USER INPUT</p>
              <p className="text-xs text-muted-foreground mt-1">Health Data</p>
              <p className="text-xs text-muted-foreground">Chat Query</p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-6 h-6 text-accent flex-shrink-0" />

        {/* RAG Engine */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-24 border-2 border-cyan-400/50 rounded-lg flex items-center justify-center bg-cyan-400/5">
            <div className="text-center">
              <p className="text-xs font-mono text-cyan-400 font-bold">RAG ENGINE</p>
              <p className="text-xs text-muted-foreground mt-1">Vector Search</p>
              <p className="text-xs text-muted-foreground">Context Retrieval</p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-6 h-6 text-accent flex-shrink-0" />

        {/* Multi-Model Ensemble */}
        <div className="flex flex-col items-center">
          <div className="w-36 h-24 border-2 border-accent rounded-lg flex items-center justify-center bg-accent/5">
            <div className="text-center">
              <p className="text-xs font-mono text-accent font-bold">MULTI-MODEL</p>
              <p className="text-xs text-muted-foreground mt-1">Claude + GPT-4</p>
              <p className="text-xs text-muted-foreground">Llama Ensemble</p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-6 h-6 text-accent flex-shrink-0" />

        {/* Output */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-24 border-2 border-green-400/50 rounded-lg flex items-center justify-center bg-green-400/5">
            <div className="text-center">
              <p className="text-xs font-mono text-green-400 font-bold">OUTPUT</p>
              <p className="text-xs text-muted-foreground mt-1">Care Plan</p>
              <p className="text-xs text-muted-foreground">Alert Trigger</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Legend */}
      <div className="mt-12 pt-8 border-t border-border space-y-4">
        <p className="text-sm font-bold text-muted-foreground">System Components</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: "Input Layer",
              desc: "Real-time health sensors, user queries, caregiver input",
            },
            {
              label: "Retrieval Layer",
              desc: "Vector database with medical knowledge, patient history",
            },
            {
              label: "Processing Layer",
              desc: "Ensemble of specialized AI models for decision-making",
            },
            {
              label: "Output Layer",
              desc: "Care recommendations, alerts, caregiver notifications",
            },
          ].map((component, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-xs font-mono text-accent font-bold">
                {component.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {component.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
