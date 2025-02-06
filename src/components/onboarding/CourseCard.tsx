
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

interface Module {
  title: string;
  content?: string;
}

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  modules?: (string | { title: string; content: string })[];
  progress: number;
  onModuleClick: (module: string | { title: string; content: string }) => void;
  isModuleCompleted: (moduleTitle: string) => boolean;
}

const CourseCard = ({
  title,
  description,
  modules = [], // Provide default empty array
  progress,
  onModuleClick,
  isModuleCompleted,
}: CourseCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {modules.length > 0 && (
            <div className="text-sm text-muted-foreground mb-4">
              <p className="font-medium mb-2">Key Modules:</p>
              <ul className="list-disc pl-4">
                {modules.map((module, index) => (
                  <li
                    key={index}
                    onClick={() => onModuleClick(module)}
                    className={`flex items-center gap-2 ${
                      typeof module !== "string" ? "cursor-pointer hover:text-primary" : ""
                    }`}
                  >
                    {typeof module === "string" ? (
                      module
                    ) : (
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
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="bg-gray-200" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
