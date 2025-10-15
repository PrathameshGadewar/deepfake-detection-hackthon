import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const HumanReview = () => {
  const [feedback, setFeedback] = useState("");

  const handleAccept = () => {
    toast.success("Analysis accepted and logged", {
      description: "The detection results have been confirmed.",
    });
  };

  const handleReject = () => {
    toast.error("Analysis rejected", {
      description: "Feedback has been submitted for review.",
    });
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <h2 className="text-2xl font-bold text-foreground mb-6">Human Review</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Reviewer Feedback
          </label>
          <Textarea
            placeholder="Add your comments or observations about the analysis..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-32 bg-muted/30 border-border focus:border-primary transition-colors"
          />
        </div>

        <div className="flex gap-4">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-success hover:bg-success/80 text-background gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Accept Analysis
          </Button>
          <Button
            onClick={handleReject}
            variant="destructive"
            className="flex-1 gap-2"
          >
            <XCircle className="w-5 h-5" />
            Reject Analysis
          </Button>
        </div>

        <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
          <div className="text-sm text-foreground">
            <strong>Review Status:</strong> Awaiting human verification
          </div>
        </div>
      </div>
    </Card>
  );
};
