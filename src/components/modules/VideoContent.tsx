
import React from 'react';
import VideoPlayer from "@/components/onboarding/VideoPlayer";

interface VideoContentProps {
  videoUrls: string[];
}

const VideoContent = ({ videoUrls }: VideoContentProps) => {
  return (
    <div className="space-y-6">
      {videoUrls.map((url, index) => (
        <VideoPlayer key={index} videoUrl={url} />
      ))}
    </div>
  );
};

export default VideoContent;
