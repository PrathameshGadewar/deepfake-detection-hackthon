import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  FileVideo,
  Image as ImageIcon,
  Music,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

const OverallAnalyze = () => {
  const overallStats = [
    { label: "Total Analyses", value: "1,247", change: "+12.5%", trend: "up", icon: Shield },
    { label: "High Risk Detected", value: "89", change: "+5.2%", trend: "up", icon: AlertTriangle },
    { label: "Verified Safe", value: "1,021", change: "+15.3%", trend: "up", icon: CheckCircle2 },
    { label: "Processing Time", value: "1.8s", change: "-8.4%", trend: "down", icon: Clock },
  ];

  const mediaTypeStats = [
    { type: "Images", count: 623, percentage: 50, icon: ImageIcon, risk: { low: 498, medium: 89, high: 36 } },
    { type: "Videos", count: 412, percentage: 33, icon: FileVideo, risk: { low: 301, medium: 78, high: 33 } },
    { type: "Audio", count: 212, percentage: 17, icon: Music, risk: { low: 178, medium: 14, high: 20 } },
  ];

  const performanceMetrics = [
    { label: "Average Precision", value: 94.3, color: "bg-success" },
    { label: "Average Recall", value: 91.8, color: "bg-info" },
    { label: "Average F1-Score", value: 93.0, color: "bg-primary" },
  ];

  const recentTrends = [
    { date: "Jan 15", total: 156, highRisk: 12, verified: 144 },
    { date: "Jan 14", total: 142, highRisk: 15, verified: 127 },
    { date: "Jan 13", total: 168, highRisk: 18, verified: 150 },
    { date: "Jan 12", total: 134, highRisk: 9, verified: 125 },
    { date: "Jan 11", total: 151, highRisk: 13, verified: 138 },
    { date: "Jan 10", total: 145, highRisk: 11, verified: 134 },
    { date: "Jan 9", total: 139, highRisk: 14, verified: 125 },
  ];

  const maxTotal = Math.max(...recentTrends.map(t => t.total));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Overall Analysis</h1>
          <p className="text-muted-foreground">Comprehensive overview of all detection activities</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {overallStats.map((stat) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
            const trendColor = stat.trend === "up" ? "text-success" : "text-info";
            
            return (
              <Card
                key={stat.label}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
                    <TrendIcon className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Media Type Distribution */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Media Type Distribution</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mediaTypeStats.map((media) => {
              const Icon = media.icon;
              return (
                <div key={media.type} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{media.type}</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{media.count}</span>
                  </div>
                  
                  <Progress value={media.percentage} className="h-2 bg-muted" />
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 rounded bg-success/10">
                      <div className="font-bold text-success">{media.risk.low}</div>
                      <div className="text-muted-foreground">Low</div>
                    </div>
                    <div className="text-center p-2 rounded bg-warning/10">
                      <div className="font-bold text-warning">{media.risk.medium}</div>
                      <div className="text-muted-foreground">Medium</div>
                    </div>
                    <div className="text-center p-2 rounded bg-destructive/10">
                      <div className="font-bold text-destructive">{media.risk.high}</div>
                      <div className="text-muted-foreground">High</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Performance Metrics */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Performance Metrics</h2>
            
            <div className="space-y-6">
              {performanceMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                    <span className="text-lg font-bold text-foreground">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2 bg-muted" />
                </div>
              ))}

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall Accuracy</span>
                  <span className="text-lg font-bold text-primary">93.0%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Risk Distribution */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Risk Distribution</h2>
            
            <div className="space-y-6">
              <div className="relative h-48">
                <div className="absolute inset-0 flex items-end justify-center gap-2">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full bg-success rounded-t-lg transition-all duration-300" 
                         style={{ height: `${(977 / 1247) * 100}%` }} />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">977</div>
                      <div className="text-xs text-muted-foreground">Low Risk</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full bg-warning rounded-t-lg transition-all duration-300"
                         style={{ height: `${(181 / 1247) * 100}%` }} />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning">181</div>
                      <div className="text-xs text-muted-foreground">Medium</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full bg-destructive rounded-t-lg transition-all duration-300"
                         style={{ height: `${(89 / 1247) * 100}%` }} />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">89</div>
                      <div className="text-xs text-muted-foreground">High Risk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Low Risk</div>
                  <Badge className="bg-success">78.3%</Badge>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Medium Risk</div>
                  <Badge className="bg-warning">14.5%</Badge>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">High Risk</div>
                  <Badge className="bg-destructive">7.2%</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Activity Trends */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">7-Day Activity Trend</h2>
          
          <div className="space-y-4">
            {recentTrends.map((day, index) => (
              <div key={day.date} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground w-20">{day.date}</span>
                  <div className="flex-1 mx-4">
                    <div className="relative h-8 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 bottom-0 bg-gradient-primary rounded-full transition-all duration-500"
                        style={{ width: `${(day.total / maxTotal) * 100}%` }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-foreground">
                        {day.total} analyses
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="text-destructive font-semibold">{day.highRisk} high risk</span>
                    <span className="text-success font-semibold">{day.verified} verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default OverallAnalyze;
