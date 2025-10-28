import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { AlertCircle, Target, Microscope, TrendingUp } from "lucide-react";

export function Rationale() {
  return (
    <section id="rationale" className="py-12 scroll-mt-20">
      <div className="mb-8">
        <Badge variant="outline" className="mb-4">
          Research Context
        </Badge>
        <h2 className="text-slate-900">Rationale</h2>
      </div>

      <div className="grid gap-6">
        {/* Problem Statement */}
        <Card className="p-6 bg-white/70 backdrop-blur border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-3">The Problem</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Software professionals often face a state of cognitive overload resulting from extended periods of intense concentration and frequent context-switching. This state diminishes productivity, accelerates mental fatigue, and can adversely affect long-term well-being.
              </p>
              <p className="text-slate-700 leading-relaxed">
                While many existing productivity tools aim to manage schedules or block distractions, there is a distinct lack of solutions that offer brief, personalized recovery moments initiated by real-time contextual signals.
              </p>
            </div>
          </div>
        </Card>

        {/* Proposed Solution */}
        <Card className="p-6 bg-white/70 backdrop-blur border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-3">Proposed Solution</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                To address this gap, we propose the <strong>MindPatch (Adaptive Cognitive Micro-Recovery System)</strong>. This system integrates lightweight, privacy-conscious monitoring of developer activities, such as typing patterns, IDE focus and application switching, with calendar data to identify early signs of cognitive overload.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Upon detection, it proactively delivers micro-recovery interventions lasting between 20 to 60 seconds. These interventions may include guided breathing exercises, posture correction prompts, or brief, scheduled "do-not-disturb" sessions. The objective is to facilitate the swift and non-intrusive replenishment of cognitive resources, thereby promoting sustained deep work and aligning with neuroscience-based productivity principles.
              </p>
            </div>
          </div>
        </Card>

        {/* Research Approach */}
        <Card className="p-6 bg-white/70 backdrop-blur border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Microscope className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-3">Research Approach</h3>
              <p className="text-slate-700 leading-relaxed">
                A planned mixed-methods pilot study will assess the system's feasibility, effectiveness, and user acceptance across two distinct workplace profiles: frontend/backend developers and support staff. It processes data locally and does not record personal content.
              </p>
            </div>
          </div>
        </Card>

        {/* Expected Impact */}
        <Card className="p-6 bg-white/70 backdrop-blur border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-3">Expected Impact</h3>
              <p className="text-slate-700 leading-relaxed">
                The outcomes are expected to yield publishable insights for the fields of digital wellbeing and workplace Human-Computer Interaction (HCI), while also producing a demonstrable Minimum Viable Product (MVP) with appealing potential for industry application.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
