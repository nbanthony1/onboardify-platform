
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFPreviewProps {
  fileUrl: string;
  storageKey: string;
  onReset: () => void;
}

const PDFPreview = ({ fileUrl, storageKey, onReset }: PDFPreviewProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loadError, setLoadError] = useState<boolean>(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoadError(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("PDF loading error:", error);
    setLoadError(true);
    
    // Check if it's a blob URL that might have expired
    if (fileUrl.startsWith('blob:')) {
      toast({
        title: "PDF Loading Error",
        description: "The PDF reference has expired. Please upload the file again.",
        variant: "destructive"
      });
    }
  };

  // Check if the URL is still valid on component mount
  useEffect(() => {
    const checkUrl = async () => {
      // For blob URLs, check if they're still valid
      if (fileUrl.startsWith('blob:')) {
        try {
          const response = await fetch(fileUrl, { method: 'HEAD' });
          if (!response.ok) {
            setLoadError(true);
          }
        } catch (error) {
          console.error("Error checking URL:", error);
          setLoadError(true);
        }
      }
    };
    
    checkUrl();
  }, [fileUrl]);

  return (
    <div className="w-full border p-4 rounded-lg shadow-lg">
      {loadError ? (
        <div className="flex flex-col items-center p-6 space-y-4">
          <div className="text-center p-4 text-red-500 font-medium">
            Failed to load PDF. The file reference may have expired.
          </div>
          <Button onClick={onReset} variant="default">
            Upload PDF Again
          </Button>
        </div>
      ) : (
        <>
          <ScrollArea className="h-[70vh] w-full">
            <Document 
              file={fileUrl} 
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
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
        </>
      )}
    </div>
  );
};

export default PDFPreview;
