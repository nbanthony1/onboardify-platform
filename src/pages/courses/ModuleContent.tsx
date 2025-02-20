
import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import PDFViewer from "@/components/onboarding/PDFViewer";
import OrgChart from "@/components/onboarding/OrgChart";
import CustomerResearch from "@/components/onboarding/CustomerResearch";
import VideoUploader from "@/components/onboarding/VideoUploader";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const ModuleContent = () => {
  const { id, moduleId } = useParams();
  const courseId = parseInt(id || "1");
  const moduleIndex = parseInt(moduleId || "1") - 1;
  const [videoUrl, setVideoUrl] = useState<string>("");
  
  const course = courses.find(c => c.id === courseId);
  const module = course?.modules?.[moduleIndex];
  
  if (!course || !module) {
    return <div className="container mx-auto py-8">Module not found</div>;
  }

  const moduleContent = typeof module === 'string' ? { title: module, content: '' } : module;

  const renderContent = () => {
    if (moduleContent.content === '[INTERACTIVE_ORG_CHART]') {
      return <OrgChart />;
    }
    if (moduleContent.content === '[CUSTOMER_RESEARCH]') {
      return <CustomerResearch />;
    }
    if (moduleContent.content?.startsWith('/pdfs/')) {
      return <PDFViewer pdfUrl={moduleContent.content} />;
    }
    if (videoUrl) {
      return (
        <div className="aspect-video w-full max-w-3xl mx-auto mb-4">
          <video 
            src={videoUrl} 
            controls 
            className="w-full h-full rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    return (
      <>
        <VideoUploader
          targetPath={`module-${courseId}-${moduleId}.mp4`}
          onUploadComplete={setVideoUrl}
        />
        {moduleContent.content.split('\n').map((paragraph, i) => (
          <p key={i} className="text-muted-foreground">{paragraph}</p>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="border-b">
        <div className="container mx-auto py-4">
          <Link to={`/courses/${courseId}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <div className="prose max-w-none">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
