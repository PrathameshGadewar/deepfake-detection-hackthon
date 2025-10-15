import { Navigation } from "@/components/Navigation";
import { MediaUpload } from "@/components/MediaUpload";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { useState } from "react";

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const quickStats = [
    { label: "Files Analyzed Today", value: "12", icon: CheckCircle2, color: "text-success" },
    { label: "In Progress", value: isAnalyzing ? "1" : "0", icon: Clock, color: "text-warning" },
    { label: "Failed", value: "0", icon: XCircle, color: "text-destructive" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Upload Media</h1>
            <p className="text-muted-foreground">Upload images, videos, or audio files for deepfake detection</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {quickStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="p-4 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Upload Area */}
          <MediaUpload onFileSelect={handleFileSelect} />

          {/* File Info */}
          {uploadedFile && (
            <Card className="mt-6 p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Current Upload</h3>
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">File Name</p>
                    <p className="font-semibold text-foreground">{uploadedFile.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Size</p>
                    <p className="font-semibold text-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-semibold text-foreground">{uploadedFile.type}</p>
                  </div>
                  <div>
                    {isAnalyzing ? (
                      <Badge className="bg-warning">Analyzing...</Badge>
                    ) : (
                      <Badge className="bg-success">Complete</Badge>
                    )}
                  </div>
                </div>

                {!isAnalyzing && (
                  <div className="pt-4 border-t border-border">
                    <Button className="w-full md:w-auto shadow-neon">
                      View Full Analysis
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Upload Guidelines */}
          <Card className="mt-6 p-6 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Upload Guidelines</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Supported Formats</p>
                  <p className="text-muted-foreground">Images: JPG, PNG, WEBP | Videos: MP4, MOV, AVI | Audio: MP3, WAV, M4A</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">File Size Limit</p>
                  <p className="text-muted-foreground">Maximum 100MB per file for optimal processing speed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Privacy & Security</p>
                  <p className="text-muted-foreground">All files are encrypted during analysis and automatically deleted after 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Processing Time</p>
                  <p className="text-muted-foreground">Most files are analyzed within 2-5 seconds depending on size and complexity</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Upload;
