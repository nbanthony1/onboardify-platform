
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Role } from '../types/org-chart';
import { getResponsibilityExplanation } from '../utils/responsibility-utils';

interface RoleDialogProps {
  role: Role | null;
  onOpenChange: (open: boolean) => void;
}

export const RoleDialog: React.FC<RoleDialogProps> = ({ role, onOpenChange }) => {
  return (
    <Dialog open={!!role} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{role?.title}</DialogTitle>
        </DialogHeader>
        {role?.responsibilities && (
          <div className="space-y-4">
            <h4 className="font-medium">Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-2">
              {role.responsibilities.map((resp, index) => (
                <li key={index} className="text-sm">{resp}</li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
