
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

  // Direct file input handler
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      console.log("Direct file input, file selected:", selectedFile.name);
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile));
      setPageNumber(1);
    } else if (selectedFile) {
      console.log("Invalid file type:", selectedFile.type);
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!fileUrl && (
        <div className="w-full flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg">
          <p className="text-sm text-muted-foreground">Upload a PDF file to continue</p>
          
          {/* Direct file input option */}
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
            id="direct-pdf-upload"
          />
          <label htmlFor="direct-pdf-upload">
            <Button variant="outline" className="cursor-pointer">
              <Upload className="mr-2 h-4 w-4" /> Choose PDF
            </Button>
          </label>
          
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
