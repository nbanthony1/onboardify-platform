
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFPreviewProps {
  fileUrl: string;
  storageKey: string;
  onReset: () => void;
}

const PDFPreview = ({ fileUrl, storageKey, onReset }: PDFPreviewProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
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
          onClick={onReset}
        >
          Upload Another PDF
        </Button>
      </div>
    </div>
  );
};

export default PDFPreview;
