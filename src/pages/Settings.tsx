import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Navigation } from "@/components/Navigation";
import { toast } from "sonner";
import { useState } from "react";

const Settings = () => {
  const [autoAnalysis, setAutoAnalysis] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [sensitivity, setSensitivity] = useState([75]);
  const [saveHistory, setSaveHistory] = useState(true);

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const handleReset = () => {
    setAutoAnalysis(true);
    setNotifications(true);
    setSensitivity([75]);
    setSaveHistory(true);
    toast.info("Settings reset to defaults");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Configure your detection system preferences</p>
        </div>

        <div className="space-y-6">
          {/* Analysis Settings */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-xl font-bold text-foreground mb-6">Analysis Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="auto-analysis" className="text-base">Auto-start Analysis</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically begin analysis when a file is uploaded
                  </p>
                </div>
                <Switch
                  id="auto-analysis"
                  checked={autoAnalysis}
                  onCheckedChange={setAutoAnalysis}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base">Detection Sensitivity</Label>
                  <span className="text-sm font-semibold text-primary">{sensitivity[0]}%</span>
                </div>
                <Slider
                  value={sensitivity}
                  onValueChange={setSensitivity}
                  min={0}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Higher sensitivity may increase false positives but catch more subtle manipulations
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="save-history" className="text-base">Save Analysis History</Label>
                  <p className="text-sm text-muted-foreground">
                    Store analysis results for future reference
                  </p>
                </div>
                <Switch
                  id="save-history"
                  checked={saveHistory}
                  onCheckedChange={setSaveHistory}
                />
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-xl font-bold text-foreground mb-6">Notifications</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notifications" className="text-base">Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts when analysis is complete or issues are detected
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
            </div>
          </Card>

          {/* Data Management */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-xl font-bold text-foreground mb-6">Data Management</h2>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full md:w-auto">
                Export Analysis Data
              </Button>
              <Button variant="destructive" className="w-full md:w-auto">
                Clear All History
              </Button>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleSave} className="flex-1 sm:flex-none shadow-neon">
              Save Settings
            </Button>
            <Button onClick={handleReset} variant="outline" className="flex-1 sm:flex-none">
              Reset to Defaults
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
