import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Brain, X } from 'lucide-react';

interface InterventionModalProps {
  intervention: any;
  onComplete: () => void;
}

export function InterventionModal({ intervention, onComplete }: InterventionModalProps) {
  const [timeRemaining, setTimeRemaining] = useState(intervention.duration);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const instructions = getInstructions(intervention.type);
  const totalDuration = intervention.duration || 30000;

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + totalDuration;

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const elapsed = totalDuration - remaining;
      
      setTimeRemaining(remaining);
      setProgress((elapsed / totalDuration) * 100);

      // Advance through steps
      const stepDuration = totalDuration / instructions.length;
      const step = Math.min(
        Math.floor(elapsed / stepDuration),
        instructions.length - 1
      );
      setCurrentStep(step);

      if (remaining === 0) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [intervention, totalDuration, instructions.length, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-lg p-8 bg-white shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-slate-900">{getInterventionName(intervention.type)}</h2>
              <p className="text-sm text-slate-600">
                {Math.ceil(timeRemaining / 1000)}s remaining
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onComplete}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <Progress value={progress} className="mb-8" />

        <div className="space-y-6">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition-all ${
                index === currentStep
                  ? 'bg-blue-50 border-2 border-blue-200 scale-105'
                  : index < currentStep
                  ? 'bg-slate-50 opacity-50'
                  : 'bg-slate-50 opacity-30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    index === currentStep
                      ? 'bg-blue-600 text-white'
                      : index < currentStep
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-300 text-slate-600'
                  }`}
                >
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <p
                  className={`${
                    index === currentStep ? 'text-slate-900' : 'text-slate-600'
                  }`}
                >
                  {instruction}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline" onClick={onComplete}>
            Skip
          </Button>
        </div>
      </Card>
    </div>
  );
}

function getInterventionName(type: string): string {
  const names: Record<string, string> = {
    breathing: 'Guided Breathing',
    stretch: 'Desk Stretch',
    posture: 'Posture Check',
    dnd: 'Do Not Disturb',
    microbreak: 'Micro-Break'
  };
  return names[type] || 'Micro-Recovery';
}

function getInstructions(type: string): string[] {
  const instructions: Record<string, string[]> = {
    breathing: [
      'Breathe in slowly for 4 seconds',
      'Hold your breath for 4 seconds',
      'Breathe out slowly for 4 seconds',
      'Hold for 4 seconds, then repeat'
    ],
    stretch: [
      'Roll your shoulders back 5 times',
      'Gently tilt your head to each side',
      'Rotate your wrists in circles',
      'Take a deep breath and relax'
    ],
    posture: [
      'Sit up straight in your chair',
      'Roll shoulders back and down',
      'Place feet flat on the floor',
      'Ensure screen is at eye level'
    ],
    dnd: [
      'Notifications are paused',
      'Close your eyes briefly',
      'Take a moment to reset',
      'Return when ready'
    ],
    microbreak: [
      'Look at something 20 feet away',
      'Blink slowly several times',
      'Roll your shoulders gently',
      'Take a deep, calming breath'
    ]
  };
  return instructions[type] || ['Take a moment to rest', 'Breathe deeply', 'Relax'];
}
