import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Brain, Activity, Zap, Settings as SettingsIcon, Shield, BarChart3, Cloud } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { mockApi } from '../services/mockApi';

interface DashboardProps {
  onNavigate: (view: 'dashboard' | 'settings') => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [stats, setStats] = useState<any>(null);
  const [recentEvents, setRecentEvents] = useState<any[]>([]);
  const [recentInterventions, setRecentInterventions] = useState<any[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [demoMode, setDemoMode] = useState(true);

  useEffect(() => {
    loadDashboardData();
    const interval = setInterval(loadDashboardData, 5000);
    return () => clearInterval(interval);
  }, []);

  async function loadDashboardData() {
    try {
      // Use mock API (browser environment)
      const [statsData, eventsData, interventionsData] = await Promise.all([
        mockApi.getStats(),
        mockApi.getEvents(10),
        mockApi.getRecentInterventions(5)
      ]);

      setStats(statsData);
      setRecentEvents(eventsData.events || []);
      setRecentInterventions(interventionsData.interventions || []);
    } catch (error) {
      console.error('Error loading dashboard:', error);
      toast.error('Failed to load dashboard data');
    }
  }

  const handleTriggerIntervention = async () => {
    try {
      await mockApi.triggerIntervention();
      toast.success('Intervention triggered (demo mode)');
      loadDashboardData();
    } catch (error) {
      toast.error('Failed to trigger intervention');
    }
  };

  const handleToggleMonitoring = async () => {
    setIsMonitoring(!isMonitoring);
    toast.success(isMonitoring ? 'Monitoring paused (demo)' : 'Monitoring resumed (demo)');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Demo Mode Notice */}
      {demoMode && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Cloud className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-blue-900 mb-1">Demo Mode - Browser Preview</h3>
              <p className="text-blue-700 text-sm">
                You're viewing a demo with simulated data. For full functionality, download and run the desktop app with the local service.
                <a href="https://github.com/mindpatch/mindpatch" className="ml-2 underline">Learn more →</a>
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setDemoMode(false)}
              className="text-blue-600 hover:text-blue-700"
            >
              Dismiss
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-slate-900">MindPatch</h1>
            <p className="text-slate-600">Cognitive Recovery System</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge variant={isMonitoring ? 'default' : 'secondary'}>
            {isMonitoring ? 'Monitoring Active' : 'Paused'}
          </Badge>
          <Button variant="outline" size="icon" onClick={() => onNavigate('settings')}>
            <SettingsIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <Badge variant="outline">Today</Badge>
          </div>
          <div className="text-2xl text-slate-900">{stats?.typingEvents || 0}</div>
          <div className="text-sm text-slate-600">Typing Events</div>
        </Card>

        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-indigo-600" />
            <Badge variant="outline">Today</Badge>
          </div>
          <div className="text-2xl text-slate-900">{stats?.appSwitches || 0}</div>
          <div className="text-sm text-slate-600">App Switches</div>
        </Card>

        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center justify-between mb-2">
            <Brain className="w-5 h-5 text-purple-600" />
            <Badge variant="outline">Today</Badge>
          </div>
          <div className="text-2xl text-slate-900">{stats?.overloadDetections || 0}</div>
          <div className="text-sm text-slate-600">Overload Detected</div>
        </Card>

        <Card className="p-6 bg-white/70 backdrop-blur">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-green-600" />
            <Badge variant="outline">Privacy</Badge>
          </div>
          <div className="text-2xl text-slate-900">Strict</div>
          <div className="text-sm text-slate-600">Local Only</div>
        </Card>
      </div>

      {/* Actions */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Card className="p-6 bg-white/70 backdrop-blur">
          <h3 className="text-slate-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button onClick={handleTriggerIntervention} className="w-full" variant="default">
              <Brain className="w-4 h-4 mr-2" />
              Trigger Intervention Now
            </Button>
            <Button onClick={handleToggleMonitoring} className="w-full" variant="outline">
              {isMonitoring ? 'Pause Monitoring' : 'Resume Monitoring'}
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-white/70 backdrop-blur">
          <h3 className="text-slate-900 mb-4">Recent Interventions</h3>
          <div className="space-y-2 max-h-32 overflow-auto">
            {recentInterventions.length === 0 && (
              <p className="text-slate-500 text-sm">No interventions yet today</p>
            )}
            {recentInterventions.map((intervention) => (
              <div key={intervention.id} className="flex items-center justify-between text-sm">
                <span className="text-slate-700">{intervention.type}</span>
                <span className="text-slate-500">
                  {new Date(intervention.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-white/70 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900">Recent Activity</h3>
          <BarChart3 className="w-5 h-5 text-slate-400" />
        </div>
        <div className="space-y-2 max-h-64 overflow-auto">
          {recentEvents.length === 0 && (
            <p className="text-slate-500 text-sm">No activity detected yet</p>
          )}
          {recentEvents.map((event) => {
            const meta = event.meta_json ? JSON.parse(event.meta_json) : {};
            return (
              <div key={event.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    {meta.app && (
                      <span className="text-sm text-slate-700">{meta.app}</span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-slate-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
