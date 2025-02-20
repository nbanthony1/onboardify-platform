
import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import PDFViewer from "@/components/onboarding/PDFViewer";
import OrgChart from "@/components/onboarding/OrgChart";
import CustomerResearch from "@/components/onboarding/CustomerResearch";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

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
    return (
      <div className="prose max-w-none">
        {moduleContent.content.split('\n').map((paragraph, i) => (
          <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="border-b">
        <div className="container mx-auto py-4">
          <Link to={`/courses/${courseId}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Market Segmentation
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
