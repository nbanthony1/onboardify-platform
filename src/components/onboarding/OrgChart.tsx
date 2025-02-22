
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Role {
  title: string;
  responsibilities: string[];
}

interface Department {
  name: string;
  responsibilities: string[];
  roles: Role[];
}

const OrgChart = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const getResponsibilityExplanation = (resp: string) => {
    const explanations: { [key: string]: string } = {
      "Big Ideas": "Strategic vision and innovative concepts for company growth",
      "Big Relationships": "Building and maintaining key strategic partnerships",
      "R&D": "Directing research and development initiatives",
      "Culture": "Shaping and maintaining company culture and values",

      "LMA": "Lead, Manage, and hold people Accountable",
      "P&L": "Oversight of profit and loss statements",
      "Remove Obstacles": "Identifying and resolving operational bottlenecks",
      "Special Projects": "Managing critical company initiatives",

      "Marketing Strategy": "Developing comprehensive marketing plans and objectives",
      "Lead Generation": "Creating and implementing lead generation campaigns",
      "Analytics & Reporting": "Tracking and analyzing marketing metrics",
      "Market Research": "Conducting market analysis and competitor research",

      "Revenue Growth": "Driving company revenue through sales initiatives",
      "Market Expansion": "Identifying and entering new market opportunities",
      "Client Relations": "Managing and improving client relationships",

      "Manufacturing Process": "Overseeing production and manufacturing operations",
      "QC": "Ensuring quality control standards are met",
      "Logistics": "Managing supply chain and distribution",
      "Tech Support": "Providing technical assistance and support",
      "Asset Management": "Managing company resources and equipment",
    };
    return explanations[resp] || resp;
  };

  const renderTooltipButton = (deptName: string, onClick: () => void, isSelected: boolean) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={`w-40 p-3 rounded-lg transition-colors ${
              isSelected
                ? "bg-primary text-white"
                : deptName === "Sales"
                ? "bg-[#9b87f5]/70 text-white hover:bg-[#9b87f5] border animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#9b87f5]"
                : "bg-white hover:bg-gray-100 border"
            }`}
          >
            <h4 className="font-medium">{deptName}</h4>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to view {deptName}'s responsibilities and roles</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  const departments: Department[] = [
    {
      name: "Visionary",
      responsibilities: [
        "Big Ideas",
        "Big Relationships",
        "R&D",
        "Culture"
      ],
      roles: []
    },
    {
      name: "Integrator",
      responsibilities: [
        "LMA",
        "P&L",
        "Remove Obstacles",
        "Special Projects"
      ],
      roles: []
    },
    {
      name: "Marketing",
      responsibilities: [
        "LMA",
        "Marketing Strategy",
        "Lead Generation",
        "Analytics & Reporting",
        "Market Research"
      ],
      roles: [
        {
          title: "Lead Generation",
          responsibilities: [
            "Pioneering innovative digital acquisition strategies across multiple platforms",
            "Building sustainable organic traffic growth through content leadership",
            "Orchestrating personalized customer journeys through marketing automation",
            "Creating frictionless conversion experiences for qualified prospects",
            "Driving data-informed decisions through advanced analytics"
          ]
        },
        {
          title: "Brand Awareness",
          responsibilities: [
            "Crafting compelling brand narratives that resonate with our target audience",
            "Building social proof through authentic customer success stories",
            "Creating immersive brand experiences through strategic event planning",
            "Establishing consistent brand identity across all touchpoints",
            "Shaping positive brand perception in the market"
          ]
        },
        {
          title: "Sales Support",
          responsibilities: [
            "Equipping sales teams with powerful storytelling tools and resources",
            "Translating product features into compelling customer benefits",
            "Aligning marketing initiatives with revenue-driving opportunities",
            "Delivering actionable competitive intelligence to sales teams",
            "Bridging market insights with sales execution strategies"
          ]
        }
      ]
    },
    {
      name: "Sales",
      responsibilities: [
        "LMA",
        "Revenue Growth",
        "Market Expansion",
        "Client Relations"
      ],
      roles: [
        {
          title: "Account Acquisition",
          responsibilities: [
            "Uncovering and cultivating high-value business opportunities",
            "Creating engaging product narratives that solve customer pain points",
            "Architecting customized solutions that drive customer success",
            "Orchestrating strategic deal progression through the sales cycle",
            "Delivering consistent revenue growth through targeted prospecting"
          ]
        },
        {
          title: "Account Management",
          responsibilities: [
            "Nurturing strategic partnerships through proactive relationship building",
            "Expanding customer value through solution optimization",
            "Ensuring customer success through proactive engagement",
            "Securing long-term partnerships through strategic planning",
            "Maximizing account potential through strategic growth initiatives"
          ]
        }
      ]
    },
    {
      name: "Operations",
      responsibilities: [
        "LMA",
        "Manufacturing Process",
        "QC",
        "Logistics",
        "Tech Support",
        "Asset Management"
      ],
      roles: [
        {
          title: "Logistics",
          responsibilities: [
            "Designing efficient supply chain networks that drive business growth",
            "Creating strategic inventory solutions that optimize cash flow",
            "Orchestrating seamless delivery experiences for customers",
            "Engineering performance metrics that enhance operational efficiency",
            "Implementing innovative solutions for cost optimization"
          ]
        },
        {
          title: "Manufacturing",
          responsibilities: [
            "Orchestrating production excellence through process innovation",
            "Ensuring product excellence through rigorous quality standards",
            "Maximizing operational uptime through preventive maintenance",
            "Driving continuous improvement through operational optimization",
            "Creating safe and efficient manufacturing environments"
          ]
        },
        {
          title: "Customer Service",
          responsibilities: [
            "Delivering exceptional technical solutions through expert support",
            "Creating positive customer experiences through responsive service",
            "Building customer loyalty through measured service excellence",
            "Establishing best practices through knowledge management",
            "Empowering customer success through educational initiatives"
          ]
        }
      ]
    },
    {
      name: "R&D",
      responsibilities: [
        "LMA",
        "Product Development",
        "Regulatory",
        "Compliance"
      ],
      roles: []
    },
    {
      name: "Finance",
      responsibilities: [
        "LMA",
        "Budget/Forecast",
        "Risk Management",
        "Accounting",
        "Reporting",
        "Legal",
        "HR"
      ],
      roles: []
    }
  ];

  return (
    <div className="bg-gray-50 w-full p-6">
      <h3 className="text-xl font-semibold mb-6">Organization Structure</h3>
      
      <div className="inline-block border-2 border-gray-300 rounded-lg px-4 py-2 mb-4">
        <p className="text-sm text-gray-600 italic">Tap a Departmental cell to view Roles and Responsibilities.</p>
      </div>
      
      <div className="flex flex-col items-center space-y-4 transform scale-[0.715] origin-top">
        {/* Visionary - Top Level */}
        <div className="w-36">
          {renderTooltipButton(
            "Visionary",
            () => setSelectedDept(departments[0]),
            selectedDept?.name === "Visionary"
          )}
        </div>

        <div className="h-4 w-px bg-gray-300"></div>

        {/* Integrator - Second Level */}
        <div className="w-36">
          {renderTooltipButton(
            "Integrator",
            () => setSelectedDept(departments[1]),
            selectedDept?.name === "Integrator"
          )}
        </div>

        <div className="h-4 w-px bg-gray-300"></div>

        {/* Main Departments Row */}
        <div className="flex justify-center gap-3">
          {["Marketing", "Sales", "Operations", "R&D", "Finance"].map((deptName) => (
            <div key={deptName} className="flex flex-col items-center">
              {renderTooltipButton(
                deptName,
                () => setSelectedDept(departments.find(d => d.name === deptName) || null),
                selectedDept?.name === deptName
              )}

              {/* Sub-roles for specific departments */}
              {(deptName === "Marketing" || deptName === "Sales" || deptName === "Operations") && (
                <>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <div className="flex gap-3">
                    {deptName === "Marketing" && (
                      <>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[2].roles[0])}
                            >
                              Lead Generation
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[2].roles[1])}
                            >
                              Brand Awareness
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[2].roles[2])}
                            >
                              Sales Support
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </>
                    )}
                    {deptName === "Sales" && (
                      <>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[3].roles[0])}
                            >
                              Account Acquisition
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[3].roles[1])}
                            >
                              Account Management
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </>
                    )}
                    {deptName === "Operations" && (
                      <>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[4].roles[0])}
                            >
                              Logistics
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[4].roles[1])}
                            >
                              Manufacturing
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-32 p-2 rounded-lg bg-gray-50 border text-sm hover:bg-gray-100"
                              onClick={() => setSelectedRole(departments[4].roles[2])}
                            >
                              Customer Service
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view role details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Department Details Dialog */}
      <Dialog open={!!selectedDept} onOpenChange={(open) => !open && setSelectedDept(null)}>
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedDept?.name}</DialogTitle>
          </DialogHeader>
          {selectedDept?.responsibilities && (
            <div className="space-y-4">
              <h4 className="font-medium">Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {selectedDept.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{resp}:</span>
                    <br />
                    <span className="text-gray-600">{getResponsibilityExplanation(resp)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Role Details Dialog */}
      <Dialog open={!!selectedRole} onOpenChange={(open) => !open && setSelectedRole(null)}>
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedRole?.title}</DialogTitle>
          </DialogHeader>
          {selectedRole?.responsibilities && (
            <div className="space-y-4">
              <h4 className="font-medium">Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {selectedRole.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{resp}</span>
                    <br />
                    <span className="text-gray-600">{getResponsibilityExplanation(resp)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrgChart;
