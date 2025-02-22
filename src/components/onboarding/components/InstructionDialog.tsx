
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
          <li>
            A <span className="font-semibold">step-by-step methodology</span> to ensure consistent, effective, and scalable bird control solutions
          </li>
          <li>
            Company-driven execution for <span className="font-semibold">optimization and success</span>
          </li>
          <li>
            Builds client <span className="font-semibold">trust, ensures compliance, and enhances long-term success</span>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default InstructionDialog;
