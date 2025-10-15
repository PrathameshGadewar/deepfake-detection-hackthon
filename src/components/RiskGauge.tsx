import { Card } from "@/components/ui/card";

export const RiskGauge = () => {
  const riskScore = 34; // 0-100
  
  const getRiskLevel = (score: number) => {
    if (score < 30) return { label: 'Low Risk', color: 'text-success', bgColor: 'from-success/50 to-success' };
    if (score < 70) return { label: 'Medium Risk', color: 'text-warning', bgColor: 'from-warning/50 to-warning' };
    return { label: 'High Risk', color: 'text-destructive', bgColor: 'from-destructive/50 to-destructive' };
  };

  const { label, color, bgColor } = getRiskLevel(riskScore);
  const rotation = (riskScore / 100) * 180 - 90; // -90 to 90 degrees

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Risk Assessment</h2>
      
      <div className="relative w-64 h-32 mx-auto mb-6">
        {/* Gauge background */}
        <svg className="w-full h-full" viewBox="0 0 200 100">
          {/* Background arc */}
          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Colored segments */}
          <path
            d="M 20 90 A 80 80 0 0 1 66.67 30"
            fill="none"
            stroke="hsl(var(--success))"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 66.67 30 A 80 80 0 0 1 133.33 30"
            fill="none"
            stroke="hsl(var(--warning))"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 133.33 30 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="hsl(var(--destructive))"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Needle */}
          <g transform={`rotate(${rotation} 100 90)`}>
            <line
              x1="100"
              y1="90"
              x2="100"
              y2="20"
              stroke="hsl(var(--foreground))"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="90" r="6" fill="hsl(var(--primary))" className="pulse-glow" />
          </g>
        </svg>
      </div>

      <div className="text-center space-y-4">
        <div>
          <div className="text-4xl font-bold text-foreground mb-2">{riskScore}%</div>
          <div className={`text-lg font-semibold ${color}`}>{label}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs mt-6">
          <div className="p-2 rounded bg-success/10 border border-success/30">
            <div className="text-success font-semibold">0-30%</div>
            <div className="text-muted-foreground">Low</div>
          </div>
          <div className="p-2 rounded bg-warning/10 border border-warning/30">
            <div className="text-warning font-semibold">30-70%</div>
            <div className="text-muted-foreground">Medium</div>
          </div>
          <div className="p-2 rounded bg-destructive/10 border border-destructive/30">
            <div className="text-destructive font-semibold">70-100%</div>
            <div className="text-muted-foreground">High</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
