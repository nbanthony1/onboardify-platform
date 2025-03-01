
import { useParams } from "react-router-dom";
import { courses } from "@/data/courses";
import { ContentRenderer } from "@/components/modules";
import ModuleHeader from "@/components/modules/ModuleHeader";

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

  return (
    <div className="min-h-screen flex flex-col">
      <ModuleHeader courseId={courseId} courseTitle={course.title} />
      <div className="container mx-auto py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <ContentRenderer 
            courseId={courseId} 
            moduleId={moduleId || "1"} 
            moduleContent={moduleContent} 
          />
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
