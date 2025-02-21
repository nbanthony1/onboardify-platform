
import React, { useCallback, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2, Trash2 } from "lucide-react";

interface VideoUploaderProps {
  targetPath: string;
  onUploadComplete?: (url: string) => void;
}

const VideoUploader = ({ targetPath, onUploadComplete }: VideoUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Check if video exists on component mount
  useEffect(() => {
    const checkExistingVideo = async () => {
      try {
        const { data } = await supabase.storage
          .from('course_videos')
          .getPublicUrl(targetPath);

        if (data?.publicUrl) {
          // Verify the file exists by making a HEAD request
          const response = await fetch(data.publicUrl, { method: 'HEAD' });
          if (response.ok) {
            setVideoUrl(data.publicUrl);
          }
        }
      } catch (error) {
        console.error('Error checking existing video:', error);
      }
    };

    checkExistingVideo();
  }, [targetPath]);

  const handleDelete = async () => {
    try {
      const { error } = await supabase.storage
        .from('course_videos')
        .remove([targetPath]);

      if (error) throw error;

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

  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
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

    // Max file size: 100MB
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "File Too Large",
        description: "Please upload a video file smaller than 100MB.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    toast({
      title: "Uploading...",
      description: "Please wait while we upload your video.",
    });

    try {
      console.log('Starting upload to path:', targetPath);
      const { data, error } = await supabase.storage
        .from('course_videos')
        .upload(targetPath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      console.log('Upload successful:', data);

      const { data: urlData } = await supabase.storage
        .from('course_videos')
        .getPublicUrl(targetPath);
      
      if (urlData?.publicUrl) {
        console.log('Got public URL:', urlData.publicUrl);
        setVideoUrl(urlData.publicUrl);
        if (onUploadComplete) {
          onUploadComplete(urlData.publicUrl);
        }
      }

      toast({
        title: "Upload Successful",
        description: "Your video has been uploaded successfully.",
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your video. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
      // Clear the input
      event.target.value = '';
    }
  }, [targetPath, onUploadComplete]);

  return (
    <div className="space-y-6">
      {videoUrl ? (
        <div className="space-y-4">
          <video 
            controls 
            className="w-full rounded-lg shadow-lg"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
          <div className="flex justify-end">
            <Button
              variant="destructive"
              size="sm"
              onClick={handleDelete}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Video
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
          <p className="text-sm text-muted-foreground">Upload a video file (MP4, WebM, or OGG)</p>
          <p className="text-xs text-muted-foreground">Maximum file size: 100MB</p>
          <Button
            variant="outline"
            className="relative"
            disabled={isUploading}
            onClick={() => document.getElementById('video-upload')?.click()}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              'Choose Video'
            )}
            <input
              id="video-upload"
              type="file"
              accept="video/mp4,video/webm,video/ogg"
              className="hidden"
              onChange={handleFileChange}
              disabled={isUploading}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
