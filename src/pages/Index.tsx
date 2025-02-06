import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [selectedModule, setSelectedModule] = useState<{title: string; content: string} | null>(null);
  const [completedModules, setCompletedModules] = useState<{[key: string]: boolean}>({});
  const { toast } = useToast();

  const departments = [
    { id: "sales", name: "Sales" },
    { id: "operations", name: "Operations" },
    { id: "hr", name: "Human Resources" },
  ];

  const courses = [
    {
      id: 1,
      title: "1. Introduction to Symterra",
      description: "Company overview, history, mission, and organizational structure",
      department: "sales",
      progress: 0,
      modules: [
        {
          title: "Company Overview",
          content: "Symterra is a leader in electromagnetic bird deterrent technology, dedicated to fostering coexistence between humans and wildlife. The company's innovative solutions provide humane approaches to bird deterrence, ensuring businesses can address issues like hygiene, safety, and property damage without resorting to harmful measures."
        },
        {
          title: "History and Evolution",
          content: "Originally known as FlockOff, the company rebranded to Symterra in June 2024 to better reflect its mission and values. The name \"Symterra\" is derived from \"Symbiotic\" and \"Terra\" (Earth), signifying the company's commitment to fostering harmony between human activities and the natural world."
        },
        {
          title: "Mission and Vision",
          content: "Symterra's mission is to foster coexistence between humans and wildlife through innovative and ethical bird deterrent solutions. The company envisions a future where human advancements harmonize with nature, ensuring businesses can operate effectively while safeguarding avian populations."
        },
        {
          title: "Organizational Structure",
          content: "Symterra operates with a streamlined organizational structure designed to promote efficiency and innovation. The company is led by a Chief Executive Officer, supported by key departments including R&D, Sales and Marketing, Operations, and Customer Support.",
        },
        {
          title: "Leadership Team",
          content: "Led by CEO John Smalley, who emphasizes the importance of humane approaches to bird deterrence and is committed to sustainable progress through innovative technologies."
        }
      ]
    },
    {
      id: 2,
      title: "2. Product Portfolio",
      description: "Deep dive into Symterra Pulse and other product offerings",
      department: "sales",
      progress: 0,
      modules: [
        "Symterra Pulse System",
        "Product Features",
        "Efficacy Studies"
      ]
    },
    {
      id: 3,
      title: "3. Market Segmentation",
      description: "Understanding target industries and customer profiles",
      department: "sales",
      progress: 0,
      modules: [
        "Industry Applications",
        "Customer Avatars"
      ]
    },
    {
      id: 4,
      title: "4. Sales Process",
      description: "Complete sales cycle from lead generation to customer retention",
      department: "sales",
      progress: 0,
      modules: [
        "Lead Generation",
        "Sales Presentation",
        "Proposal Development",
        "Closing Techniques"
      ]
    },
    {
      id: 5,
      title: "5. Internal Communication",
      description: "Collaboration with marketing, operations, and support teams",
      department: "sales",
      progress: 0,
      modules: [
        "Marketing Collaboration",
        "Operations Coordination",
        "Customer Support"
      ]
    },
    {
      id: 6,
      title: "6. Sales Tools",
      description: "CRM systems, sales collateral, and competitive analysis",
      department: "sales",
      progress: 0,
      modules: [
        "CRM Training",
        "Sales Materials",
        "Competition Overview"
      ]
    },
    {
      id: 7,
      title: "7. Compliance & Ethics",
      description: "Industry regulations and ethical selling practices",
      department: "sales",
      progress: 0,
      modules: [
        "Industry Regulations",
        "Ethical Guidelines"
      ]
    },
    {
      id: 8,
      title: "8. Performance Metrics",
      description: "Sales targets, KPIs, and professional development",
      department: "sales",
      progress: 0,
      modules: [
        "Sales Targets",
        "Development Plans"
      ]
    },
    {
      id: 9,
      title: "Operations Handbook",
      description: "Standard operating procedures and best practices",
      department: "operations",
      progress: 0,
    },
    {
      id: 10,
      title: "HR Policies",
      description: "Essential company policies and guidelines",
      department: "hr",
      progress: 0,
    },
  ];

  const handleModuleClick = (module: string | { title: string; content: string }) => {
    if (typeof module === 'string') return;
    setSelectedModule(module);
  };

  const handleCompleteModule = (moduleTitle: string, courseId: number) => {
    setCompletedModules(prev => ({ ...prev, [moduleTitle]: true }));
    
    // Calculate new progress
    const course = courses.find(c => c.id === courseId);
    if (course && course.modules) {
      const totalModules = course.modules.length;
      const completedCount = course.modules.filter(module => 
        completedModules[typeof module === 'string' ? module : module.title]
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

      <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedModule?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground">{selectedModule?.content}</p>
          </div>
          <div className="mt-6 flex justify-end">
            <Button 
              onClick={() => selectedModule && handleCompleteModule(selectedModule.title, 1)}
              disabled={selectedModule ? isModuleCompleted(selectedModule.title) : false}
            >
              {selectedModule && isModuleCompleted(selectedModule.title) ? 'Completed' : 'Mark as Complete'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
                    {course.modules && (
                      <div className="text-sm text-muted-foreground mb-4">
                        <p className="font-medium mb-2">Key Modules:</p>
                        <ul className="list-disc pl-4">
                          {course.modules.map((module, index) => (
                            <li 
                              key={index}
                              onClick={() => handleModuleClick(module)}
                              className={`flex items-center gap-2 ${typeof module !== 'string' ? "cursor-pointer hover:text-primary" : ""}`}
                            >
                              {typeof module === 'string' ? module : (
                                <>
                                  {module.title}
                                  {isModuleCompleted(module.title) && (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  )}
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="bg-gray-200" />
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
                        {course.modules && (
                          <div className="text-sm text-muted-foreground mb-4">
                            <p className="font-medium mb-2">Key Modules:</p>
                            <ul className="list-disc pl-4">
                              {course.modules.map((module, index) => (
                                <li 
                                  key={index}
                                  onClick={() => handleModuleClick(module)}
                                  className={`flex items-center gap-2 ${typeof module !== 'string' ? "cursor-pointer hover:text-primary" : ""}`}
                                >
                                  {typeof module === 'string' ? module : (
                                    <>
                                      {module.title}
                                      {isModuleCompleted(module.title) && (
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                      )}
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="bg-gray-200" />
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
