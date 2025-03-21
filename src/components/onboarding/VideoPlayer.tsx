
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  // Check if the URL is from various video platforms
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const isVimeo = videoUrl.includes('vimeo.com');
  const isGoogleDrive = videoUrl.includes('drive.google.com');

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

  const getGoogleDriveEmbedUrl = (url: string) => {
    // Extract file ID from Google Drive URL
    const fileId = url.match(/[-\w]{25,}/);
    if (!fileId) return url;
    return `https://drive.google.com/file/d/${fileId[0]}/preview`;
  };

  return (
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
      ) : isGoogleDrive ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={getGoogleDriveEmbedUrl(videoUrl)}
          allow="autoplay"
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
  );
};

export default VideoPlayer;
