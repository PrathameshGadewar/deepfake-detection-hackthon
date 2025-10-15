import { MediaUpload } from "@/components/MediaUpload";
import { DetectionResults } from "@/components/DetectionResults";
import { HeatmapVisualization } from "@/components/HeatmapVisualization";
import { SpectrogramVisualization } from "@/components/SpectrogramVisualization";
import { MetadataVerification } from "@/components/MetadataVerification";
import { ContextRestoration } from "@/components/ContextRestoration";
import { RiskGauge } from "@/components/RiskGauge";
import { HumanReview } from "@/components/HumanReview";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="space-y-6 md:space-y-8">
          {/* Upload Section */}
          <MediaUpload />

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Left Column - Analysis Results */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <DetectionResults />
              <HeatmapVisualization />
              <SpectrogramVisualization />
            </div>

            {/* Right Column - Metadata & Risk */}
            <div className="space-y-4 md:space-y-6">
              <RiskGauge />
              <MetadataVerification />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <ContextRestoration />
            <HumanReview />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8 md:mt-12 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 md:py-6 text-center text-xs md:text-sm text-muted-foreground">
          <p>DeepFake Detection System v1.0 | Powered by Advanced AI Analysis</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
