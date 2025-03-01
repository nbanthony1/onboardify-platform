import React, { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { PDFStorageService } from "@/services/PDFStorageService";
import { 
  PDFContent, 
  VideoContent, 
  InteractiveContent, 
  TextContent,
  PDFUploadContent,
  MultipleDocumentContent
} from "@/components/modules";
import VideoUploader from "@/components/onboarding/VideoUploader";
import { generateVideoPath } from "@/utils/filePathUtils";

interface ContentRendererProps {
  courseId: number;
  moduleId: string;
  moduleContent: {
    title: string;
    content: string;
  };
}

const ContentRenderer = ({ courseId, moduleId, moduleContent }: ContentRendererProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const checkStorageKeys = async () => {
      setIsLoading(true);
      
      const keysToCheck = [
        "product-overview-pdf", 
        "installation-pdf", 
        "arizona-study-doc1", 
        "arizona-study-doc2",
        "arizona-study-doc3"
      ];
      
      let needsReupload = false;
      
      for (const key of keysToCheck) {
        const savedUrl = PDFStorageService.getFromLocalStorage(key);
        if (savedUrl && savedUrl.startsWith('blob:')) {
          PDFStorageService.removeFromLocalStorage(key);
          needsReupload = true;
        }
      }
      
      if (needsReupload) {
        toast({
          title: "PDF Files Need Re-upload",
          description: "Some PDF files were stored temporarily and need to be re-uploaded for permanent storage.",
          variant: "destructive"
        });
      }
      
      setIsLoading(false);
    };
    
    checkStorageKeys();
  }, [courseId, moduleId]);

  if (isLoading) {
    return <div className="p-8 text-center">Checking module content...</div>;
  }
  
  if (courseId === 4 && moduleId === "1") {
    return <InteractiveContent contentType="[PATH_PROCESS]" />;
  }
  
  if (moduleContent.content === '[INTERACTIVE_ORG_CHART]') {
    return <InteractiveContent contentType="[INTERACTIVE_ORG_CHART]" />;
  }
  
  if (moduleContent.content === '[CUSTOMER_RESEARCH]') {
    return <InteractiveContent contentType="[CUSTOMER_RESEARCH]" />;
  }

  if (courseId === 2 && moduleId === "1") {
    console.log("Rendering Product Overview PDF:", moduleContent.content);
    return <PDFContent pdfUrl={moduleContent.content} />;
  }
  
  if (moduleContent.content === '[INSTALLATION_PDF]') {
    return <PDFContent pdfUrl="https://drive.google.com/file/d/18DU656HZwvOFC-X-7YhJRLsinAmIGDWo/preview" />;
  }
  
  if (moduleContent.content === '[ARIZONA_STUDY_PDFS]') {
    return (
      <MultipleDocumentContent 
        type="viewer"
        items={[
          { id: "pdf1", label: "Document 1", content: "https://drive.google.com/file/d/1RephYSwwExm-LIwMd77SNUKNxe0TCavB/preview" },
          { id: "pdf2", label: "Document 2", content: "https://drive.google.com/file/d/1LCrGcM9e5kdIYCDmcyRa7748yJ_BiXLe/preview" },
          { id: "pdf3", label: "Document 3", content: "https://drive.google.com/file/d/1Oe6NcGMi7vD2aRUZySWWgnijrRi0d4RX/preview" }
        ]}
      />
    );
  }
  
  if (courseId === 2 && moduleId === "5") {
    return <PDFContent pdfUrl="https://drive.google.com/file/d/18DU656HZwvOFC-X-7YhJRLsinAmIGDWo/preview" />;
  }
  
  if (courseId === 2 && moduleId === "4") {
    return (
      <MultipleDocumentContent 
        type="viewer"
        items={[
          { id: "pdf1", label: "Document 1", content: "https://drive.google.com/file/d/1RephYSwwExm-LIwMd77SNUKNxe0TCavB/preview" },
          { id: "pdf2", label: "Document 2", content: "https://drive.google.com/file/d/1LCrGcM9e5kdIYCDmcyRa7748yJ_BiXLe/preview" },
          { id: "pdf3", label: "Document 3", content: "https://drive.google.com/file/d/1Oe6NcGMi7vD2aRUZySWWgnijrRi0d4RX/preview" }
        ]}
      />
    );
  }
  
  if (moduleContent.content?.startsWith('/pdfs/')) {
    const pdfUrls = moduleContent.content.split(',');
    
    if (pdfUrls.length > 1) {
      return (
        <MultipleDocumentContent 
          type="viewer"
          items={pdfUrls.map((url, index) => ({
            id: url,
            label: `Document ${index + 1}`,
            content: url
          }))}
        />
      );
    }
    
    return <PDFContent pdfUrl={pdfUrls[0]} />;
  }
  
  if (courseId === 1 && moduleId === "1") {
    return (
      <VideoContent videoUrls={[
        "https://drive.google.com/file/d/1Rwj6GVu7niykCCpRGp2QIw_d3ODbmJgF/view?usp=sharing",
        "https://drive.google.com/file/d/1Lqh7OPpZZ18hXv44ENB-vs_x6Xi820Uk/view?usp=sharing"
      ]} />
    );
  }
  
  if (courseId === 1 && moduleId === "2") {
    return (
      <VideoContent videoUrls={[
        "https://drive.google.com/file/d/1WKVu84EXGcD6Fpb04eH6LOH1kFcQuX8M/view?usp=sharing"
      ]} />
    );
  }
  
  if (moduleContent.content?.startsWith('[Video Placeholder')) {
    return (
      <div className="space-y-4">
        <VideoUploader 
          targetPath={generateVideoPath(courseId, moduleId)}
          onUploadComplete={(url: string) => {
            console.log("Video URL:", url);
          }}
        />
        <TextContent content={moduleContent.content} />
      </div>
    );
  }
  
  return <TextContent content={moduleContent.content} />;
};

export default ContentRenderer;
