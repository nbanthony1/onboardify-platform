
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Step {
  title: string;
  description: string[];
}

const PathProcess = () => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  const [showInstructionDialog, setShowInstructionDialog] = useState(true);

  const steps: Step[] = [
    {
      title: "Problem Assessment",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• We will **partner with you** to conduct a comprehensive evaluation of your site to understand your specific bird challenges",
        "",
        "• We take bird species, behavior patterns, and environmental factors affecting your property into consideration in working toward your **customized solution**",
        "",
        "• We work with you to **develop a goal-oriented plan** for reducing bird activity",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with **all steps**",
        "",
        "• **Deep data collection** for R&D and product development"
      ]
    },
    {
      title: "Advanced Solution Design",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• Using **proprietary pulse-based technology**, we create a **customized deterrence solution** tailored to your needs",
        "",
        "• Our solutions are designed to be **effective, non-invasive, and long-lasting**",
        "",
        "• We ensure the system is aligned with your **operational goals and environmental policies**",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with all steps",
        "",
        "• **Pilot testing and internal validation** before full implementation"
      ]
    },
    {
      title: "Technology Implementation",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• Ship the system **directly to you** or your designated installer",
        "",
        "• Provide **comprehensive installation guidelines** to ensure correct setup",
        "",
        "• **Offer real-time virtual assistance** during installation to guide the process and answer any questions",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with all steps",
        "",
        "• **Internal quality checks** ensure correct setup before delivery"
      ]
    },
    {
      title: "Hands-On Support",
      description: [
        "Front of the house",
        "Sales, Operations, Leadership",
        "",
        "• We **provide onboarding and training** for your team to maximize the system's impact",
        "",
        "• Our support specialists are **available to answer questions and provide assistance** as needed",
        "",
        "• You receive **ongoing guidance and best practices** to maintain long-term effectiveness",
        "",
        "Back of the house",
        "R&D, Operations, Leadership",
        "",
        "• We Support the front of the house with all steps",
        "",
        "• **Training internal staff and partners** to ensure knowledge transfer"
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
        "• **Measure reductions** in bird activity and collect client feedback",
        "",
        "• Generate **performance reports** to validate system effectiveness",
        "",
        "• Conduct **optimization reviews**"
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
        "• Use **refine solutions** with R&D insights and evolving data",
        "",
        "• **Strengthen client relationships** through ongoing engagement and technical improvements",
        "",
        ""
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" aria-label="Path_home">
      <div className="flex items-center justify-center mb-12 relative">
        <div className="flex items-center">
          <button
            onClick={() => setSelectedStep(steps[0])}
            className="w-8 h-8 rounded-full bg-[#9b87f5] 
                      hover:bg-[#7e69ab] transition-colors duration-200 
                      flex items-center justify-center cursor-pointer
                      shadow-[0_2px_4px_rgba(0,0,0,0.2)] mr-3"
            aria-label="View PATH Process Overview"
          />
          <span className="absolute -left-2 text-xs text-gray-600">Tap here</span>
        </div>
        <h1 className="text-3xl font-bold text-center">Symterra's P.A.T.H Process</h1>
      </div>
      
      <Dialog open={showInstructionDialog} onOpenChange={setShowInstructionDialog}>
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

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative flex items-center"
            >
              <button
                onClick={() => setSelectedStep(step)}
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
