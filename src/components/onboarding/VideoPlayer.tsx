
import React from 'react';
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  onDelete: () => void;
}

const VideoPlayer = ({ videoUrl, onDelete }: VideoPlayerProps) => {
  // Check if the URL is from YouTube
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const isVimeo = videoUrl.includes('vimeo.com');

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]
      : url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.split('vimeo.com/')[1];
    return `https://player.vimeo.com/video/${videoId}`;
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        {isYouTube ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={getYouTubeEmbedUrl(videoUrl)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : isVimeo ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={getVimeoEmbedUrl(videoUrl)}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video 
            controls 
            className="absolute inset-0 w-full h-full"
            src={videoUrl}
            key={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        )}
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
