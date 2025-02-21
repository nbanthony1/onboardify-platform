
import React, { useCallback, useState } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface VideoUploaderProps {
  targetPath: string;
  onUploadComplete?: (url: string) => void;
}

const VideoUploader = ({ targetPath, onUploadComplete }: VideoUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);

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
      
      if (urlData?.publicUrl && onUploadComplete) {
        console.log('Got public URL:', urlData.publicUrl);
        onUploadComplete(urlData.publicUrl);
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
  );
};

export default VideoUploader;
