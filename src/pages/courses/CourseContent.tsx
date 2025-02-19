
import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {course.modules?.map((module, index) => {
          const moduleContent = typeof module === 'string' ? { title: module, content: '' } : module;
          
          return (
            <Link key={index} to={`/courses/${courseId}/module/${index + 1}`}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <CardTitle>{moduleContent.title}</CardTitle>
                  <CardDescription>Click to view content</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
