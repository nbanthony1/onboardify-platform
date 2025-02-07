
import { Progress } from "@/components/ui/progress";

interface TopProgressBarProps {
  completedModules: { [key: string]: boolean };
  totalModules: number;
}

const TopProgressBar = ({ completedModules, totalModules }: TopProgressBarProps) => {
  const completedCount = Object.values(completedModules).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / totalModules) * 100);

  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Overall Progress</span>
        <span className="font-medium">{progressPercentage}%</span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
};

export default TopProgressBar;
