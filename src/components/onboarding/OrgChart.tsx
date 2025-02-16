
import React, { useState } from 'react';

interface Department {
  name: string;
  role: string;
  responsibilities: string[];
  collaborations?: string[];
}

const OrgChart = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const departments: Department[] = [
    {
      name: "Sales",
      role: "Revenue Generation & Client Relations",
      responsibilities: [
        "Lead generation and conversion",
        "Account management",
        "Market expansion",
        "Revenue growth"
      ],
      collaborations: [
        "Works with Marketing on lead qualification",
        "Coordinates with Operations for implementation",
        "Partners with Product for solution customization"
      ]
    },
    {
      name: "Operations",
      role: "Solution Implementation & Support",
      responsibilities: [
        "Product installation",
        "Quality control",
        "Technical support",
        "Maintenance services"
      ]
    },
    {
      name: "Marketing",
      role: "Brand & Lead Generation",
      responsibilities: [
        "Lead generation",
        "Brand awareness",
        "Market research",
        "Content creation"
      ]
    },
    {
      name: "Product",
      role: "Solution Development",
      responsibilities: [
        "Product innovation",
        "Technical specifications",
        "Product roadmap",
        "Quality assurance"
      ]
    }
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Interactive Organization Chart</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {departments.map((dept) => (
          <button
            key={dept.name}
            onClick={() => setSelectedDept(dept)}
            className={`p-4 rounded-lg transition-colors ${
              selectedDept?.name === dept.name
                ? "bg-primary text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <h4 className="font-medium mb-2">{dept.name}</h4>
            <p className="text-sm opacity-80">{dept.role}</p>
          </button>
        ))}
      </div>

      {selectedDept && (
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">{selectedDept.name} Department</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {selectedDept.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            {selectedDept.collaborations && (
              <div>
                <h4 className="font-medium mb-2">Cross-Department Collaboration:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedDept.collaborations.map((collab, index) => (
                    <li key={index}>{collab}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgChart;
