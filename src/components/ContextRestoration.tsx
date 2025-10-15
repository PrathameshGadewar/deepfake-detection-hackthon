import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface Source {
  name: string;
  url: string;
  confidence: number;
  verified: boolean;
}

export const ContextRestoration = () => {
  const sources: Source[] = [
    { name: "Reuters Fact Check", url: "https://reuters.com", confidence: 94, verified: true },
    { name: "Snopes", url: "https://snopes.com", confidence: 88, verified: true },
    { name: "AP News Archive", url: "https://apnews.com", confidence: 91, verified: true },
    { name: "Google Reverse Image", url: "https://images.google.com", confidence: 76, verified: false },
  ];

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <h2 className="text-2xl font-bold text-foreground mb-6">Context Restoration</h2>
      
      <div className="space-y-4">
        {sources.map((source) => (
          <div
            key={source.name}
            className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-primary/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{source.name}</h3>
                  {source.verified && (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  )}
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 mb-2"
                >
                  {source.url}
                  <ExternalLink className="w-3 h-3" />
                </a>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">Confidence:</div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary transition-all duration-500"
                      style={{ width: `${source.confidence}%` }}
                    />
                  </div>
                  <div className="text-sm font-bold text-foreground">{source.confidence}%</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/30">
        <div className="text-sm text-foreground">
          <strong>Cross-Reference Result:</strong> 3 verified sources confirm authenticity
        </div>
      </div>
    </Card>
  );
};
