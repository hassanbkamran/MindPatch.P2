import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
            Research Project Proposal
          </Badge>
        </div>
        <h1 className="text-slate-900 mb-6">
          MindPatch – Adaptive Context-aware Micro-Recovery System
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
          For Developers
        </p>
      </div>

      <Card className="p-8 bg-white/50 backdrop-blur border-slate-200 shadow-lg">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-slate-900 mb-3">Project Aim</h2>
            <p className="text-slate-700 leading-relaxed">
              To design, implement and evaluate a <strong>privacy-first, on-device system</strong> that detects short bursts of cognitive overload from developers' digital behavior and calendar context, and automatically delivers <strong>20-60 second personalized micro-recovery interventions</strong> to restore focus and reduce mental fatigue.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-slate-900 text-sm mb-1">Privacy-First</h3>
              <p className="text-slate-600 text-sm">All processing on-device, no content recording</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-slate-900 text-sm mb-1">Real-Time Detection</h3>
              <p className="text-slate-600 text-sm">Context-aware behavioral sensing</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Brain className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-slate-900 text-sm mb-1">Micro-Interventions</h3>
              <p className="text-slate-600 text-sm">20-60 second recovery moments</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
