
import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import PDFViewer from "@/components/onboarding/PDFViewer";
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
  const isPDF = moduleContent.content?.startsWith('/pdfs/');

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <Link to={`/courses/${courseId}`}>
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to {course.title}
          </Button>
        </Link>
        <h1 className="text-4xl font-bold">{moduleContent.title}</h1>
      </div>

      <div className="prose max-w-none">
        {isPDF ? (
          <PDFViewer pdfUrl={moduleContent.content.split('\n')[0]} />
        ) : (
          moduleContent.content.split('\n').map((paragraph, i) => (
            <p key={i} className="text-muted-foreground">{paragraph}</p>
          ))
        )}
      </div>
    </div>
  );
};

export default ModuleContent;
