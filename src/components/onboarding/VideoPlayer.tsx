
import React from 'react';
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  onDelete: () => void;
}

const VideoPlayer = ({ videoUrl, onDelete }: VideoPlayerProps) => {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <video 
          controls 
          className="absolute inset-0 w-full h-full"
          src={videoUrl}
          key={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-end">
        <Button
          variant="destructive"
          size="sm"
          onClick={onDelete}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Video
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
