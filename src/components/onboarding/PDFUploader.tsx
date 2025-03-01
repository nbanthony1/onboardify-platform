
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import FileUploader from "./FileUploader";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile));
      setPageNumber(1);
    }
  };

  const onUploadComplete = (url: string) => {
    setFileUrl(url);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!fileUrl && (
        <FileUploader 
          targetPath={targetPath || ""}
          onUploadComplete={targetPath ? onUploadComplete : undefined}
          onFileSelected={!targetPath ? onFileSelected : undefined}
        />
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
          
          {file && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
