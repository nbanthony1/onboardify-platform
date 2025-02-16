import React, { useState } from 'react';

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
        }
      ]
    },
    {
      name: "Sales",
      responsibilities: [],
      roles: [
        {
          title: "Leadership, Management, and Accountability",
          responsibilities: [
            "Providing strategic direction, setting clear goals, and ensuring alignment with company objectives",
            "Developing and executing a structured approach to identifying, engaging, and converting prospects",
            "Meeting and exceeding revenue, conversion, and performance goals through effective execution"
          ]
        },
        {
          title: "Account Acquisition",
          responsibilities: [
            "Identifying Opportunities – Researching market trends and targeting potential clients that align with Symterra's value proposition",
            "Acquiring Accounts – Implementing effective outreach strategies to convert leads into customers",
            "Closing Deals – Negotiating contracts and finalizing agreements to secure long-term client relationships"
          ]
        },
        {
          title: "Account Management",
          responsibilities: [
            "Grow Revenue – Expanding business with existing clients through upselling and cross-selling opportunities",
            "Client Adoption – Ensuring customers integrate and utilize Symterra's solutions effectively",
            "Relationship Management – Building and maintaining strong partnerships with PCOs, commercial enterprises, and municipalities to ensure long-term adoption and success"
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
            <h4 className="font-medium">{dept.name}</h4>
          </button>
        ))}
      </div>

      {/* Department Details */}
      {selectedDept && (
        <div className="bg-white p-6 rounded-lg border space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">{selectedDept.name}</h3>
          </div>

          {selectedDept.responsibilities.length > 0 && (
            <div>
              <h4 className="font-medium mb-3">Department Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {selectedDept.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedDept.roles.length > 0 && (
            <div>
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
