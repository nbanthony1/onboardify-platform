
import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import PDFViewer from "@/components/onboarding/PDFViewer";
import OrgChart from "@/components/onboarding/OrgChart";
import CustomerResearch from "@/components/onboarding/CustomerResearch";
import PathProcess from "@/components/onboarding/PathProcess";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import VideoPlayer from "@/components/onboarding/VideoPlayer";
import VideoUploader from "@/components/onboarding/VideoUploader";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ModuleContent = () => {
  const { id, moduleId } = useParams();
  const courseId = parseInt(id || "1");
  const moduleIndex = parseInt(moduleId || "1") - 1;
  
  const course = courses.find(c => c.id === courseId);
  const module = course?.modules?.[moduleIndex];
  
  if (!course || !module) {
    return <div className="container mx-auto py-8">Module not found</div>;
  }

  const moduleContent = typeof module === 'string' ? { title: module, content: '' } : module;

  // Debug module information to see if there are any differences
  console.log('Course and module:', courseId, moduleId, moduleContent);

  const generateVideoPath = () => {
    return `course_${courseId}_module_${moduleId}_${Date.now()}.mp4`;
  };

  const generatePdfPath = (suffix = '') => {
    const timestamp = Date.now();
    return `pdfs/${course?.title.replace(/^\d+\.\s/, '').toLowerCase().replace(/\s+/g, '-')}/module-${moduleId}${suffix ? `-${suffix}` : ''}-${timestamp}.pdf`;
  };

  const renderContent = () => {
    // Special case for the PATH process module
    if (courseId === 4 && moduleId === "1") {
      return <PathProcess />;
    }
    
    if (moduleContent.content === '[INTERACTIVE_ORG_CHART]') {
      return <OrgChart />;
    }
    if (moduleContent.content === '[CUSTOMER_RESEARCH]') {
      return <CustomerResearch />;
    }
    
    // Handle multiple PDFs separated by commas
    if (moduleContent.content?.startsWith('/pdfs/')) {
      const pdfUrls = moduleContent.content.split(',');
      
      if (pdfUrls.length > 1) {
        return (
          <Tabs defaultValue={pdfUrls[0]} className="w-full">
            <TabsList className="mb-4">
              {pdfUrls.map((url, index) => (
                <TabsTrigger key={url} value={url}>
                  Document {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {pdfUrls.map((url) => (
              <TabsContent key={url} value={url}>
                <Card>
                  <CardContent className="p-0">
                    <PDFViewer pdfUrl={url} />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        );
      }
      
      return <PDFViewer pdfUrl={pdfUrls[0]} />;
    }
    
    if (courseId === 1 && moduleId === "1") {
      return (
        <div className="space-y-6">
          <VideoPlayer videoUrl="https://drive.google.com/file/d/1Rwj6GVu7niykCCpRGp2QIw_d3ODbmJgF/view?usp=sharing" />
          <VideoPlayer videoUrl="https://drive.google.com/file/d/1Lqh7OPpZZ18hXv44ENB-vs_x6Xi820Uk/view?usp=sharing" />
        </div>
      );
    }
    if (courseId === 1 && moduleId === "2") {
      return (
        <div className="space-y-6">
          <VideoPlayer videoUrl="https://drive.google.com/file/d/1WKVu84EXGcD6Fpb04eH6LOH1kFcQuX8M/view?usp=sharing" />
        </div>
      );
    }
    if (moduleContent.content?.startsWith('[Video Placeholder')) {
      return (
        <div className="space-y-4">
          <VideoUploader 
            targetPath={generateVideoPath()}
            onUploadComplete={(url: string) => {
              console.log("Video URL:", url);
            }}
          />
          <div className="prose max-w-none">
            {moduleContent.content.split('\n').map((paragraph, i) => (
              <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="prose max-w-none">
        {moduleContent.content.split('\n').map((paragraph, i) => (
          <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
        ))}
      </div>
    );
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
