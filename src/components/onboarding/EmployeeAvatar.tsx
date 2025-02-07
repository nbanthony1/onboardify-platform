
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { UserRound } from "lucide-react";

interface EmployeeAvatarProps {
  name?: string;
  role?: string;
  department?: string;
  yearsOfExperience?: number;
  progress?: number;
  completedCount?: number;
  totalModules?: number;
}

const EmployeeAvatar = ({
  name = "John Doe",
  role = "Software Engineer",
  department = "Engineering",
  yearsOfExperience = 2,
  progress = 0,
  completedCount = 0,
  totalModules = 0,
}: EmployeeAvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col items-end gap-4">
      <div className="flex items-start gap-4">
        <div className="text-right">
          <h4 className="text-sm font-semibold">{name}</h4>
          <div className="flex items-center gap-2 justify-end">
            <p className="text-sm text-muted-foreground">
              {role} - {department}
            </p>
            <UserRound className="h-4 w-4 opacity-70" />
          </div>
          <p className="text-sm text-muted-foreground">
            {yearsOfExperience} {yearsOfExperience === 1 ? "year" : "years"} of experience
          </p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[250px] space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Your Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground text-right">
          {completedCount} of {totalModules} modules completed
        </p>
      </div>
    </div>
  );
};

export default EmployeeAvatar;
