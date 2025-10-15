import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Metric {
  label: string;
  value: number;
  color: string;
}

export const DetectionResults = () => {
  const metrics: Metric[] = [
    { label: "Precision", value: 94.3, color: "bg-success" },
    { label: "Recall", value: 89.7, color: "bg-info" },
    { label: "F1-Score", value: 91.9, color: "bg-primary" },
  ];

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Detection Results</h2>
        <div className="shimmer h-2 w-24 rounded-full bg-gradient-primary opacity-50" />
      </div>

      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
              <span className="text-lg font-bold text-foreground">{metric.value}%</span>
            </div>
            <Progress 
              value={metric.value} 
              className="h-2 bg-muted"
            />
          </div>
        ))}

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <span className="text-sm font-semibold text-success flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success pulse-glow" />
              Analysis Complete
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
