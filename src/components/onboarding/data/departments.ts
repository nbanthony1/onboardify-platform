
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
          "Develop and execute multi-channel lead generation campaigns",
          "Implement SEO strategies to increase organic traffic",
          "Manage email marketing and CRM systems",
          "Optimize website conversion paths",
          "Track and analyze lead metrics"
        ]
      },
      {
        title: "Brand Awareness",
        responsibilities: [
          "Develop and execute PR strategies",
          "Manage customer testimonial program",
          "Plan and coordinate industry events",
          "Create brand guidelines",
          "Monitor brand perception"
        ]
      },
      {
        title: "Sales Support",
        responsibilities: [
          "Create sales enablement materials",
          "Develop product presentations and collateral",
          "Manage marketing campaigns aligned with sales goals",
          "Provide competitive analysis",
          "Support sales team with market insights"
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
          "Identify and qualify new business opportunities",
          "Conduct product demonstrations and presentations",
          "Develop and negotiate proposals",
          "Manage sales pipeline effectively",
          "Execute closing strategies"
        ]
      },
      {
        title: "Account Management",
        responsibilities: [
          "Maintain strong client relationships",
          "Identify upsell and cross-sell opportunities",
          "Monitor account health and satisfaction",
          "Manage contract renewals",
          "Develop account growth strategies"
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
          "Optimize supply chain operations",
          "Manage inventory levels and warehousing",
          "Coordinate shipping and delivery",
          "Track and improve delivery performance",
          "Implement cost-saving measures"
        ]
      },
      {
        title: "Manufacturing",
        responsibilities: [
          "Oversee production processes",
          "Maintain quality control standards",
          "Manage equipment maintenance",
          "Implement efficiency improvements",
          "Ensure safety compliance"
        ]
      },
      {
        title: "Customer Service",
        responsibilities: [
          "Provide technical support and troubleshooting",
          "Handle customer inquiries and issues",
          "Maintain customer satisfaction metrics",
          "Document support processes",
          "Train customers on product usage"
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
