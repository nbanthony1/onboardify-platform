
import React from 'react';
import { Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadFormProps {
  isUploading: boolean;
  uploadProgress: number;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadForm = ({ isUploading, uploadProgress, onFileChange }: UploadFormProps) => {
  // Calculate estimated time remaining based on progress
  const getTimeRemaining = (progress: number) => {
    if (progress === 0) return 'Calculating...';
    if (progress === 100) return 'Complete';
    
    // Using a rough estimate of 1MB/s upload speed
    const remainingPercentage = 100 - progress;
    const estimatedSeconds = Math.ceil(remainingPercentage * 0.5); // Rough estimation
    
    if (estimatedSeconds < 60) {
      return `About ${estimatedSeconds} seconds remaining`;
    } else {
      const minutes = Math.floor(estimatedSeconds / 60);
      const seconds = estimatedSeconds % 60;
      return `About ${minutes}m ${seconds}s remaining`;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg bg-white">
      <p className="text-sm text-muted-foreground">Upload a video file (MP4, WebM, or OGG)</p>
      <p className="text-xs text-muted-foreground">Maximum file size: 5GB</p>
      
      <div className="w-full max-w-sm">
        <Button 
          variant="outline" 
          className="w-full"
          disabled={isUploading}
          onClick={() => document.getElementById('video-upload')?.click()}
          size="lg"
        >
          <Upload className="mr-2" />
          Choose Video File
        </Button>
        <input
          id="video-upload"
          type="file"
          accept="video/mp4,video/webm,video/ogg"
          className="hidden"
          onChange={onFileChange}
          disabled={isUploading}
        />
      </div>

      {isUploading && (
        <div className="space-y-2 w-full max-w-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Uploading... {Math.round(uploadProgress)}%
            </div>
            <p className="text-xs text-muted-foreground">
              {getTimeRemaining(uploadProgress)}
            </p>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
