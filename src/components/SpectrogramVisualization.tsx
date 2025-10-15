import { Card } from "@/components/ui/card";

export const SpectrogramVisualization = () => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <h2 className="text-2xl font-bold text-foreground mb-6">Audio Spectrogram Analysis</h2>
      
      <div className="relative h-64 bg-muted/30 rounded-lg overflow-hidden">
        {/* Frequency bands */}
        <div className="absolute inset-0 flex flex-col">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 flex"
            >
              {Array.from({ length: 50 }).map((_, j) => {
                const intensity = Math.random();
                const opacity = intensity * 0.8 + 0.2;
                return (
                  <div
                    key={j}
                    className="flex-1 transition-all duration-300"
                    style={{
                      background: `hsla(189, ${94 * intensity}%, ${50 * intensity + 30}%, ${opacity})`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Scan line animation */}
        <div className="absolute inset-y-0 left-0 w-1 bg-primary shadow-neon-strong scan-effect" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        <div className="text-center">
          <div className="text-muted-foreground">Frequency Range</div>
          <div className="text-foreground font-semibold">0-20 kHz</div>
        </div>
        <div className="text-center">
          <div className="text-muted-foreground">Duration</div>
          <div className="text-foreground font-semibold">3.2s</div>
        </div>
        <div className="text-center">
          <div className="text-muted-foreground">Anomalies</div>
          <div className="text-warning font-semibold">2 detected</div>
        </div>
      </div>
    </Card>
  );
};
