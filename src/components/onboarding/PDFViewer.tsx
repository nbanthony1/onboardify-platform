
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
          const folderPath = filePath.split('/')[0];
          const fileName = filePath.split('/').pop();
          
          console.log('Checking file:', { folderPath, fileName, filePath });
          
          // First try to get the public URL directly
          const { data: urlData } = await supabase.storage
            .from('course_materials')
            .getPublicUrl(filePath);
          
          if (urlData?.publicUrl) {
            // Verify the file exists by trying to fetch it
            try {
              const response = await fetch(urlData.publicUrl, { method: 'HEAD' });
              if (response.ok) {
                console.log('File exists:', urlData.publicUrl);
                setFileUrl(urlData.publicUrl);
                setIsValidPDF(true);
                setNeedsUpload(false);
                setIsChecking(false);
                return;
              }
            } catch (error) {
              console.log('File not accessible:', error);
            }
          }

          // If we couldn't verify the file, check if it exists in storage
          const { data: files, error } = await supabase.storage
            .from('course_materials')
            .list(folderPath, {
              limit: 100,
              search: fileName
            });

          console.log('Storage list result:', { files, error });

          if (error) throw error;

          if (!files || files.length === 0) {
            console.log('File not found in storage');
            setNeedsUpload(true);
            setIsValidPDF(false);
          } else {
            const exactMatch = files.find(f => f.name === fileName);
            if (exactMatch) {
              console.log('Found exact match:', exactMatch);
              setFileUrl(urlData.publicUrl);
              setIsValidPDF(true);
              setNeedsUpload(false);
            } else {
              console.log('No exact match found');
              setNeedsUpload(true);
              setIsValidPDF(false);
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
    console.log('Upload complete:', url);
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
