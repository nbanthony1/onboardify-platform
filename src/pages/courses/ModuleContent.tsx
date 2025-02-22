
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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const ModuleContent = () => {
  const { id, moduleId } = useParams();
  const courseId = parseInt(id || "1");
  const moduleIndex = parseInt(moduleId || "1") - 1;
  const [showInstructionDialog, setShowInstructionDialog] = useState(true);
  
  const course = courses.find(c => c.id === courseId);
  const module = course?.modules?.[moduleIndex];
  
  if (!course || !module) {
    return <div className="container mx-auto py-8">Module not found</div>;
  }

  const moduleContent = typeof module === 'string' ? { title: module, content: '' } : module;

  const generateVideoPath = () => {
    return `course_${courseId}_module_${moduleId}_${Date.now()}.mp4`;
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
    if (moduleContent.content?.startsWith('/pdfs/')) {
      return <PDFViewer pdfUrl={moduleContent.content} />;
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
          <Dialog open={showInstructionDialog} onOpenChange={setShowInstructionDialog}>
            <DialogContent className="max-w-lg bg-white rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#9b87f5] shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
                <h2 className="text-xl font-bold">Interactive Guide</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Record yourself showcasing the product features discussed in this module.
              </p>
              <p className="text-gray-600 text-sm italic">
                Your video will be used for training and quality assurance purposes.
              </p>
            </DialogContent>
          </Dialog>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
