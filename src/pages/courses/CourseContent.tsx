
import { useParams } from "react-router-dom";
import { courses } from "@/data/courses";

const CourseContent = () => {
  const { id } = useParams();
  const courseId = parseInt(id || "1");
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <div className="container mx-auto py-8">Course not found</div>;
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="text-muted-foreground">{course.description}</p>
      </div>
      
      <div className="space-y-6">
        {course.modules?.map((module, index) => {
          const moduleContent = typeof module === 'string' ? { title: module, content: '' } : module;
          return (
            <div key={index} className="border rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{moduleContent.title}</h2>
              {moduleContent.content && (
                <div className="prose max-w-none">
                  {moduleContent.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
