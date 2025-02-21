
import { supabase } from "@/integrations/supabase/client";

export const uploadVideo = async (
  file: File,
  targetPath: string,
  onProgress: (progress: number) => void
) => {
  try {
    // Since Supabase doesn't provide direct upload progress,
    // we'll use XMLHttpRequest to track progress
    const { data: { uploadUrl } } = await supabase.storage
      .from('course_videos')
      .createSignedUploadUrl(targetPath);

    if (!uploadUrl) {
      throw new Error('Failed to get upload URL');
    }

    // Create a promise that resolves when the upload is complete
    const uploadPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentage = (event.loaded / event.total) * 100;
          onProgress(Math.round(percentage));
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          resolve(targetPath);
        } else {
          reject(new Error('Upload failed'));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Upload failed'));
      });

      xhr.open('PUT', uploadUrl);
      xhr.setRequestHeader('Content-Type', file.type);
      xhr.send(file);
    });

    await uploadPromise;
    
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
