import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { ArrowLeft, Shield, Bell, Brain, Calendar } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { mockApi } from '../services/mockApi';

interface SettingsProps {
  onNavigate: (view: 'dashboard' | 'settings') => void;
}

export function Settings({ onNavigate }: SettingsProps) {
  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      const data = await mockApi.getSettings();
      setSettings(data);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to load settings');
      setLoading(false);
    }
  }

  async function updateSetting(key: string, value: any) {
    try {
      await mockApi.updateSettings({ [key]: value });
      setSettings({ ...settings, [key]: value });
      toast.success('Setting updated (demo mode)');
    } catch (error) {
      toast.error('Failed to update setting');
    }
  }

  if (loading) {
    return <div className="p-8 text-center">Loading settings...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" onClick={() => onNavigate('dashboard')} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-slate-900">Settings</h1>
        <p className="text-slate-600">Configure your MindPatch experience</p>
      </div>

      <div className="space-y-6">
        {/* Privacy Settings */}
        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-green-600" />
            <h2 className="text-slate-900">Privacy & Security</h2>
            <Badge variant="outline" className="ml-auto">Protected</Badge>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-900">
                <strong>Privacy-First Design:</strong> All data processing happens locally on your device.
                We never record keystrokes, text content, or personal information.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="telemetry">Anonymous Usage Statistics</Label>
                <p className="text-sm text-slate-500">
                  Help improve MindPatch (opt-in only, aggregated data)
                </p>
              </div>
              <Switch
                id="telemetry"
                checked={settings.telemetryEnabled || false}
                onCheckedChange={(checked) => updateSetting('telemetryEnabled', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Privacy Mode</Label>
                <p className="text-sm text-slate-500">
                  Current: <strong className="text-slate-700">{settings.privacyMode || 'strict'}</strong>
                </p>
              </div>
              <Badge>Strict</Badge>
            </div>
          </div>
        </Card>

        {/* Monitoring Settings */}
        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-5 h-5 text-blue-600" />
            <h2 className="text-slate-900">Monitoring</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="monitoring">Enable Monitoring</Label>
                <p className="text-sm text-slate-500">
                  Detect cognitive overload from typing and app switching
                </p>
              </div>
              <Switch
                id="monitoring"
                checked={settings.monitoringEnabled !== false}
                onCheckedChange={(checked) => updateSetting('monitoringEnabled', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Detection Sensitivity</Label>
                <p className="text-sm text-slate-500">
                  How quickly to detect overload
                </p>
              </div>
              <select
                value={settings.detectionSensitivity || 'medium'}
                onChange={(e) => updateSetting('detectionSensitivity', e.target.value)}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Intervention Settings */}
        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-purple-600" />
            <h2 className="text-slate-900">Interventions</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="interventions">Enable Interventions</Label>
                <p className="text-sm text-slate-500">
                  Automatically trigger micro-recovery sessions
                </p>
              </div>
              <Switch
                id="interventions"
                checked={settings.interventionEnabled !== false}
                onCheckedChange={(checked) => updateSetting('interventionEnabled', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="ema">Post-Intervention Feedback</Label>
                <p className="text-sm text-slate-500">
                  Occasionally prompt for effectiveness feedback
                </p>
              </div>
              <Switch
                id="ema"
                checked={settings.emaEnabled !== false}
                onCheckedChange={(checked) => updateSetting('emaEnabled', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Minimum Interval</Label>
                <p className="text-sm text-slate-500">
                  Time between automatic interventions
                </p>
              </div>
              <Badge variant="outline">
                {Math.round((settings.interventionMinInterval || 900000) / 60000)} minutes
              </Badge>
            </div>
          </div>
        </Card>

        {/* Calendar Integration */}
        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h2 className="text-slate-900">Calendar Integration</h2>
            <Badge variant="secondary" className="ml-auto">Optional</Badge>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900 mb-2">
                <strong>Privacy Note:</strong> Calendar integration only reads free/busy status,
                never event titles or descriptions.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="calendar">Enable Calendar</Label>
                <p className="text-sm text-slate-500">
                  Context-aware interventions based on schedule
                </p>
              </div>
              <Switch
                id="calendar"
                checked={settings.calendarEnabled || false}
                onCheckedChange={(checked) => updateSetting('calendarEnabled', checked)}
              />
            </div>

            {settings.calendarEnabled && (
              <Button variant="outline" className="w-full">
                Configure Calendar Access
              </Button>
            )}
          </div>
        </Card>

        {/* Data Management */}
        <Card className="p-6 bg-white/70 backdrop-blur">
          <h2 className="text-slate-900 mb-4">Data Management</h2>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Export Activity Data
            </Button>
            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
              Clear All Data
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
