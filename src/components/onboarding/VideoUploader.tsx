
import React, { useCallback, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2, Trash2 } from "lucide-react";

interface VideoUploaderProps {
  targetPath: string;
  onUploadComplete?: (url: string) => void;
}

const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB chunks

const VideoUploader = ({ targetPath, onUploadComplete }: VideoUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

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

  const uploadChunk = async (
    file: File,
    start: number,
    end: number,
    onProgress: (progress: number) => void
  ) => {
    const chunk = file.slice(start, end);
    const chunkName = `${targetPath}_chunk_${start}`;

    try {
      const { error } = await supabase.storage
        .from('course_videos')
        .upload(chunkName, chunk, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;
      
      const progress = Math.min((end / file.size) * 100, 100);
      onProgress(progress);
      
      return chunkName;
    } catch (error) {
      console.error('Chunk upload error:', error);
      throw error;
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
      const chunks = Math.ceil(file.size / CHUNK_SIZE);
      const chunkNames: string[] = [];

      // Upload chunks
      for (let i = 0; i < chunks; i++) {
        const start = i * CHUNK_SIZE;
        const end = Math.min(start + CHUNK_SIZE, file.size);
        
        const chunkName = await uploadChunk(file, start, end, (progress) => {
          setUploadProgress(progress);
        });
        
        chunkNames.push(chunkName);
      }

      // Combine chunks (you might need to implement a server-side function for this)
      console.log('All chunks uploaded:', chunkNames);

      // Get the final URL
      const { data } = await supabase.storage
        .from('course_videos')
        .getPublicUrl(targetPath);

      if (data?.publicUrl) {
        console.log('Setting video URL:', data.publicUrl);
        setVideoUrl(data.publicUrl);
        if (onUploadComplete) {
          onUploadComplete(data.publicUrl);
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
          <p className="text-xs text-muted-foreground">Maximum file size: 5GB</p>
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
            <div className="space-y-2 w-full">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading... {Math.round(uploadProgress)}%
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default VideoUploader;
