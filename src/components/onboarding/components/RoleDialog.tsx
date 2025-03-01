
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Role } from '../types/org-chart';

interface RoleDialogProps {
  role: Role | null;
  onOpenChange: (open: boolean) => void;
}

export const RoleDialog: React.FC<RoleDialogProps> = ({ role, onOpenChange }) => {
  return (
    <Dialog open={!!role} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900px] p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl">{role?.title}</DialogTitle>
        </DialogHeader>
        {role?.responsibilities && (
          <div className="space-y-6">
            <h4 className="text-xl font-medium">Responsibilities:</h4>
            <ul className="list-disc pl-6 space-y-4">
              {role.responsibilities.map((resp, index) => (
                <li key={index} className="text-base">{resp}</li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
