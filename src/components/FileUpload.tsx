import { useState } from "react";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file && (file.type === 'application/pdf' || file.type.includes('document'))) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card 
        className={`border-2 border-dashed transition-all duration-200 ${
          isDragOver 
            ? 'border-accent bg-accent/5 shadow-lg' 
            : 'border-border hover:border-accent/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-12 text-center">
          {selectedFile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-accent/10 rounded-full">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="font-medium text-dark-gray">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button 
                onClick={() => {
                  setSelectedFile(null);
                }}
                variant="outline"
                size="sm"
              >
                Choose Different File
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-primary/5 rounded-full">
                <Upload className="w-10 h-10 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-dark-gray">
                  Upload Your Legal Document
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Drag and drop your PDF or DOCX file here, or click to browse files
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button 
                    className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg"
                    size="lg"
                    asChild
                  >
                    <span>Upload PDF/DOCX</span>
                  </Button>
                </label>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <AlertCircle className="w-4 h-4" />
                  <span>Supports PDF and Word documents up to 10MB</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}