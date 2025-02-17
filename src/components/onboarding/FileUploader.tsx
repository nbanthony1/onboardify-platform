
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
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF file.",
        variant: "destructive"
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', targetPath);

    try {
      const { data, error } = await supabase.functions.invoke('upload-pdf', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Upload Successful",
        description: "The PDF has been uploaded successfully.",
      });

      if (onUploadComplete) {
        const { data: urlData } = await supabase.storage
          .from('course_materials')
          .getPublicUrl(targetPath);
        
        if (urlData?.publicUrl) {
          onUploadComplete(urlData.publicUrl);
        }
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive"
      });
    }
  }, [targetPath, onUploadComplete]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
      <p className="text-sm text-muted-foreground">Upload a PDF file to continue</p>
      <Button
        variant="outline"
        className="relative"
        onClick={() => document.getElementById('file-upload')?.click()}
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
