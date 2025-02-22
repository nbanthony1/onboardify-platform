
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface InitialInstructionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InitialInstructionDialog: React.FC<InitialInstructionDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-white rounded-lg p-8">
        <h2 className="text-[32px] font-bold mb-6">Interactive Timeline</h2>
        <p className="text-lg">Click on any oval to learn more about each step in the process.</p>
      </DialogContent>
    </Dialog>
  );
};

export default InitialInstructionDialog;
