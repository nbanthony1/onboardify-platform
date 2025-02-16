
import React, { useState } from 'react';

interface Role {
  title: string;
  responsibilities: string[];
}

interface Department {
  name: string;
  leader: string;
  roles: Role[];
  responsibilities: string[];
}

const OrgChart = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const departments: Department[] = [
    {
      name: "Visionary",
      leader: "John",
      responsibilities: [
        "Big Ideas",
        "Big Learning",
        "R&D",
        "Culture"
      ],
      roles: []
    },
    {
      name: "Integrator",
      leader: "Nick",
      responsibilities: [
        "LMA",
        "P&L",
        "Remove Obstacles",
        "Process",
        "Projects"
      ],
      roles: []
    },
    {
      name: "Marketing",
      leader: "John",
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
        }
      ]
    },
    {
      name: "Sales",
      leader: "Sara",
      responsibilities: [
        "LMA",
        "Sales Strategy",
        "Sales Tools",
        "Account Management"
      ],
      roles: [
        {
          title: "Sales Support",
          responsibilities: [
            "Net Culture",
            "Resources",
            "LDI",
            "CRM",
            "Comm/Newsletter"
          ]
        },
        {
          title: "Account Acquisition",
          responsibilities: [
            "Identifying",
            "Acquiring",
            "Closing"
          ]
        },
        {
          title: "Account Management",
          responsibilities: [
            "Grow Revenue",
            "Client Adoption",
            "Relationship Management"
          ]
        }
      ]
    },
    {
      name: "Operations",
      leader: "Daryl",
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
            "Ship/Receive",
            "Inventory Control",
            "Customer Order",
            "Fulfillment"
          ]
        },
        {
          title: "Manufacturing",
          responsibilities: [
            "QC",
            "Inventory Control",
            "Production",
            "Sourcing"
          ]
        },
        {
          title: "Customer Service",
          responsibilities: [
            "Training",
            "Troubleshooting",
            "Onboarding"
          ]
        }
      ]
    },
    {
      name: "R&D",
      leader: "John",
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
      leader: "Daryl",
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
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-6">Organization Structure</h3>
      
      {/* Top Level Departments */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {departments.map((dept) => (
          <button
            key={dept.name}
            onClick={() => setSelectedDept(dept)}
            className={`p-4 rounded-lg transition-colors ${
              selectedDept?.name === dept.name
                ? "bg-primary text-white"
                : "bg-white hover:bg-gray-100 border"
            }`}
          >
            <h4 className="font-medium mb-1">{dept.name}</h4>
            <p className="text-sm opacity-80">Lead: {dept.leader}</p>
          </button>
        ))}
      </div>

      {/* Department Details */}
      {selectedDept && (
        <div className="bg-white p-6 rounded-lg border space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">{selectedDept.name} Department</h3>
            <p className="text-muted-foreground">Led by {selectedDept.leader}</p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Department Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {selectedDept.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          {selectedDept.roles.length > 0 && (
            <div>
              <h4 className="font-medium mb-3">Key Roles:</h4>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {selectedDept.roles.map((role, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50">
                    <h5 className="font-medium mb-2">{role.title}</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {role.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrgChart;
