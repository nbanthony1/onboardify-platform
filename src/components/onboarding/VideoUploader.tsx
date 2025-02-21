
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import VideoPlayer from './VideoPlayer';
import UploadForm from './UploadForm';
import { uploadVideoChunk, getVideoUrl, deleteVideo } from '@/utils/videoUpload';

interface VideoUploaderProps {
  targetPath: string;
  onUploadComplete?: (url: string) => void;
}

const VideoUploader = ({ targetPath, onUploadComplete }: VideoUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const checkExistingVideo = async () => {
      try {
        const url = await getVideoUrl(targetPath);
        if (url) {
          setVideoUrl(url);
        }
      } catch (error) {
        console.error('Error in checkExistingVideo:', error);
      }
    };

    checkExistingVideo();
  }, [targetPath]);

  const handleDelete = async () => {
    try {
      await deleteVideo(targetPath);
      setVideoUrl(null);
      toast({
        title: "Video Deleted",
        description: "The video has been removed successfully.",
      });
    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: "Delete Failed",
        description: "There was an error deleting the video. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    if (!validVideoTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a video file (MP4, WebM, or OGG).",
        variant: "destructive"
      });
      return;
    }

    const maxSize = 5 * 1024 * 1024 * 1024; // 5GB
    if (file.size > maxSize) {
      toast({
        title: "File Too Large",
        description: "Please upload a video file smaller than 5GB.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    
    toast({
      title: "Starting Upload",
      description: "Please wait while we upload your video...",
    });

    try {
      await uploadVideoChunk(file, 0, file.size, targetPath, (progress) => {
        setUploadProgress(progress);
      });

      const url = await getVideoUrl(targetPath);
      if (url) {
        setVideoUrl(url);
        if (onUploadComplete) {
          onUploadComplete(url);
        }
        toast({
          title: "Upload Successful",
          description: "Your video has been uploaded successfully.",
        });
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: error.message || "There was an error uploading your video. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      if (event.target) {
        event.target.value = '';
      }
    }
  };

  return (
    <div className="space-y-6">
      {videoUrl ? (
        <VideoPlayer videoUrl={videoUrl} onDelete={handleDelete} />
      ) : (
        <UploadForm 
          isUploading={isUploading}
          uploadProgress={uploadProgress}
          onFileChange={handleFileChange}
        />
      )}
    </div>
  );
};

export default VideoUploader;
