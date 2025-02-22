
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface InstructionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InstructionDialog: React.FC<InstructionDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-white rounded-lg p-8">
        <h2 className="text-[32px] font-bold mb-6">Symterra's P.A.T.H Process</h2>
        <ul className="space-y-4">
          <li className="flex gap-2">
            <span className="font-medium">A step-by-step methodology</span>
            <span className="text-gray-700">
              to ensure consistent, effective, and scalable bird control solutions
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-gray-700">Company-driven execution for</span>
            <span className="font-medium">optimization and success</span>
          </li>
          <li className="flex gap-2">
            <span className="text-gray-700">Builds client</span>
            <span className="font-medium">trust, ensures compliance, and enhances long-term success</span>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default InstructionDialog;
