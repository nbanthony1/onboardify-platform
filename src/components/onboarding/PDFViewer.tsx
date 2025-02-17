
import React, { useEffect, useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import FileUploader from './FileUploader';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [isValidPDF, setIsValidPDF] = useState(true);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [needsUpload, setNeedsUpload] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkFileExists = async () => {
      try {
        if (pdfUrl.startsWith('/pdfs/')) {
          const filePath = pdfUrl.substring(1); // Remove leading slash
          const { data, error } = await supabase.storage
            .from('course_materials')
            .list(filePath.split('/')[0], {
              limit: 1,
              search: filePath.split('/').pop()
            });

          if (error) throw error;

          if (!data || data.length === 0) {
            setNeedsUpload(true);
            setIsValidPDF(false);
          } else {
            const { data: urlData } = await supabase.storage
              .from('course_materials')
              .getPublicUrl(filePath);
            
            if (urlData?.publicUrl) {
              setFileUrl(urlData.publicUrl);
            }
          }
        } else {
          setFileUrl(pdfUrl);
        }
      } catch (error) {
        console.error('Error checking file:', error);
        setIsValidPDF(false);
        setNeedsUpload(true);
      } finally {
        setIsChecking(false);
      }
    };

    if (pdfUrl) {
      checkFileExists();
    }
  }, [pdfUrl]);

  const handleUploadComplete = (url: string) => {
    setFileUrl(url);
    setIsValidPDF(true);
    setNeedsUpload(false);
    toast({
      title: "Upload Successful",
      description: "The PDF has been uploaded successfully.",
    });
  };

  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-[80vh] bg-gray-50 rounded-lg">
        <p className="text-center text-gray-600">
          Checking PDF status...
        </p>
      </div>
    );
  }

  if (needsUpload || !isValidPDF) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
        <h3 className="text-lg font-semibold mb-4">PDF Upload Required</h3>
        <p className="text-center text-gray-600 mb-8">
          Please upload the {pdfUrl.split('/').pop()?.replace('.pdf', '')} PDF document to continue.
        </p>
        <FileUploader 
          targetPath={pdfUrl.substring(1)} 
          onUploadComplete={handleUploadComplete}
        />
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center h-[80vh] bg-gray-50 rounded-lg">
        <p className="text-center text-gray-600">
          No PDF document specified.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[80vh]">
      {fileUrl ? (
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`}
          className="w-full h-full border-0"
          title="PDF Viewer"
        />
      ) : (
        <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
          <p className="text-center text-gray-600">
            Loading PDF viewer...
          </p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
