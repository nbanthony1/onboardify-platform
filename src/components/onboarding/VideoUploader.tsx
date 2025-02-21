
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
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkExistingVideo = async () => {
      try {
        console.log('Checking for existing video at path:', targetPath);
        
        const { data: fileData, error: fileError } = await supabase.storage
          .from('course_videos')
          .list('', {
            limit: 1,
            search: targetPath
          });

        if (fileError) {
          console.error('Error checking file existence:', fileError);
          return;
        }

        console.log('File check response:', fileData);

        if (fileData && fileData.length > 0) {
          const { data } = await supabase.storage
            .from('course_videos')
            .getPublicUrl(targetPath);

          if (data?.publicUrl) {
            console.log('Found existing video URL:', data.publicUrl);
            setVideoUrl(data.publicUrl);
          }
        }
      } catch (error) {
        console.error('Error in checkExistingVideo:', error);
      }
    };

    checkExistingVideo();
  }, [targetPath]);

  const handleDelete = async () => {
    try {
      const { error } = await supabase.storage
        .from('course_videos')
        .remove([targetPath]);

      if (error) {
        throw error;
      }

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
    
    console.log('File selected:', file);
    
    if (!file) {
      console.log('No file selected');
      return;
    }

    console.log('File type:', file.type);
    console.log('File size:', file.size);

    const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    if (!validVideoTypes.includes(file.type)) {
      console.log('Invalid file type');
      toast({
        title: "Invalid File Type",
        description: "Please upload a video file (MP4, WebM, or OGG).",
        variant: "destructive"
      });
      return;
    }

    const maxSize = 500 * 1024 * 1024; // 500MB
    if (file.size > maxSize) {
      console.log('File too large');
      toast({
        title: "File Too Large",
        description: "Please upload a video file smaller than 500MB.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    console.log('Starting upload process');
    
    toast({
      title: "Starting Upload",
      description: "Please wait while we upload your video...",
    });

    try {
      console.log('Uploading to path:', targetPath);
      
      const { data, error } = await supabase.storage
        .from('course_videos')
        .upload(targetPath, file, {
          cacheControl: '3600',
          upsert: true
        });

      console.log('Upload response:', { data, error });

      if (error) {
        throw error;
      }

      // Get the public URL
      const { data: urlData } = await supabase.storage
        .from('course_videos')
        .getPublicUrl(targetPath);
      
      console.log('Public URL data:', urlData);

      if (urlData?.publicUrl) {
        setVideoUrl(urlData.publicUrl);
        if (onUploadComplete) {
          onUploadComplete(urlData.publicUrl);
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
      if (event.target) {
        event.target.value = '';
      }
    }
  };

  return (
    <div className="space-y-6">
      {videoUrl ? (
        <div className="space-y-4">
          <video 
            controls 
            className="w-full rounded-lg shadow-lg aspect-video bg-black"
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
        <form className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
          <p className="text-sm text-muted-foreground">Upload a video file (MP4, WebM, or OGG)</p>
          <p className="text-xs text-muted-foreground">Maximum file size: 500MB</p>
          <input
            type="file"
            accept="video/mp4,video/webm,video/ogg"
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-primary file:text-primary-foreground
              hover:file:opacity-90"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          {isUploading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Uploading...
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default VideoUploader;
