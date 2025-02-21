
import { supabase } from "@/integrations/supabase/client";

export const uploadVideo = async (
  file: File,
  targetPath: string,
  onProgress: (progress: number) => void
) => {
  try {
    // Upload the entire file at once
    const { error, data } = await supabase.storage
      .from('course_videos')
      .upload(targetPath, file, {
        cacheControl: '3600',
        upsert: true,
        duplex: 'half'
      });

    if (error) throw error;
    
    // Set progress to 100% when complete
    onProgress(100);
    
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
