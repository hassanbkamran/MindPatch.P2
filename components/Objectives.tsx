import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Database, Users, BarChart3, Code, CheckCircle2, Lightbulb } from "lucide-react";

export function Objectives() {
  const objectives = [
    {
      icon: BookOpen,
      text: "To research the literature on cognitive overload, digital wellbeing, context-aware sensing and micro interventions for workplace productivity",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Database,
      text: "To research methods for privacy-preserving on-device context sensing (typing cadence, window/app switches, IDE focus) and lightweight ML detection techniques",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: Users,
      text: "To conduct a mixed-methods pilot (ecological momentary assessments, objective logs, and semi-structured interviews) with two work profiles (developers / interruptive roles)",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: BarChart3,
      text: "To analyse collected data using quantitative measures (focus session length, EMA scores, statistical tests) and qualitative thematic analysis from interviews",
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
    {
      icon: Code,
      text: "To implement an MVP desktop client that runs locally, detects overload events, and triggers personalised micro-recovery interventions without recording content",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: CheckCircle2,
      text: "To evaluate the outcome using usability (SUS), perceived cognitive load EMAs, end-of-day fatigue scales, and productivity proxies, and to reflect on findings for deployment and ethics guidance",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: Lightbulb,
      text: "To reflect on the results and findings, critically evaluate the effectiveness of ACMRS in achieving its aims, and propose future improvements or extensions for broader workplace and wellbeing applications",
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    }
  ];

  return (
    <section id="objectives" className="py-12 scroll-mt-20">
      <div className="mb-8">
        <Badge variant="outline" className="mb-4">
          7 Core Objectives
        </Badge>
        <h2 className="text-slate-900 mb-3">Project Objectives</h2>
        <p className="text-slate-600">
          By the end of this project, I will be able to:
        </p>
      </div>

      <div className="grid gap-4">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <Card key={index} className="p-6 bg-white/70 backdrop-blur border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className={`w-12 h-12 ${objective.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${objective.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-900 text-sm">
                      {index + 1}.
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {objective.text}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
