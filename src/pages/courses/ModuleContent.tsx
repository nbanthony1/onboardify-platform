
import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import VideoUploader from "@/components/onboarding/VideoUploader";
import { 
  PDFContent, 
  VideoContent, 
  InteractiveContent, 
  TextContent,
  PDFUploadContent,
  MultipleDocumentContent
} from "@/components/modules";
import { generateVideoPath, generatePdfPath } from "@/utils/filePathUtils";
import { toast } from "@/hooks/use-toast";
import { PDFStorageService } from "@/services/PDFStorageService";

const ModuleContent = () => {
  const { id, moduleId } = useParams();
  const courseId = parseInt(id || "1");
  const moduleIndex = parseInt(moduleId || "1") - 1;
  
  const course = courses.find(c => c.id === courseId);
  const module = course?.modules?.[moduleIndex];
  
  // For checking persistence of uploads
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if any of the special PDF storage keys have been saved but are using blob URLs
    // If so, prompt the user to re-upload
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
          // If it's a blob URL, it won't be available in another session
          PDFStorageService.removeFromLocalStorage(key);
          needsReupload = true;
        }
      }
      
      if (needsReupload) {
        toast({
          title: "PDF Files Need Re-upload",
          description: "Some PDF files were stored temporarily and need to be re-uploaded for permanent storage.",
          variant: "warning",
          duration: 6000
        });
      }
      
      setIsLoading(false);
    };
    
    checkStorageKeys();
  }, [courseId, moduleId]);
  
  if (!course || !module) {
    return <div className="container mx-auto py-8">Module not found</div>;
  }

  const moduleContent = typeof module === 'string' ? { title: module, content: '' } : module;

  const renderContent = () => {
    if (isLoading) {
      return <div className="p-8 text-center">Checking module content...</div>;
    }
    
    // Interactive content for specific modules
    if (courseId === 4 && moduleId === "1") {
      return <InteractiveContent contentType="[PATH_PROCESS]" />;
    }
    
    if (moduleContent.content === '[INTERACTIVE_ORG_CHART]') {
      return <InteractiveContent contentType="[INTERACTIVE_ORG_CHART]" />;
    }
    
    if (moduleContent.content === '[CUSTOMER_RESEARCH]') {
      return <InteractiveContent contentType="[CUSTOMER_RESEARCH]" />;
    }

    // Product course special handlers
    if (moduleContent.content === '[PRODUCT_OVERVIEW_PDF]') {
      return (
        <PDFUploadContent 
          targetPath={generatePdfPath(course.title, moduleId, 'product-overview')} 
          storageKey="product-overview-pdf"
        />
      );
    }
    
    if (moduleContent.content === '[INSTALLATION_PDF]') {
      return <PDFUploadContent 
        targetPath={generatePdfPath(course.title, moduleId, 'installation')}
        storageKey="installation-pdf" 
      />;
    }
    
    if (moduleContent.content === '[ARIZONA_STUDY_PDFS]') {
      return (
        <MultipleDocumentContent 
          type="uploader"
          items={[
            { id: "pdf1", label: "Document 1", content: "arizona-study-doc1" },
            { id: "pdf2", label: "Document 2", content: "arizona-study-doc2" },
            { id: "pdf3", label: "Document 3", content: "arizona-study-doc3" }
          ]}
        />
      );
    }
    
    // PDF Upload for Course 2, Module 1 (legacy code, keeping for compatibility)
    if (courseId === 2 && moduleId === "1") {
      return (
        <PDFUploadContent 
          targetPath={generatePdfPath(course.title, moduleId, 'product-overview')} 
          storageKey="product-overview-pdf"
        />
      );
    }
    
    if (courseId === 2 && moduleId === "5") {
      return <PDFUploadContent 
        targetPath={generatePdfPath(course.title, moduleId, 'installation')}
        storageKey="installation-pdf" 
      />;
    }
    
    if (courseId === 2 && moduleId === "4") {
      return (
        <MultipleDocumentContent 
          type="uploader"
          items={[
            { id: "pdf1", label: "Document 1", content: "arizona-study-doc1" },
            { id: "pdf2", label: "Document 2", content: "arizona-study-doc2" },
            { id: "pdf3", label: "Document 3", content: "arizona-study-doc3" }
          ]}
        />
      );
    }
    
    // Multiple PDFs View
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
    
    // Video Content for Course 1
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
    
    // Video Upload placeholder
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
    
    // Default - Text Content
    return <TextContent content={moduleContent.content} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b">
        <div className="container mx-auto py-4">
          <Link to={`/courses/${courseId}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to {course.title.replace(/^\d+\.\s/, '')}
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
