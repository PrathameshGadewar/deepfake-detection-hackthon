import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";
import { FileVideo, Image as ImageIcon, Music, Eye, Trash2, Search, Filter } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface AnalysisRecord {
  id: string;
  fileName: string;
  fileType: 'image' | 'video' | 'audio';
  date: string;
  riskScore: number;
  status: 'completed' | 'processing' | 'failed';
  precision: number;
  recall: number;
  f1Score: number;
}

const RecentUploads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  const records: AnalysisRecord[] = [
    {
      id: '1',
      fileName: 'press_conference_2024.mp4',
      fileType: 'video',
      date: '2025-01-15 14:32:18',
      riskScore: 34,
      status: 'completed',
      precision: 94.3,
      recall: 89.7,
      f1Score: 91.9
    },
    {
      id: '2',
      fileName: 'celebrity_interview.jpg',
      fileType: 'image',
      date: '2025-01-15 12:15:42',
      riskScore: 78,
      status: 'completed',
      precision: 88.5,
      recall: 92.1,
      f1Score: 90.3
    },
    {
      id: '3',
      fileName: 'audio_statement.mp3',
      fileType: 'audio',
      date: '2025-01-15 09:23:11',
      riskScore: 12,
      status: 'completed',
      precision: 96.8,
      recall: 94.2,
      f1Score: 95.5
    },
    {
      id: '4',
      fileName: 'news_broadcast.mp4',
      fileType: 'video',
      date: '2025-01-14 18:45:33',
      riskScore: 91,
      status: 'completed',
      precision: 82.1,
      recall: 85.6,
      f1Score: 83.8
    },
    {
      id: '5',
      fileName: 'social_media_post.jpg',
      fileType: 'image',
      date: '2025-01-14 16:20:15',
      riskScore: 45,
      status: 'completed',
      precision: 91.2,
      recall: 88.9,
      f1Score: 90.0
    },
    {
      id: '6',
      fileName: 'podcast_clip.mp3',
      fileType: 'audio',
      date: '2025-01-14 14:10:22',
      riskScore: 23,
      status: 'completed',
      precision: 95.4,
      recall: 93.1,
      f1Score: 94.2
    },
  ];

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || record.fileType === filterType;
    return matchesSearch && matchesFilter;
  });

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
    toast.info("Loading detailed analysis...");
  };

  const handleDelete = (id: string, fileName: string) => {
    toast.success(`Deleted: ${fileName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Recent Uploads</h1>
          <p className="text-muted-foreground">View and manage your recent media analyses</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-card/50 backdrop-blur-sm border-border">
            <div className="text-2xl font-bold text-foreground">{records.length}</div>
            <div className="text-sm text-muted-foreground">Total Files</div>
          </Card>
          <Card className="p-4 bg-card/50 backdrop-blur-sm border-border">
            <div className="text-2xl font-bold text-success">
              {records.filter(r => r.riskScore < 30).length}
            </div>
            <div className="text-sm text-muted-foreground">Low Risk</div>
          </Card>
          <Card className="p-4 bg-card/50 backdrop-blur-sm border-border">
            <div className="text-2xl font-bold text-warning">
              {records.filter(r => r.riskScore >= 30 && r.riskScore < 70).length}
            </div>
            <div className="text-sm text-muted-foreground">Medium Risk</div>
          </Card>
          <Card className="p-4 bg-card/50 backdrop-blur-sm border-border">
            <div className="text-2xl font-bold text-destructive">
              {records.filter(r => r.riskScore >= 70).length}
            </div>
            <div className="text-sm text-muted-foreground">High Risk</div>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="p-4 mb-6 bg-card/50 backdrop-blur-sm border-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/30"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("all")}
                className="gap-2"
              >
                <Filter className="w-4 h-4" />
                All
              </Button>
              <Button
                variant={filterType === "image" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("image")}
                className="gap-2"
              >
                <ImageIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Images</span>
              </Button>
              <Button
                variant={filterType === "video" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("video")}
                className="gap-2"
              >
                <FileVideo className="w-4 h-4" />
                <span className="hidden sm:inline">Videos</span>
              </Button>
              <Button
                variant={filterType === "audio" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("audio")}
                className="gap-2"
              >
                <Music className="w-4 h-4" />
                <span className="hidden sm:inline">Audio</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Files List */}
        <div className="grid gap-4">
          {filteredRecords.map((record) => (
            <Card
              key={record.id}
              className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* File Info */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {getFileIcon(record.fileType)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 truncate">
                      {record.fileName}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {new Date(record.date).toLocaleString()}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {getRiskBadge(record.riskScore)}
                      <span className="text-sm text-muted-foreground">
                        Score: {record.riskScore}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 lg:w-64">
                  <div className="text-center p-2 rounded bg-muted/30">
                    <div className="text-xs text-muted-foreground mb-1">Precision</div>
                    <div className="text-sm font-bold text-foreground">{record.precision}%</div>
                  </div>
                  <div className="text-center p-2 rounded bg-muted/30">
                    <div className="text-xs text-muted-foreground mb-1">Recall</div>
                    <div className="text-sm font-bold text-foreground">{record.recall}%</div>
                  </div>
                  <div className="text-center p-2 rounded bg-muted/30">
                    <div className="text-xs text-muted-foreground mb-1">F1</div>
                    <div className="text-sm font-bold text-foreground">{record.f1Score}%</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleView(record.id)}
                    className="flex-1 lg:flex-none gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(record.id, record.fileName)}
                    className="flex-1 lg:flex-none text-destructive hover:text-destructive/80 gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <Card className="p-12 bg-card/50 backdrop-blur-sm text-center">
            <p className="text-muted-foreground">No files found matching your criteria</p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default RecentUploads;
