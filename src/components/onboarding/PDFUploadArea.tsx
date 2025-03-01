
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import FileUploader from "./FileUploader";

interface PDFUploadAreaProps {
  storageKey: string;
  targetPath?: string;
  isUploading: boolean;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileSelected: (file: File) => void;
  handleFileUploadComplete: (url: string) => void;
}

const PDFUploadArea = ({ 
  storageKey, 
  targetPath, 
  isUploading, 
  onFileChange, 
  onFileSelected,
  handleFileUploadComplete 
}: PDFUploadAreaProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
      <p className="text-sm text-muted-foreground mb-4">Upload a PDF file to continue</p>
      
      {isUploading ? (
        <div className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-2">Uploading PDF for permanent storage...</p>
          <div className="h-2 w-24 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-pulse"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Simple, direct file input button */}
          <div className="flex flex-col items-center gap-4">
            <input
              type="file"
              id={`pdf-file-input-${storageKey}`}
              accept=".pdf,application/pdf"
              onChange={onFileChange}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary/90 cursor-pointer"
            />
            
            <Button 
              variant="outline"
              onClick={() => document.getElementById(`pdf-file-input-${storageKey}`)?.click()}
              className="mt-2"
            >
              <Upload className="mr-2 h-4 w-4" /> Choose PDF File
            </Button>
          </div>
          
          {/* Optional FileUploader for Supabase integration */}
          {targetPath && (
            <div className="mt-4">
              <FileUploader 
                targetPath={targetPath}
                onUploadComplete={handleFileUploadComplete}
                onFileSelected={onFileSelected}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PDFUploadArea;
