import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Laptop, Cloud, Code, Database, Users2, Shield } from "lucide-react";

export function Facilities() {
  const facilities = [
    {
      category: "Development Hardware",
      icon: Laptop,
      color: "text-blue-600",
      bg: "bg-blue-50",
      items: [
        "Development Laptop (Student): HP Elitebook 840 G5 (16GB RAM) for development and testing",
        "University Lab Machines / External Cloud-Based GPU (such as Google Colab Pro, Azure, AWS) for initial model training and testing before conversion to on-device versions and heavier offline model training if needed",
        "Volunteer Desktop / Laptop Machines (BYOD) for pilot"
      ]
    },
    {
      category: "Development Frameworks",
      icon: Code,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      items: [
        "Desktop-Client Frameworks: Electron.js or Python (PyQt/Tkinter) development environment; Node.js / Python installed"
      ]
    },
    {
      category: "Python Libraries",
      icon: Database,
      color: "text-purple-600",
      bg: "bg-purple-50",
      items: [
        "Python libs: scikit-learn, tensorflow lite, fastAPI/flask for local service, psutil / pynput (OS event capture)"
      ]
    },
    {
      category: "Analysis Tools",
      icon: Cloud,
      color: "text-green-600",
      bg: "bg-green-50",
      items: [
        "Logging & Analysis: Jupyter, Pandas, MS Excel, statistical packages (SciPy/statsmodels)"
      ]
    },
    {
      category: "User Research",
      icon: Users2,
      color: "text-orange-600",
      bg: "bg-orange-50",
      items: [
        "SUS questionnaires delivered post-study through hosted EMMA tool (local/web) or simple in app"
      ]
    },
    {
      category: "Ethics & Privacy",
      icon: Shield,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      items: [
        "Ethics paperwork and consent forms for anonymized aggregate data on university servers (secure storage / database)"
      ]
    }
  ];

  return (
    <section id="facilities" className="py-12 scroll-mt-20">
      <div className="mb-8">
        <Badge variant="outline" className="mb-4">
          Technical Requirements
        </Badge>
        <h2 className="text-slate-900">Facilities Required</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <Card key={index} className="p-6 bg-white/70 backdrop-blur border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${facility.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${facility.color}`} />
                </div>
                <h3 className="text-slate-900">{facility.category}</h3>
              </div>
              <ul className="space-y-3">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-2 text-slate-700 text-sm">
                    <span className="text-slate-400 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
