
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Department } from '../types/org-chart';

interface DepartmentDialogProps {
  department: Department | null;
  onOpenChange: (open: boolean) => void;
}

export const DepartmentDialog: React.FC<DepartmentDialogProps> = ({ department, onOpenChange }) => {
  return (
    <Dialog open={!!department} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900px] p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl">{department?.name}</DialogTitle>
        </DialogHeader>
        {department?.responsibilities && (
          <div className="space-y-6">
            <h4 className="text-xl font-medium">Responsibilities:</h4>
            <ul className="list-disc pl-6 space-y-4">
              {department.responsibilities.map((resp, index) => (
                <li key={index} className="text-base">{resp}</li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
