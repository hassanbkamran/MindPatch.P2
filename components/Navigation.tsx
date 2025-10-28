import { Brain, Target, FileText, Server } from "lucide-react";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-slate-900">MindPatch</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("objectives")}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Target className="w-4 h-4" />
              Objectives
            </button>
            <button
              onClick={() => scrollToSection("rationale")}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Rationale
            </button>
            <button
              onClick={() => scrollToSection("facilities")}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Server className="w-4 h-4" />
              Facilities
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
