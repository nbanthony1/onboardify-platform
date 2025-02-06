
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
      <CardHeader className="space-y-3">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {modules.length > 0 && (
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-base mb-4">Key Modules:</p>
              <ul className="list-disc pl-6 space-y-3">
                {modules.map((module, index) => (
                  <li
                    key={index}
                    onClick={() => onModuleClick(module)}
                    className={`flex items-center gap-3 leading-relaxed ${
                      typeof module !== "string" ? "cursor-pointer hover:text-primary" : ""
                    }`}
                  >
                    {typeof module === "string" ? (
                      <span className="text-base">{module}</span>
                    ) : (
                      <>
                        <span className="text-base">{module.title}</span>
                        {isModuleCompleted(module.title) && (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="bg-gray-200" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
