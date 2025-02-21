
import { supabase } from "@/integrations/supabase/client";

const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB chunks

export const uploadVideoChunk = async (
  file: File,
  start: number,
  end: number,
  targetPath: string,
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
