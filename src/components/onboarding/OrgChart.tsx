
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

  const renderTooltipButton = (deptName: string, onClick: () => void, isSelected: boolean) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={`w-40 p-3 rounded-lg transition-colors ${
              isSelected
                ? "bg-primary text-white"
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

  return (
    <div className="bg-gray-50 w-full p-6">
      <h3 className="text-xl font-semibold mb-6">Organization Structure</h3>
      
      <div className="flex flex-col items-center space-y-6 transform scale-80">
        {/* Visionary - Top Level */}
        <div className="w-40">
          {renderTooltipButton(
            "Visionary",
            () => setSelectedDept(departments[0]),
            selectedDept?.name === "Visionary"
          )}
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        {/* Integrator - Second Level */}
        <div className="w-40">
          {renderTooltipButton(
            "Integrator",
            () => setSelectedDept(departments[1]),
            selectedDept?.name === "Integrator"
          )}
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        {/* Main Departments Row */}
        <div className="flex justify-center gap-4">
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
                  <div className="h-6 w-px bg-gray-300"></div>
                  <div className="flex gap-4">
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
              <ul className="list-disc pl-5 space-y-1">
                {selectedDept.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm">{resp}</li>
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
              <ul className="list-disc pl-5 space-y-1">
                {selectedRole.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm">{resp}</li>
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
