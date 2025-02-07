
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import CourseCard from "@/components/onboarding/CourseCard";
import ModuleDialog from "@/components/onboarding/ModuleDialog";
import AnalyticsDashboard from "@/components/onboarding/AnalyticsDashboard";
import EmployeeAvatar from "@/components/onboarding/EmployeeAvatar";
import SearchBar from "@/components/onboarding/SearchBar";
import TopProgressBar from "@/components/onboarding/TopProgressBar";
import { courses, departments } from "@/data/courses";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [selectedModule, setSelectedModule] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const [completedModules, setCompletedModules] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

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
        ).length + 1;

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

  const toggleSection = (deptId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [deptId]: !prev[deptId],
    }));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filterCourses = (coursesToFilter: typeof courses) => {
    if (!searchQuery) return coursesToFilter;

    return coursesToFilter.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery) ||
        course.description.toLowerCase().includes(searchQuery) ||
        course.modules?.some((module) =>
          typeof module === "string"
            ? module.toLowerCase().includes(searchQuery)
            : module.title.toLowerCase().includes(searchQuery)
        )
    );
  };

  // Calculate total modules across all courses
  const totalModules = courses.reduce((acc, course) => {
    return acc + (course.modules?.length || 0);
  }, 0);

  // Calculate completed modules count
  const completedCount = Object.values(completedModules).filter(Boolean).length;
  
  // Calculate progress percentage
  const progress = Math.round((completedCount / totalModules) * 100) || 0;

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <TopProgressBar completedModules={completedModules} totalModules={totalModules} />
        
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Symterra Employee Onboarding Platform</h1>
            <p className="text-muted-foreground mb-6">
              Welcome! Start your learning journey with our curated courses.
            </p>
            <AnalyticsDashboard completedModules={completedModules} />
          </div>
          <EmployeeAvatar
            name="Sarah Johnson"
            role="Product Manager"
            department="Product"
            yearsOfExperience={3}
            progress={progress}
            completedCount={completedCount}
            totalModules={totalModules}
          />
        </div>

        <SearchBar onSearch={handleSearch} />

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

          <TabsContent value="all" className="space-y-4">
            {departments.map((dept) => (
              <Collapsible
                key={dept.id}
                open={openSections[dept.id]}
                onOpenChange={() => toggleSection(dept.id)}
                className="border rounded-lg"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 hover:bg-accent rounded-lg">
                  <h2 className="text-xl font-semibold">{dept.name}</h2>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openSections[dept.id] ? "transform rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
                    {filterCourses(courses.filter((course) => course.department === dept.id))
                      .map((course) => (
                        <CourseCard
                          key={course.id}
                          {...course}
                          onModuleClick={handleModuleClick}
                          isModuleCompleted={isModuleCompleted}
                        />
                      ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </TabsContent>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filterCourses(courses.filter((course) => course.department === dept.id))
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
    </div>
  );
};

export default Index;
