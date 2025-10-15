import { Upload, FileVideo, FileAudio, Image, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface MediaUploadProps {
  onFileSelect?: (file: File) => void;
}

export const MediaUpload = ({ onFileSelect }: MediaUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = (file: File) => {
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      toast.error("File too large", { description: "Maximum file size is 100MB" });
      return;
    }
    
    setSelectedFile(file);
    onFileSelect?.(file);
    toast.success("File uploaded", { description: "Starting analysis..." });
    
    // Simulate analysis
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success("Analysis complete!");
    }, 2000);
  };

  const clearFile = () => {
    setSelectedFile(null);
    setIsAnalyzing(false);
  };

  const getFileIcon = () => {
    if (!selectedFile) return <Upload className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
    
    const type = selectedFile.type;
    if (type.startsWith('image/')) return <Image className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
    if (type.startsWith('video/')) return <FileVideo className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
    if (type.startsWith('audio/')) return <FileAudio className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
    return <Upload className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
  };

  return (
    <Card 
      className={`relative overflow-hidden border-2 transition-all duration-300 bg-card/50 backdrop-blur-sm ${
        isDragging ? 'border-primary shadow-neon-strong' : 'border-border hover:border-primary/50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-4 md:p-8">
        <input
          type="file"
          id="media-upload"
          className="hidden"
          accept="image/*,video/*,audio/*"
          onChange={handleFileSelect}
        />
        <label
          htmlFor="media-upload"
          className="flex flex-col items-center justify-center cursor-pointer space-y-3 md:space-y-4"
        >
          <div className={`rounded-full p-4 md:p-6 bg-primary/10 ${isAnalyzing ? 'rotate-slow' : 'pulse-glow'}`}>
            {getFileIcon()}
          </div>
          
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              {isAnalyzing ? 'Analyzing...' : selectedFile ? selectedFile.name : 'Upload Media for Analysis'}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              {isAnalyzing ? 'Please wait while we analyze your media' : 'Drag & drop or click to select image, video, or audio'}
            </p>
          </div>

          {selectedFile && !isAnalyzing && (
            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted-foreground">
              <span>Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => { e.preventDefault(); clearFile(); }}
                className="text-destructive hover:text-destructive/80"
              >
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
          )}
        </label>
      </div>
      
      {isDragging && (
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-2xl font-bold text-primary">Drop here to analyze</div>
        </div>
      )}
    </Card>
  );
};
