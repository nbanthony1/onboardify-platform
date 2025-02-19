
import { Link, Outlet } from "react-router-dom";

const CourseLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto py-4">
          <nav className="flex items-center space-x-6">
            <Link to="/courses" className="font-semibold">
              Onboardify Platform
            </Link>
            <Link to="/courses/market/customer-research" className="text-muted-foreground hover:text-foreground">
              Market Research
            </Link>
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
