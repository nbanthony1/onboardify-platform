
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import CourseCard from "@/components/onboarding/CourseCard";
import ModuleDialog from "@/components/onboarding/ModuleDialog";
import { courses, departments } from "@/data/courses";

const Index = () => {
  const [selectedModule, setSelectedModule] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const [completedModules, setCompletedModules] = useState<{
    [key: string]: boolean;
  }>({});
  const { toast } = useToast();

  const handleModuleClick = (
    module: string | { title: string; content: string }
  ) => {
    if (typeof module === "string") return;
    setSelectedModule(module);
  };

  const handleCompleteModule = (moduleTitle: string, courseId: number) => {
    setCompletedModules((prev) => ({ ...prev, [moduleTitle]: true }));

    // Calculate new progress
    const course = courses.find((c) => c.id === courseId);
    if (course && course.modules) {
      const totalModules = course.modules.length;
      const completedCount =
        course.modules.filter((module) =>
          completedModules[typeof module === "string" ? module : module.title]
        ).length + 1; // +1 for the current completion

      course.progress = Math.round((completedCount / totalModules) * 100);
    }

    toast({
      title: "Module Completed!",
      description: `You've completed the ${moduleTitle} module.`,
    });

    setSelectedModule(null);
  };

  const isModuleCompleted = (moduleTitle: string) => {
    return completedModules[moduleTitle] || false;
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Employee Onboarding Platform</h1>
        <p className="text-muted-foreground">
          Welcome! Start your learning journey with our curated courses.
        </p>
      </div>

      <ModuleDialog
        selectedModule={selectedModule}
        isOpen={!!selectedModule}
        onClose={() => setSelectedModule(null)}
        onComplete={() =>
          selectedModule && handleCompleteModule(selectedModule.title, 1)
        }
        isCompleted={selectedModule ? isModuleCompleted(selectedModule.title) : false}
      />

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
              <CourseCard
                key={course.id}
                {...course}
                onModuleClick={handleModuleClick}
                isModuleCompleted={isModuleCompleted}
              />
            ))}
          </div>
        </TabsContent>

        {departments.map((dept) => (
          <TabsContent key={dept.id} value={dept.id} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.department === dept.id)
                .map((course) => (
                  <CourseCard
                    key={course.id}
                    {...course}
                    onModuleClick={handleModuleClick}
                    isModuleCompleted={isModuleCompleted}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Index;
