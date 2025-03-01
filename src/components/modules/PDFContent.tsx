
import React from 'react';
import PDFViewer from "@/components/onboarding/PDFViewer";

interface PDFContentProps {
  pdfUrl: string;
}

const PDFContent = ({ pdfUrl }: PDFContentProps) => {
  return <PDFViewer pdfUrl={pdfUrl} />;
};

export default PDFContent;
