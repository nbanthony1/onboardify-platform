
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface InstructionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InstructionDialog = ({ open, onOpenChange }: InstructionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-white rounded-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#9b87f5] shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
          <h2 className="text-xl font-bold">Interactive Guide</h2>
        </div>
        <p className="text-gray-700 mb-4">
          Tap on any purple oval to learn more about each step of the P.A.T.H process!
        </p>
        <p className="text-gray-600 text-sm italic">
          Each step contains detailed information about front and back of house operations.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default InstructionDialog;
