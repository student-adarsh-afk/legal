import { FileText, Loader2 } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

interface LoadingStateProps {
  fileName: string;
  progress: number;
}

export function LoadingState({ fileName, progress }: LoadingStateProps) {
  const steps = [
    "Uploading document...",
    "Analyzing content...", 
    "Extracting key information...",
    "Identifying important dates...",
    "Checking for potential issues...",
    "Generating summary..."
  ];

  const currentStep = Math.floor((progress / 100) * steps.length);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        <div className="text-center space-y-6">
          {/* Animated Icon */}
          <div className="relative">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-primary/5 rounded-full">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-accent animate-spin" />
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">
              Analyzing Your Document
            </h3>
            <p className="text-muted-foreground">
              Processing: {fileName}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <Progress value={progress} className="w-full h-2" />
            <p className="text-sm text-muted-foreground">
              {progress}% complete
            </p>
          </div>

          {/* Current Step */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-dark-gray">
              {steps[currentStep] || "Processing..."}
            </p>
            <div className="flex justify-center space-x-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentStep 
                      ? 'bg-accent' 
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Estimated Time */}
          <p className="text-xs text-muted-foreground">
            This usually takes 30-60 seconds
          </p>
        </div>
      </Card>
    </div>
  );
}