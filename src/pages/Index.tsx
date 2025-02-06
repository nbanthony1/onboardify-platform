
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Sample data - in a real app this would come from your backend
  const departments = [
    { id: "sales", name: "Sales" },
    { id: "operations", name: "Operations" },
    { id: "hr", name: "Human Resources" },
  ];

  const courses = [
    {
      id: 1,
      title: "Sales Onboarding",
      description: "Learn the core principles of our sales methodology",
      department: "sales",
      progress: 0,
    },
    {
      id: 2,
      title: "Operations Handbook",
      description: "Standard operating procedures and best practices",
      department: "operations",
      progress: 0,
    },
    {
      id: 3,
      title: "HR Policies",
      description: "Essential company policies and guidelines",
      department: "hr",
      progress: 0,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Employee Onboarding Platform</h1>
        <p className="text-muted-foreground">
          Welcome! Start your learning journey with our curated courses.
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Departments</TabsTrigger>
          {departments.map((dept) => (
            <TabsTrigger key={dept.id} value={dept.id}>
              {dept.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {departments.map((dept) => (
          <TabsContent key={dept.id} value={dept.id} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.department === dept.id)
                .map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Index;
