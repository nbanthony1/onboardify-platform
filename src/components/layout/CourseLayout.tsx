
import { Outlet } from "react-router-dom";

const CourseLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CourseLayout;
