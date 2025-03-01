
import React from 'react';
import PDFViewer from "@/components/onboarding/PDFViewer";
import { PDFStorageService } from '@/services/PDFStorageService';

interface PDFContentProps {
  pdfUrl: string;
}

const PDFContent = ({ pdfUrl }: PDFContentProps) => {
  // Process Google Drive URLs to get the embedded format
  const formattedUrl = PDFStorageService.isGoogleDriveUrl(pdfUrl) 
    ? PDFStorageService.formatGoogleDriveUrl(pdfUrl)
    : pdfUrl;
    
  return <PDFViewer pdfUrl={formattedUrl} />;
};

export default PDFContent;
