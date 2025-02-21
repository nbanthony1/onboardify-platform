
import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoUploaderProps {
  targetPath: string;
  onUploadComplete?: (url: string) => void;
}

const VideoUploader = ({ targetPath, onUploadComplete }: VideoUploaderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // Replace YOUR_VIDEO_ID with your actual Google Drive video ID
  const videoUrl = "https://drive.google.com/file/d/1NI_6pqBrLkNS1JKhj69zwcCzNPVNRNmQ/view";

  return (
    <div className="space-y-6">
      <Button 
        onClick={() => setIsOpen(true)}
        className="w-full h-40 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50"
      >
        <Play className="h-12 w-12" />
        <span>Play Team Video</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <VideoPlayer videoUrl={videoUrl} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoUploader;
