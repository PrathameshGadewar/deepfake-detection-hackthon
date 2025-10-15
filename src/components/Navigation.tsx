import { Link, useLocation } from "react-router-dom";
import { Shield, Upload, History, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Upload", icon: Upload },
    { path: "/recent", label: "Recent Uploads", icon: History },
    { path: "/analyze", label: "Overall Analyze", icon: BarChart3 },
  ];

  return (
    <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="pulse-glow">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">DeepFake Detector</h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                AI-Powered Media Analysis
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`gap-2 ${isActive ? 'shadow-neon' : ''}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:inline">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
