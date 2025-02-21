
import React from 'react';
import VideoPlayer from './VideoPlayer';

interface VideoUploaderProps {
  targetPath: string;
  onUploadComplete?: (url: string) => void;
}

const VideoUploader = ({ targetPath, onUploadComplete }: VideoUploaderProps) => {
  // Since we've removed upload functionality, we'll just show a static example video
  // You can replace this with your Google Drive video URL
  const videoUrl = "https://drive.google.com/file/YOUR_VIDEO_ID/view";

  return (
    <div className="space-y-6">
      {videoUrl && (
        <div className="space-y-4">
          <VideoPlayer videoUrl={videoUrl} />
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
