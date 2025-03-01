
import React, { useState } from 'react';
import Step from './path-process/Step';
import StepDetails, { Step as StepType } from './path-process/StepDetails';
import InstructionDialog from './path-process/InstructionDialog';
import { steps } from './path-process/stepsData';

const PathProcess = () => {
  const [selectedStep, setSelectedStep] = useState<StepType | null>(null);
  const [showInstructionDialog, setShowInstructionDialog] = useState(true);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative" aria-label="Path_home">
      <div className="absolute -left-[420px] top-4 bg-white rounded-lg p-6 shadow-lg max-w-md z-10">
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
      </div>

      <div className="flex items-center justify-center mb-12 relative">
        <h1 className="text-3xl font-bold text-center">Symterra's P.A.T.H Process</h1>
      </div>
      
      <InstructionDialog 
        open={showInstructionDialog} 
        onOpenChange={setShowInstructionDialog}
      />

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <Step 
              key={step.title}
              title={step.title}
              index={index}
              onClick={() => setSelectedStep(step)}
            />
          ))}
        </div>
      </div>

      <StepDetails 
        step={selectedStep} 
        open={!!selectedStep} 
        onOpenChange={(open) => !open && setSelectedStep(null)}
      />
    </div>
  );
};

export default PathProcess;
