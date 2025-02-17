
import React, { useEffect, useState } from 'react';
import { toast } from "@/components/ui/use-toast";

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [isValidPDF, setIsValidPDF] = useState(true);

  useEffect(() => {
    // Check if the file exists and is a PDF
    const checkPDF = async () => {
      try {
        const response = await fetch(pdfUrl);
        const contentType = response.headers.get('content-type');
        
        if (!contentType?.includes('application/pdf')) {
          setIsValidPDF(false);
          toast({
            title: "Invalid File Type",
            description: "Please ensure you've uploaded a valid PDF file.",
            variant: "destructive"
          });
        }
      } catch (error) {
        setIsValidPDF(false);
        toast({
          title: "Error Loading PDF",
          description: "Unable to load the PDF file. Please check the file format.",
          variant: "destructive"
        });
      }
    };

    checkPDF();
  }, [pdfUrl]);

  return (
    <div className="w-full h-[80vh]">
      {isValidPDF ? (
        <object
          data={pdfUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <p>It appears you don't have a PDF plugin for this browser. You can still 
          <a href={pdfUrl} className="text-primary hover:underline ml-1">download the PDF here</a>.</p>
        </object>
      ) : (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <p className="text-center text-gray-600">
            Please upload a valid PDF file to continue.
            <br />
            <span className="text-sm text-gray-400">
              Supported format: .pdf
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
