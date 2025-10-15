import { Card } from "@/components/ui/card";

export const HeatmapVisualization = () => {
  const frames = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    intensity: Math.random() * 100,
  }));

  const getHeatColor = (intensity: number) => {
    if (intensity > 70) return 'bg-destructive';
    if (intensity > 40) return 'bg-warning';
    return 'bg-success';
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <h2 className="text-2xl font-bold text-foreground mb-6">Frame Manipulation Heatmap</h2>
      
      <div className="grid grid-cols-4 gap-3">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className={`relative aspect-video rounded-lg ${getHeatColor(frame.intensity)} transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden group`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-background opacity-80">
                Frame {frame.id}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-xs text-center font-semibold">
                {frame.intensity.toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-success" />
          <span className="text-muted-foreground">Low Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-warning" />
          <span className="text-muted-foreground">Medium Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-destructive" />
          <span className="text-muted-foreground">High Risk</span>
        </div>
      </div>
    </Card>
  );
};
