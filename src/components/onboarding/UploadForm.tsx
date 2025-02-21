
import React from 'react';
import { Loader2 } from "lucide-react";

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
    <form className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
      <p className="text-sm text-muted-foreground">Upload a video file (MP4, WebM, or OGG)</p>
      <p className="text-xs text-muted-foreground">Maximum file size: 5GB</p>
      <input
        type="file"
        accept="video/mp4,video/webm,video/ogg"
        className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-primary-foreground
          hover:file:opacity-90"
        onChange={onFileChange}
        disabled={isUploading}
      />
      {isUploading && (
        <div className="space-y-2 w-full">
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
    </form>
  );
};

export default UploadForm;
