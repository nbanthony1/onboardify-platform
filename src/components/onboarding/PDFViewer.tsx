
import React from 'react';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  return (
    <div className="w-full h-[80vh]">
      <object
        data={pdfUrl}
        type="application/pdf"
        className="w-full h-full"
      >
        <p>It appears you don't have a PDF plugin for this browser. You can still 
        <a href={pdfUrl} className="text-primary hover:underline ml-1">download the PDF here</a>.</p>
      </object>
    </div>
  );
};

export default PDFViewer;
