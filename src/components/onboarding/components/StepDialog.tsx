
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Step } from '../types/path-process';

interface StepDialogProps {
  step: Step | null;
  onClose: () => void;
}

const StepDialog: React.FC<StepDialogProps> = ({ step, onClose }) => {
  if (!step) return null;

  return (
    <Dialog open={!!step} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-xl bg-white rounded-lg p-8">
        <h2 className="text-[32px] font-bold mb-6">{step.title}</h2>
        <div className="space-y-4">
          {step.description.map((line, index) => (
            <p key={index} className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold">$1</span>') }} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StepDialog;
