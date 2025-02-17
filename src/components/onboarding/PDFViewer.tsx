
import React, { useEffect, useState } from 'react';
import { toast } from "@/hooks/use-toast";

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
        
        // Check for both application/pdf and binary PDF content types
        const validPDFTypes = [
          'application/pdf',
          'application/x-pdf',
          'application/acrobat',
          'application/vnd.pdf',
          'binary/octet-stream'
        ];
        
        if (!contentType || !validPDFTypes.some(type => contentType.includes(type))) {
          setIsValidPDF(false);
          toast({
            title: "Invalid File Type",
            description: "Only PDF files are accepted for this upload.",
            variant: "destructive"
          });
        } else {
          setIsValidPDF(true);
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

    if (pdfUrl) {
      checkPDF();
    }
  }, [pdfUrl]);

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center h-[80vh] bg-gray-100 rounded-lg">
        <p className="text-center text-gray-600">
          Please upload a PDF file to continue.
          <br />
          <span className="text-sm text-gray-400">
            Only PDF files are accepted.
          </span>
        </p>
      </div>
    );
  }

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
              Only PDF files are accepted.
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
