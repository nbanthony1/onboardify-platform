
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";
import { BookOpen, Users, PackageSearch, GitFork, MessageSquare, Tool, BarChart } from "lucide-react";

const getIconForCourse = (courseId: number) => {
  switch (courseId) {
    case 1: return <Users className="w-6 h-6 mb-2" />;  // Who We Are
    case 2: return <PackageSearch className="w-6 h-6 mb-2" />; // Product Portfolio
    case 3: return <BookOpen className="w-6 h-6 mb-2" />; // Market Research
    case 4: return <GitFork className="w-6 h-6 mb-2" />; // Sales Process
    case 5: return <MessageSquare className="w-6 h-6 mb-2" />; // Internal Communication
    case 6: return <Tool className="w-6 h-6 mb-2" />; // Sales Tools
    case 7: return <BarChart className="w-6 h-6 mb-2" />; // Performance Metrics
    default: return <BookOpen className="w-6 h-6 mb-2" />;
  }
};

const CoursesIndex = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Course Modules</h1>
        <p className="text-muted-foreground">Select a module to begin learning</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link 
            key={course.id} 
            to={course.id === 3 ? "/courses/market/customer-research" : `/courses/${course.id}`}
          >
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  {getIconForCourse(course.id)}
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className="mt-2">{course.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                {course.modules && course.modules.length > 0 && (
                  <div className="text-sm text-muted-foreground text-center">
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
