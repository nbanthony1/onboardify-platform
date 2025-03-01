
import React, { useState, useEffect } from "react";
import { PDFStorageService, UploadResult } from "@/services/PDFStorageService";
import PDFPreview from "./PDFPreview";
import PDFUploadArea from "./PDFUploadArea";
import { toast } from "@/hooks/use-toast";

interface PDFUploaderProps {
  targetPath?: string;
  storageKey?: string;
  onUploadComplete?: (url: string) => void;
}

const PDFUploader = ({ targetPath, storageKey = 'uploadedPdf', onUploadComplete }: PDFUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // Check local storage for previously uploaded PDF using the unique storageKey
  useEffect(() => {
    const savedPdf = PDFStorageService.getFromLocalStorage(storageKey);
    if (savedPdf) {
      try {
        setFileUrl(savedPdf);
      } catch (error) {
        console.error("Error loading saved PDF:", error);
      }
    }
  }, [storageKey]);

  const onFileSelected = async (selectedFile: File) => {
    console.log(`File selected in PDFUploader (${storageKey}):`, selectedFile.name);
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setIsUploading(true);
      
      try {
        // First create a local object URL for immediate preview
        const objectUrl = URL.createObjectURL(selectedFile);
        setFileUrl(objectUrl);
        
        // If we have a targetPath, we should upload to Supabase for permanent storage
        if (targetPath) {
          const result: UploadResult = await PDFStorageService.uploadToSupabase(selectedFile, targetPath);
          
          if (result.success && result.url) {
            // Update fileUrl to the permanent URL
            setFileUrl(result.url);
            
            // Save to local storage as a backup
            PDFStorageService.saveToLocalStorage(storageKey, result.url);
            
            // Notify parent component
            if (onUploadComplete) {
              onUploadComplete(result.url);
            }
            
            toast({
              title: "Upload Successful",
              description: "PDF saved to permanent storage and will be available across sessions.",
            });
            
            setIsUploading(false);
            return;
          }
        }
        
        // Fallback to local storage if Supabase upload fails or isn't available
        PDFStorageService.saveToLocalStorage(storageKey, objectUrl);
        
        // Notify parent component if callback provided
        if (onUploadComplete) {
          onUploadComplete(objectUrl);
        }
      } catch (error) {
        console.error("Error processing file:", error);
        toast({
          title: "Processing Error",
          description: "Failed to process the PDF file.",
          variant: "destructive"
        });
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleFileUploadComplete = (url: string) => {
    console.log(`Upload complete for ${storageKey}, URL:`, url);
    setFileUrl(url);
    
    // Save to local storage for persistence using the unique storageKey
    PDFStorageService.saveToLocalStorage(storageKey, url);
    
    // Notify parent component if callback provided
    if (onUploadComplete) {
      onUploadComplete(url);
    }
  };

  // Simplified direct file input handler
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`File input change detected for ${storageKey}`);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log(`File selected for ${storageKey}:`, selectedFile.name, selectedFile.type);
      if (selectedFile.type === "application/pdf") {
        onFileSelected(selectedFile);
      } else {
        console.log("Invalid file type:", selectedFile.type);
        alert("Please upload a valid PDF file.");
      }
    }
  };

  const handleReset = () => {
    setFile(null);
    setFileUrl(null);
    PDFStorageService.removeFromLocalStorage(storageKey);
    
    // Notify parent component if callback provided
    if (onUploadComplete) {
      onUploadComplete("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!fileUrl ? (
        <PDFUploadArea
          storageKey={storageKey}
          targetPath={targetPath}
          isUploading={isUploading}
          onFileChange={handleFileChange}
          onFileSelected={onFileSelected}
          handleFileUploadComplete={handleFileUploadComplete}
        />
      ) : (
        <PDFPreview 
          fileUrl={fileUrl} 
          storageKey={storageKey}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default PDFUploader;
