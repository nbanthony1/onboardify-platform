import React, { useState, useEffect } from 'react';
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
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
                ? "bg-[#9b87f5]/90 text-white hover:bg-[#9b87f5] border animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#9b87f5]"
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
            "Multi Channel",
            "SEO",
            "Email/CRM",
            "Website"
          ]
        },
        {
          title: "Brand Awareness",
          responsibilities: [
            "PR",
            "Testimonials",
            "Events"
          ]
        },
        {
          title: "Sales Support",
          responsibilities: [
            "Sales Enablement",
            "Content Creation",
            "Campaign Management"
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
            "Lead Qualification",
            "Prospect Outreach",
            "Solution Presentation",
            "Contract Negotiation",
            "Pipeline Management"
          ]
        },
        {
          title: "Account Management",
          responsibilities: [
            "Client Relationship Building",
            "Account Growth Strategy",
            "Customer Success Monitoring",
            "Renewal Management",
            "Cross-selling Opportunities"
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
            "Inventory Management",
            "Supply Chain Optimization",
            "Shipping Coordination",
            "Order Fulfillment",
            "Warehouse Operations"
          ]
        },
        {
          title: "Manufacturing",
          responsibilities: [
            "Production Planning",
            "Quality Control",
            "Process Optimization",
            "Equipment Maintenance",
            "Safety Compliance"
          ]
        },
        {
          title: "Customer Service",
          responsibilities: [
            "Technical Support",
            "Issue Resolution",
            "Customer Training",
            "Product Support",
            "Service Documentation"
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
    <div className="bg-gray-50 w-full p-6 relative">
      <h3 className="text-xl font-semibold mb-6">Organization Structure</h3>
      
      {showAnimation && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="relative w-full h-full">
            <div 
              className="w-8 h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-move-cursor"
              style={{
                background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"M12 5l7 7-7 7\"/></svg>') no-repeat",
                filter: "drop-shadow(0 0 2px rgba(0,0,0,0.3))"
              }}
            />
            <div 
              className="absolute left-1/2 top-1/2 bg-white rounded-lg shadow-lg p-4 w-64 opacity-0 animate-show-dialog"
              style={{
                animationDelay: "0.75s"
              }}
            >
              <h4 className="font-medium mb-2">Department Details</h4>
              <p className="text-sm text-gray-600">View roles and responsibilities</p>
            </div>
          </div>
        </div>
      )}
      
      <p className="text-sm text-gray-600 mb-4 italic">Tap a Departmental cell to view Roles and Responsibilities.</p>
      
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

      <style>
        {`
          @keyframes move-cursor {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
            20% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            40% { transform: translate(-50%, -50%) scale(0.95); opacity: 1; }
            60% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
          }

          @keyframes show-dialog {
            0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
          }

          .animate-move-cursor {
            animation: move-cursor 1.5s ease-in-out infinite;
          }

          .animate-show-dialog {
            animation: show-dialog 1.5s ease-in-out infinite;
          }
        `}
      </style>

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
