
import React from 'react';
import PDFUploader from "@/components/onboarding/PDFUploader";

interface PDFUploadContentProps {
  targetPath: string;
  storageKey: string;
}

const PDFUploadContent = ({ targetPath, storageKey }: PDFUploadContentProps) => {
  return (
    <div className="space-y-4">
      <PDFUploader 
        targetPath={targetPath} 
        storageKey={storageKey}
      />
    </div>
  );
};

export default PDFUploadContent;
