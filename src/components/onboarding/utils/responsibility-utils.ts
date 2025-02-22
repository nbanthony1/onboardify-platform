
export const getResponsibilityExplanation = (resp: string) => {
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
