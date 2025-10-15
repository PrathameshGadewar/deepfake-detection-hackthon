import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface MetadataItem {
  label: string;
  value: string;
  status: 'verified' | 'failed' | 'warning';
}

export const MetadataVerification = () => {
  const metadata: MetadataItem[] = [
    { label: "Timestamp", value: "2025-01-15 14:32:18 UTC", status: 'verified' },
    { label: "File Hash (SHA-256)", value: "a3f5d9...8c2e1b", status: 'verified' },
    { label: "EXIF Camera Model", value: "Canon EOS R5", status: 'warning' },
    { label: "GPS Coordinates", value: "37.7749° N, 122.4194° W", status: 'verified' },
    { label: "Creation Software", value: "Adobe Photoshop 2024", status: 'warning' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle2 className="w-5 h-5 text-success" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-destructive" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-warning" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <h2 className="text-2xl font-bold text-foreground mb-6">Metadata Verification</h2>
      
      <div className="space-y-4">
        {metadata.map((item) => (
          <div
            key={item.label}
            className="flex items-start justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex-1">
              <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
              <div className="text-sm font-mono text-foreground mt-1">{item.value}</div>
            </div>
            <div className="ml-4">
              {getStatusIcon(item.status)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
        <div className="text-sm text-foreground">
          <strong>Verification Summary:</strong> 3 verified, 2 warnings detected
        </div>
      </div>
    </Card>
  );
};
