
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface RoleButtonProps {
  title: string;
  onClick: () => void;
}

export const RoleButton: React.FC<RoleButtonProps> = ({ title, onClick }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger 
          className="w-48 p-3 rounded-lg bg-gray-50 border text-base hover:bg-gray-100"
          onClick={onClick}
        >
          {title}
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to view role details</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
