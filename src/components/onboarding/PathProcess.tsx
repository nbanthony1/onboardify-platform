
import React, { useState } from 'react';
import { Step } from './types/path-process';
import { pathSteps } from './data/path-steps';
import InstructionDialog from './components/InstructionDialog';
import StepDialog from './components/StepDialog';

const PathProcess = () => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  const [showInstructionDialog, setShowInstructionDialog] = useState(true);
  const [showFirstPulse, setShowFirstPulse] = useState(false);

  const handleStepClick = (stepIndex: number) => {
    setSelectedStep(pathSteps[stepIndex]);
  };

  const handleDialogClose = () => {
    if (selectedStep) {
      setSelectedStep(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" aria-label="Path_home">
      <div className="flex items-center justify-center mb-12 relative">
        <div className="flex items-center">
          <button
            onClick={() => handleStepClick(0)}
            className={`w-8 h-8 rounded-full bg-[#9b87f5] 
                      hover:bg-[#7e69ab] transition-colors duration-200 
                      flex items-center justify-center cursor-pointer
                      shadow-[0_2px_4px_rgba(0,0,0,0.2)] mr-3
                      ${showFirstPulse ? '[animation:pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]' : ''}`}
            aria-label="View PATH Process Overview"
          />
        </div>
        <h1 className="text-3xl font-bold text-center">Symterra's P.A.T.H. Process</h1>
      </div>
      
      <InstructionDialog 
        open={showInstructionDialog} 
        onOpenChange={(isOpen) => {
          setShowInstructionDialog(isOpen);
          if (!isOpen) {
            setShowFirstPulse(true);
          }
        }}
      />

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
        
        <div className="space-y-24">
          {pathSteps.map((step, index) => (
            <div 
              key={step.title}
              className="relative flex items-center"
            >
              <button
                onClick={() => handleStepClick(index)}
                className={`w-8 h-8 rounded-full bg-[#9b87f5] 
                          hover:bg-[#7e69ab] transition-colors duration-200 
                          flex items-center justify-center cursor-pointer
                          shadow-[0_2px_4px_rgba(0,0,0,0.2)]
                          ${index < 4 ? 'ml-[calc(50%-1rem)]' : 'ml-[calc(50%-1rem)]'}`}
                aria-label={`View ${step.title} details`}
              />
              
              <h3 
                className={`text-xl font-semibold ${
                  index < 4 
                    ? 'ml-3' 
                    : 'ml-3'
                }`}
              >
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <StepDialog step={selectedStep} onClose={handleDialogClose} />
    </div>
  );
};

export default PathProcess;
