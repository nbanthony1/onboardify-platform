
import React, { useEffect, useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [isValidPDF, setIsValidPDF] = useState(true);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    const getFileUrl = async () => {
      try {
        // Check if this is a storage path
        if (pdfUrl.startsWith('/pdfs/')) {
          const filePath = pdfUrl.substring(1); // Remove leading slash
          const { data } = await supabase.storage
            .from('course_materials')
            .getPublicUrl(filePath);
          
          if (data?.publicUrl) {
            setFileUrl(data.publicUrl);
          } else {
            setIsValidPDF(false);
            toast({
              title: "PDF Not Found",
              description: "The requested PDF file could not be found.",
              variant: "destructive"
            });
          }
        } else {
          setFileUrl(pdfUrl);
        }
      } catch (error) {
        setIsValidPDF(false);
        toast({
          title: "Error Loading PDF",
          description: "Unable to load the PDF file. Please try again.",
          variant: "destructive"
        });
      }
    };

    if (pdfUrl) {
      getFileUrl();
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
      {isValidPDF && fileUrl ? (
        <object
          data={fileUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <p>It appears you don't have a PDF plugin for this browser. You can still 
          <a href={fileUrl} className="text-primary hover:underline ml-1">download the PDF here</a>.</p>
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
