
import React, { useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface FileUploaderProps {
  targetPath: string;
  onUploadComplete?: (url: string) => void;
}

const FileUploader = ({ targetPath, onUploadComplete }: FileUploaderProps) => {
  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); // Prevent form submission
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File Type",
        description: "Please upload an image file.",
        variant: "destructive"
      });
      return;
    }

    // Show loading toast
    toast({
      title: "Uploading...",
      description: "Please wait while we upload your image.",
    });

    try {
      // Clean up the target path and ensure correct folder structure
      const cleanPath = targetPath.split('\n')[0].trim();
      console.log('Uploading file to path:', cleanPath);
      
      // Create an empty file in the folder structure to ensure it exists
      const folderPath = cleanPath.split('/').slice(0, -1).join('/');
      if (folderPath) {
        await supabase.storage
          .from('course_materials')
          .upload(`${folderPath}/.folder`, new Blob([''], { type: 'text/plain' }), {
            upsert: true
          });
      }
      
      // Now upload the actual file
      const { data, error } = await supabase.storage
        .from('course_materials')
        .upload(cleanPath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      console.log('Upload successful:', data);

      // Get the public URL immediately after successful upload
      const { data: urlData } = await supabase.storage
        .from('course_materials')
        .getPublicUrl(cleanPath);
      
      if (urlData?.publicUrl && onUploadComplete) {
        console.log('Got public URL:', urlData.publicUrl);
        onUploadComplete(urlData.publicUrl);
      }

      toast({
        title: "Upload Successful",
        description: "The image has been uploaded successfully.",
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive"
      });
    }

    // Clear the input value to allow uploading the same file again
    event.target.value = '';
  }, [targetPath, onUploadComplete]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any form submission
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
      <p className="text-sm text-muted-foreground">Upload an image to continue</p>
      <Button
        variant="outline"
        className="relative"
        onClick={handleClick}
      >
        Choose File
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </Button>
    </div>
  );
};

export default FileUploader;
