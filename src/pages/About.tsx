import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Shield, Zap, Lock, Target, Brain, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms detect even the most sophisticated deepfakes"
    },
    {
      icon: Target,
      title: "High Precision",
      description: "94%+ accuracy in detecting manipulated media across images, videos, and audio"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Fast analysis with results delivered in seconds, not minutes"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your uploaded media is encrypted and automatically deleted after analysis"
    },
    {
      icon: Shield,
      title: "Multi-layered Detection",
      description: "Combines frame analysis, audio spectrograms, and metadata verification"
    },
    {
      icon: Globe,
      title: "Context Restoration",
      description: "Cross-references with verified sources and fact-checking databases"
    }
  ];

  const stats = [
    { value: "1M+", label: "Analyses Completed" },
    { value: "94%", label: "Detection Accuracy" },
    { value: "< 2s", label: "Average Processing Time" },
    { value: "99.9%", label: "Uptime Reliability" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="pulse-glow inline-block mb-6">
            <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            DeepFake Detection System
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Protecting truth in the digital age through advanced AI-powered media authentication
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Advanced Detection Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            How It Works
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Upload Media</h3>
                <p className="text-sm text-muted-foreground">
                  Upload any image, video, or audio file for analysis. Files are securely encrypted during processing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI examines frame-by-frame manipulations, audio anomalies, and metadata inconsistencies.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Context Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Cross-references with trusted sources and fact-checking databases for additional context.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Results & Review</h3>
                <p className="text-sm text-muted-foreground">
                  Receive detailed analysis with risk scores, visualizations, and human review options.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Technology */}
        <Card className="p-8 md:p-12 bg-gradient-card backdrop-blur-sm border-primary/30">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Cutting-Edge Technology
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            Built on state-of-the-art deep learning models trained on millions of authentic and manipulated media samples.
            Our system continuously evolves to detect new deepfake techniques as they emerge.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Neural Networks', 'Computer Vision', 'Audio Analysis', 'Metadata Forensics', 'Pattern Recognition'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default About;
