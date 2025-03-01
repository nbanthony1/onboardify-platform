
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

export interface Step {
  title: string;
  description: string[];
}

interface StepDetailsProps {
  step: Step | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StepDetails = ({ step, open, onOpenChange }: StepDetailsProps) => {
  if (!step) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-4xl bg-white rounded-lg p-8"
        aria-label={
          step.title === "Technology Implementation" ? "Technology_1" :
          step.title === "Advanced Solution Design" ? "Advanced_1" :
          step.title === "Hands-On Support" ? "Hands_On_Support_1" :
          step.title === "Results Validation" ? "Results_Validation_1" :
          step.title === "Continuous Improvement" ? "Continuous_Improvement_1" :
          "Problem Assessment_1"
        }
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-8 rounded-full bg-[#9b87f5] shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
          <h2 className="text-2xl font-bold">{step.title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Front of the house</h3>
            <h4 className="text-xl text-gray-600">Sales, Operations, Leadership</h4>
            <div className="space-y-4">
              {step.description.slice(3, 8).map((point, index) => {
                const parts = point.split(/\*\*(.*?)\*\*/);
                return (
                  <p key={index} className="text-gray-700">
                    {parts.map((part, i) => (
                      i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                    ))}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Back of the house</h3>
            <h4 className="text-xl text-gray-600">R&D, Operations, Leadership</h4>
            <div className="space-y-4">
              {step.description.slice(12).map((point, index) => {
                const parts = point.split(/\*\*(.*?)\*\*/);
                return (
                  <p key={index} className="text-gray-700">
                    {parts.map((part, i) => (
                      i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                    ))}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StepDetails;
