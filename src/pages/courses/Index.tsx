
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const CoursesIndex = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Course Modules</h1>
        <p className="text-muted-foreground">Select a module to begin learning</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/courses/market/customer-research">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Market Research</CardTitle>
              <CardDescription>Learn about customer personas and journey mapping</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Understand your target market through detailed persona analysis and customer journey mapping
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default CoursesIndex;
