
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Department } from '../types/org-chart';

interface DepartmentButtonProps {
  deptName: string;
  onClick: () => void;
  isSelected: boolean;
}

export const DepartmentButton: React.FC<DepartmentButtonProps> = ({ deptName, onClick, isSelected }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={`w-48 p-3 rounded-lg text-base transition-colors ${
              isSelected
                ? "bg-primary text-white"
                : deptName === "Sales"
                ? "bg-[#9b87f5]/70 text-white hover:bg-[#9b87f5] border animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#9b87f5]"
                : "bg-white hover:bg-gray-100 border"
            }`}
          >
            <h4 className="font-medium">{deptName}</h4>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to view {deptName}'s responsibilities and roles</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
