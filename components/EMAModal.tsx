import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { MessageSquare, Star } from 'lucide-react';

interface EMAModalProps {
  onSubmit: (score: number, note: string) => void;
  onSkip: () => void;
}

export function EMAModal({ onSubmit, onSkip }: EMAModalProps) {
  const [score, setScore] = useState<number | null>(null);
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    if (score !== null) {
      onSubmit(score, note);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-slate-900">Quick Feedback</h3>
            <p className="text-sm text-slate-600">How helpful was that intervention?</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setScore(value)}
                className={`p-2 rounded-lg transition-all ${
                  score === value
                    ? 'bg-yellow-100 scale-110'
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <Star
                  className={`w-8 h-8 ${
                    score && score >= value
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 px-2">
            <span>Not helpful</span>
            <span>Very helpful</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-slate-700 mb-2">
            Additional comments (optional)
          </label>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Any thoughts on what would make this better?"
            rows={3}
            className="resize-none"
          />
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onSkip} className="flex-1">
            Skip
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={score === null}
            className="flex-1"
          >
            Submit
          </Button>
        </div>

        <p className="text-xs text-slate-500 text-center mt-4">
          Your feedback helps improve MindPatch
        </p>
      </Card>
    </div>
  );
}
