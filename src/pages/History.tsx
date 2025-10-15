import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { FileVideo, Image as ImageIcon, Music, Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface AnalysisRecord {
  id: string;
  fileName: string;
  fileType: 'image' | 'video' | 'audio';
  date: string;
  riskScore: number;
  status: 'completed' | 'processing' | 'failed';
}

const History = () => {
  const records: AnalysisRecord[] = [
    {
      id: '1',
      fileName: 'press_conference_2024.mp4',
      fileType: 'video',
      date: '2025-01-15 14:32:18',
      riskScore: 34,
      status: 'completed'
    },
    {
      id: '2',
      fileName: 'celebrity_interview.jpg',
      fileType: 'image',
      date: '2025-01-15 12:15:42',
      riskScore: 78,
      status: 'completed'
    },
    {
      id: '3',
      fileName: 'audio_statement.mp3',
      fileType: 'audio',
      date: '2025-01-15 09:23:11',
      riskScore: 12,
      status: 'completed'
    },
    {
      id: '4',
      fileName: 'news_broadcast.mp4',
      fileType: 'video',
      date: '2025-01-14 18:45:33',
      riskScore: 91,
      status: 'completed'
    },
    {
      id: '5',
      fileName: 'social_media_post.jpg',
      fileType: 'image',
      date: '2025-01-14 16:20:15',
      riskScore: 45,
      status: 'completed'
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <ImageIcon className="w-5 h-5" />;
      case 'video': return <FileVideo className="w-5 h-5" />;
      case 'audio': return <Music className="w-5 h-5" />;
      default: return null;
    }
  };

  const getRiskBadge = (score: number) => {
    if (score < 30) return <Badge className="bg-success">Low Risk</Badge>;
    if (score < 70) return <Badge className="bg-warning">Medium Risk</Badge>;
    return <Badge className="bg-destructive">High Risk</Badge>;
  };

  const handleView = (id: string) => {
    toast.info("Loading analysis details...");
  };

  const handleDelete = (id: string, fileName: string) => {
    toast.success(`Deleted: ${fileName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Analysis History</h1>
          <p className="text-muted-foreground">View and manage your previous media analyses</p>
        </div>

        <div className="grid gap-4">
          {records.map((record) => (
            <Card
              key={record.id}
              className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {getFileIcon(record.fileType)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 truncate">
                      {record.fileName}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Analyzed on {new Date(record.date).toLocaleString()}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {getRiskBadge(record.riskScore)}
                      <span className="text-sm text-muted-foreground">
                        Risk Score: {record.riskScore}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleView(record.id)}
                    className="gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="hidden sm:inline">View</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(record.id, record.fileName)}
                    className="text-destructive hover:text-destructive/80 gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Delete</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {records.length === 0 && (
          <Card className="p-12 bg-card/50 backdrop-blur-sm text-center">
            <p className="text-muted-foreground">No analysis history yet. Upload a file to get started!</p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default History;
