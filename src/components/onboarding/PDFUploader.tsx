
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import FileUploader from "./FileUploader";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFUploaderProps {
  targetPath?: string;
}

const PDFUploader = ({ targetPath }: PDFUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onFileSelected = (selectedFile: File) => {
    console.log("File selected in PDFUploader:", selectedFile.name);
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile));
      setPageNumber(1);
    }
  };

  const onUploadComplete = (url: string) => {
    console.log("Upload complete, URL:", url);
    setFileUrl(url);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  // Simplified direct file input handler
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File input change detected");
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log("File selected:", selectedFile.name, selectedFile.type);
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
              id="pdf-file-input"
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
              onClick={() => document.getElementById('pdf-file-input')?.click()}
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
                onUploadComplete={onUploadComplete}
                onFileSelected={onFileSelected}
              />
            </div>
          )}
        </div>
      )}

      {fileUrl && (
        <div className="w-full border p-4 rounded-lg shadow-lg">
          <Document 
            file={fileUrl} 
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-center p-4">Loading PDF...</div>}
            error={<div className="text-center p-4 text-red-500">Failed to load PDF. Please try again.</div>}
          >
            <Page 
              pageNumber={pageNumber} 
              width={window.innerWidth > 768 ? 600 : window.innerWidth - 80}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            <p className="text-sm text-muted-foreground">
              Page {pageNumber} of {numPages || '?'}
            </p>
            <Button
              variant="outline"
              disabled={!numPages || pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => {
                setFile(null);
                setFileUrl(null);
                setNumPages(null);
                setPageNumber(1);
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
