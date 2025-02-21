
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Step {
  title: string;
  description: string[];
}

const PathProcess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  const steps: Step[] = [
    {
      title: "Problem Assessment",
      description: [
        "• Conduct site evaluations to identify bird activity, environmental factors, and specific challenges",
        "• Gather data on species behavior and areas of infestation",
        "• Align with client goals (compliance, maintenance reduction, ESG initiatives)"
      ]
    },
    {
      title: "Advanced Solution Design",
      description: [
        "• Develop a customized deterrent strategy based on structural and environmental factors",
        "• Integrate Symterra's proprietary pulse-based technology to create an effective, non-invasive deterrent",
        "• Ensure cost efficiency and seamless alignment with client operations"
      ]
    },
    {
      title: "Technology Implementation",
      description: [
        "• Deliver and ship the system to the customer or their designated installer",
        "• Provide detailed installation guidelines and virtual assistance",
        "• Ensure proper setup and testing for optimal performance"
      ]
    },
    {
      title: "Hands-On Support",
      description: [
        "• Train client teams and partners on system use and maintenance",
        "• Provide ongoing customer support to address operational concerns",
        "• Offer troubleshooting and best practices for long-term success"
      ]
    },
    {
      title: "Results Validation",
      description: [
        "• Measure reductions in bird activity and collect client feedback",
        "• Generate performance reports to validate system effectiveness",
        "• Conduct optimization reviews"
      ]
    },
    {
      title: "Continuous Improvement",
      description: [
        "• Use R&D insights and evolving data to refine solutions",
        "• Strengthen client relationships through ongoing engagement and technical improvements"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title card with elevation and border */}
      <div 
        className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-12 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setIsOpen(true)}
      >
        <h1 className="text-3xl font-bold mb-6">Symterra's P.A.T.H Process</h1>
        <div className="space-y-4 text-gray-600">
          <p>
            <strong className="text-gray-900">A step-by-step methodology</strong> to ensure consistent, effective, and scalable bird control solutions
          </p>
          <p>
            Company-driven execution for <strong className="text-gray-900">optimization and success</strong>
          </p>
          <p>
            Builds client <strong className="text-gray-900">trust, ensures compliance, and enhances long-term success</strong>
          </p>
        </div>
      </div>
      
      {/* Main Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Symterra's P.A.T.H Process</DialogTitle>
          </DialogHeader>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            
            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-end pr-[52%]' : 'justify-start pl-[52%]'
                  }`}
                >
                  {/* Circle without animation */}
                  <button
                    onClick={() => setSelectedStep(step)}
                    className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#9b87f5] 
                              hover:bg-[#7e69ab] transition-colors duration-200 
                              flex items-center justify-center cursor-pointer"
                    aria-label={`View ${step.title} details`}
                  />
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Step Details Dialog */}
      <Dialog open={!!selectedStep} onOpenChange={(open) => !open && setSelectedStep(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedStep?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedStep?.description.map((point, index) => (
              <p key={index} className="text-gray-700">{point}</p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PathProcess;
