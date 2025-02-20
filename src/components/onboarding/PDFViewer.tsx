
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import FileUploader from './FileUploader';
import { toast } from "@/hooks/use-toast";

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [needsUpload, setNeedsUpload] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkFileExists = async () => {
      try {
        if (pdfUrl.startsWith('/pdfs/')) {
          const filePath = pdfUrl.substring(1); // Remove leading slash
          
          console.log('Checking file path:', filePath);

          // First check if file exists
          const { data: fileData, error: fileError } = await supabase.storage
            .from('course_materials')
            .list(filePath.split('/').slice(0, -1).join('/'));

          const fileName = filePath.split('/').pop();
          const fileExists = fileData?.some(file => file.name === fileName);

          if (fileExists) {
            const { data: urlData } = await supabase.storage
              .from('course_materials')
              .getPublicUrl(filePath);

            if (urlData?.publicUrl) {
              console.log('File exists:', urlData.publicUrl);
              setFileUrl(urlData.publicUrl);
              setNeedsUpload(false);
            }
          } else {
            console.log('File needs to be uploaded');
            setNeedsUpload(true);
          }
        } else {
          setFileUrl(pdfUrl);
          setNeedsUpload(false);
        }
      } catch (error) {
        console.error('Error checking file:', error);
        setNeedsUpload(true);
      } finally {
        setIsChecking(false);
      }
    };

    checkFileExists();
  }, [pdfUrl]);

  const handleUploadComplete = (url: string) => {
    console.log('Upload complete, setting URL:', url);
    setFileUrl(url);
    setNeedsUpload(false);
    toast({
      title: "PDF Uploaded Successfully",
      description: "The PDF has been uploaded and is now being displayed.",
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

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center h-[80vh] bg-gray-50 rounded-lg">
        <p className="text-center text-gray-600">
          No PDF document specified.
        </p>
      </div>
    );
  }

  if (needsUpload) {
    const filename = pdfUrl.split('/').pop()?.replace('.pdf', '');
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
        <h3 className="text-lg font-semibold mb-4">PDF Upload Required</h3>
        <p className="text-center text-gray-600 mb-8">
          Please upload the {filename} PDF document to continue.
        </p>
        <FileUploader 
          targetPath={pdfUrl.substring(1)} 
          onUploadComplete={handleUploadComplete}
        />
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
