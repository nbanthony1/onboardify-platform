
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Department } from '../types/org-chart';
import { getResponsibilityExplanation } from '../utils/responsibility-utils';

interface DepartmentDialogProps {
  department: Department | null;
  onOpenChange: (open: boolean) => void;
}

export const DepartmentDialog: React.FC<DepartmentDialogProps> = ({ department, onOpenChange }) => {
  return (
    <Dialog open={!!department} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{department?.name}</DialogTitle>
        </DialogHeader>
        {department?.responsibilities && (
          <div className="space-y-4">
            <h4 className="font-medium">Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-2">
              {department.responsibilities.map((resp, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{resp}:</span>
                  <br />
                  <span className="text-gray-600">{getResponsibilityExplanation(resp)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
