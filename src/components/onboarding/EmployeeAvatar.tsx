
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <div className="flex items-center gap-2">
              <UserRound className="h-4 w-4 opacity-70" />
              <p className="text-sm text-muted-foreground">
                {role} - {department}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {yearsOfExperience} {yearsOfExperience === 1 ? "year" : "years"} of experience
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default EmployeeAvatar;
