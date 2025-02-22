
import { Department } from '../types/org-chart';

export const departments: Department[] = [
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
          "Multi-Channel Lead Generation",
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
          "Market Collateral",
          "Presentations",
          "Letters of Intent",
          "CRM",
          "Commercial Work",
          "Newsletter"
        ]
      }
    ],
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
          "Shipping & Receiving",
          "Inventory Control",
          "Customs Broker"
        ]
      },
      {
        title: "Manufacturing",
        responsibilities: [
          "Quality Control",
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
