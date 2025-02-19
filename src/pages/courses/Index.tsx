
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";

const CoursesIndex = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Course Modules</h1>
        <p className="text-muted-foreground">Select a module to begin learning</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {course.modules && course.modules.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    <p>{course.modules.length} modules available</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesIndex;
