import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import FileUploader from "./FileUploader";
import { Upload } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFUploaderProps {
  targetPath?: string;
  storageKey?: string;
  onUploadComplete?: (url: string) => void;
}

const PDFUploader = ({ targetPath, storageKey = 'uploadedPdf', onUploadComplete }: PDFUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  
  // Check local storage for previously uploaded PDF using the unique storageKey
  useEffect(() => {
    const savedPdf = localStorage.getItem(storageKey);
    if (savedPdf) {
      try {
        setFileUrl(savedPdf);
      } catch (error) {
        console.error("Error loading saved PDF:", error);
      }
    }
  }, [storageKey]);

  const onFileSelected = (selectedFile: File) => {
    console.log(`File selected in PDFUploader (${storageKey}):`, selectedFile.name);
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setFileUrl(objectUrl);
      
      // Save to local storage for persistence using the unique storageKey
      localStorage.setItem(storageKey, objectUrl);
      
      // Notify parent component if callback provided
      if (onUploadComplete) {
        onUploadComplete(objectUrl);
      }
    }
  };

  const handleFileUploadComplete = (url: string) => {
    console.log(`Upload complete for ${storageKey}, URL:`, url);
    setFileUrl(url);
    
    // Save to local storage for persistence using the unique storageKey
    localStorage.setItem(storageKey, url);
    
    // Notify parent component if callback provided
    if (onUploadComplete) {
      onUploadComplete(url);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
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

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!fileUrl && (
        <div className="w-full flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
          <p className="text-sm text-muted-foreground mb-4">Upload a PDF file to continue</p>
          
          {/* Simple, direct file input button */}
          <div className="flex flex-col items-center gap-4">
            <input
              type="file"
              id={`pdf-file-input-${storageKey}`}
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
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
        </div>
      )}

      {fileUrl && (
        <div className="w-full border p-4 rounded-lg shadow-lg">
          <ScrollArea className="h-[70vh] w-full">
            <Document 
              file={fileUrl} 
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="text-center p-4">Loading PDF...</div>}
              error={<div className="text-center p-4 text-red-500">Failed to load PDF. Please try again.</div>}
            >
              {Array.from(new Array(numPages), (_, index) => (
                <Page 
                  key={`page_${index + 1}`}
                  pageNumber={index + 1} 
                  width={window.innerWidth > 768 ? 600 : window.innerWidth - 80}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="mb-4"
                />
              ))}
            </Document>
          </ScrollArea>
          
          <div className="mt-4 flex justify-between">
            <p className="text-sm text-muted-foreground">
              {numPages} page{numPages !== 1 ? 's' : ''}
            </p>
            
            <Button 
              variant="outline" 
              onClick={() => {
                setFile(null);
                setFileUrl(null);
                setNumPages(null);
                localStorage.removeItem(storageKey);
                
                // Notify parent component if callback provided
                if (onUploadComplete) {
                  onUploadComplete("");
                }
              }}
            >
              Upload Another PDF
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
