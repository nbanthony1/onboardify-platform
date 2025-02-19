
import { Link, Outlet } from "react-router-dom";
import { courses } from "@/data/courses";

const CourseLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto py-4">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="font-semibold">
              Onboardify Platform
            </Link>
            {courses.map((course) => (
              <Link
                key={course.id}
                to={course.id === 3 ? "/courses/market/customer-research" : `/courses/${course.id}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {course.title.replace(/^\d+\.\s+/, '')}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CourseLayout;
