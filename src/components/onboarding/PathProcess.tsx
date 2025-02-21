
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Step {
  title: string;
  description: string[];
}

const PathProcess = () => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  const steps: Step[] = [
    {
      title: "Problem Assessment",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• We will partner with you to conduct a comprehensive evaluation of your site to understand your specific bird challenges",
        "",
        "• We take bird species, behavior patterns, and environmental factors affecting your property into consideration in working toward your customized solution",
        "",
        "• We work with you to develop a goal-oriented plan for reducing bird activity",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with all steps",
        "",
        "• Deep data collection for R&D and product development"
      ]
    },
    {
      title: "Advanced Solution Design",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• Using **proprietary** pulse-based technology, we create a customized deterrence solution tailored to your needs",
        "",
        "• Our solutions are designed to be **effective**, non-invasive, and long-lasting",
        "",
        "• We ensure the system is aligned with your operational goals and environmental policies",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with all steps",
        "",
        "• Pilot testing and internal validation before full implementation"
      ]
    },
    {
      title: "Technology Implementation",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• Ship the system directly to you or your designated installer",
        "",
        "• Provide **comprehensive** installation guidelines to ensure correct setup",
        "",
        "• Offer real-time virtual assistance during installation to guide the process and answer any questions",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with all steps",
        "",
        "• Internal quality checks ensure correct setup before delivery"
      ]
    },
    {
      title: "Hands-On Support",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• We provide **ongoing** training for your team to maximize the system's impact",
        "",
        "• Our support specialists are available to answer questions and provide assistance as needed",
        "",
        "• You receive ongoing guidance and best practices to maintain long-term effectiveness",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with all steps",
        "",
        "• Training internal staff and partners to ensure knowledge transfer"
      ]
    },
    {
      title: "Results Validation",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• Support the back of the house with all steps",
        "",
        "",
        "",
        "",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• **Monthly** reductions in bird activity and collect client feedback",
        "",
        "• Generate **detailed** performance reports to validate system effectiveness",
        "",
        "• Conduct optimization reviews"
      ]
    },
    {
      title: "Continuous Improvement",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• Support the back of the house with all steps",
        "",
        "",
        "",
        "",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• Use **continuous** R&D insights and evolving data to refine solutions",
        "",
        "• Strengthen client relationships through ongoing engagement and **consistent** technical improvements",
        "",
        ""
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" aria-label="Path_home">
      <h1 className="text-3xl font-bold text-center mb-12">Symterra's P.A.T.H Process</h1>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
        
        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative flex items-center"
            >
              {/* Circle with shadow */}
              <button
                onClick={() => setSelectedStep(step)}
                className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#9b87f5] 
                          hover:bg-[#7e69ab] transition-colors duration-200 
                          flex items-center justify-center cursor-pointer
                          shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                aria-label={`View ${step.title} details`}
              />
              
              {/* Title */}
              <h3 
                className={`text-xl font-semibold ${
                  index < 4 
                    ? 'mr-auto ml-3' // First 4 items: align left, 12px from oval
                    : 'ml-3' // Last 2 items: align right, 12px from oval
                }`}
              >
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog for all step details */}
      <Dialog open={!!selectedStep} onOpenChange={(open) => !open && setSelectedStep(null)}>
        <DialogContent 
          className="max-w-4xl bg-white rounded-lg p-8" 
          aria-label={
            selectedStep?.title === "Technology Implementation" ? "Technology_1" :
            selectedStep?.title === "Advanced Solution Design" ? "Advanced_1" :
            selectedStep?.title === "Hands-On Support" ? "Hands_On_Support_1" :
            selectedStep?.title === "Results Validation" ? "Results_Validation_1" :
            selectedStep?.title === "Continuous Improvement" ? "Continuous_Improvement_1" :
            "Problem Assessment_1"
          }
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#9b87f5] shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
            <h2 className="text-2xl font-bold">{selectedStep?.title}</h2>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Front of the house</h3>
              <h4 className="text-xl text-gray-600">Sales, Operations, Leadership</h4>
              <div className="space-y-4">
                {selectedStep?.description.slice(3, 8).map((point, index) => {
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
                {selectedStep?.description.slice(12).map((point, index) => {
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
    </div>
  );
};

export default PathProcess;
