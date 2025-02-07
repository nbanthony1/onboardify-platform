
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

interface EmployeeAvatarProps {
  name?: string;
  role?: string;
  department?: string;
  yearsOfExperience?: number;
}

const EmployeeAvatar = ({
  name = "John Doe",
  role = "Software Engineer",
  department = "Engineering",
  yearsOfExperience = 2,
}: EmployeeAvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
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
  );
};

export default EmployeeAvatar;
