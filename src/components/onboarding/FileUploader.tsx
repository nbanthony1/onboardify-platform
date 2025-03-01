
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
    // Prevent any form submission
    event.preventDefault();
    event.stopPropagation();
    
    const file = event.target.files?.[0];
    if (!file) return;

    // Log file information to help debug
    console.log('File selected:', file.name, file.type, file.size);

    if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
      toast({
        title: "Invalid File Type",
        description: "Please upload an image or PDF file.",
        variant: "destructive"
      });
      return;
    }

    // Show loading toast
    toast({
      title: "Uploading...",
      description: "Please wait while we upload your file.",
    });

    try {
      // Clean up the target path
      const cleanPath = targetPath.split('\n')[0].trim();
      console.log('Uploading file to path:', cleanPath);

      // Create folder structure if it doesn't exist
      const pathParts = cleanPath.split('/');
      pathParts.pop(); // Remove the filename
      const folderPath = pathParts.join('/');
      
      // Explicitly check if the bucket exists first
      const { data: bucketData, error: bucketError } = await supabase
        .storage
        .listBuckets();
      
      console.log('Available buckets:', bucketData);
      
      if (bucketError) {
        console.error('Error checking buckets:', bucketError);
        throw bucketError;
      }
      
      // First, make sure the folder exists
      if (folderPath) {
        console.log('Ensuring folder path exists:', folderPath);
        try {
          // List files in the path to ensure it exists
          const { data: folderData, error: folderError } = await supabase.storage
            .from('course_materials')
            .list(folderPath);
            
          console.log('Folder check result:', folderData, folderError);
          
          if (folderError && folderError.message !== 'The resource was not found') {
            console.error('Error checking folder:', folderError);
          }
        } catch (error) {
          console.log('Folder might not exist, creating it automatically:', error);
        }
      }

      console.log('Proceeding with upload to path:', cleanPath);
      
      // Upload the file with explicit content type
      const { data, error } = await supabase.storage
        .from('course_materials')
        .upload(cleanPath, file, {
          cacheControl: '3600',
          upsert: true,
          contentType: file.type // Explicitly set the content type
        });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      console.log('Upload successful:', data);

      // Get the public URL
      const { data: urlData } = await supabase.storage
        .from('course_materials')
        .getPublicUrl(cleanPath);

      if (urlData?.publicUrl && onUploadComplete) {
        console.log('Got public URL:', urlData.publicUrl);
        onUploadComplete(urlData.publicUrl);
      }

      toast({
        title: "Upload Successful",
        description: "Your file has been uploaded successfully.",
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive"
      });
    }

    // Clear the input
    event.target.value = '';
  }, [targetPath, onUploadComplete]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg" onClick={e => e.preventDefault()}>
      <p className="text-sm text-muted-foreground">Upload a PDF file to continue</p>
      <Button
        variant="outline"
        className="relative"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          const input = document.getElementById('file-upload') as HTMLInputElement;
          input?.click();
        }}
      >
        Choose File
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </Button>
    </div>
  );
};

export default FileUploader;
