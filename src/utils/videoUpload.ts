
import { supabase } from "@/integrations/supabase/client";

export const uploadVideo = async (
  file: File,
  targetPath: string,
  onProgress: (progress: number) => void
) => {
  try {
    // Upload the file with progress tracking
    const { error, data } = await supabase.storage
      .from('course_videos')
      .upload(targetPath, file, {
        cacheControl: '3600',
        upsert: true,
        onUploadProgress: (progress) => {
          // Calculate percentage
          const percentage = (progress.loaded / progress.total) * 100;
          onProgress(Math.round(percentage));
        }
      });

    if (error) throw error;
    
    return targetPath;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};

export const getVideoUrl = async (targetPath: string) => {
  const { data } = await supabase.storage
    .from('course_videos')
    .getPublicUrl(targetPath);
  
  return data?.publicUrl;
};

export const deleteVideo = async (targetPath: string) => {
  const { error } = await supabase.storage
    .from('course_videos')
    .remove([targetPath]);

  if (error) throw error;
};
