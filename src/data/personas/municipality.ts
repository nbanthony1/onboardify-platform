
import { PersonaData } from "./types";

export const municipality: PersonaData = {
  persona: {
    image: "/photo-1581092795360-fd1ca04f0952",
    name: "Robert",
    age: 52,
    occupation: "Public Works Director",
    status: "Full-time",
    location: "Seattle, WA",
    life: "Married, 20+ years in public service",
    traits: [
      { name: "Risk-averse" },
      { name: "Process-driven" },
      { name: "Public-focused" },
      { name: "Budget-conscious" },
      { name: "Regulation-aware" },
      { name: "Methodical" },
    ],
    goals: [
      "Ensure public safety",
      "Maintain public spaces",
      "Meet environmental standards",
      "Optimize budget allocation",
    ],
    frustrations: [
      "Limited budget resources",
      "Public complaints",
      "Ineffective solutions",
      "Complex approval processes",
    ],
    motivation: "As a Public Works Director, Robert is responsible for maintaining city infrastructure and public spaces. He needs proven, cost-effective solutions that meet strict regulatory requirements and address public concerns.",
    quote: "We need a solution that serves the public interest and meets our environmental standards.",
  },
  journeyMap: {
    persona: "Municipality",
    scenario: "Public space bird control implementation",
    expectations: [
      "Public safety compliance",
      "Environmental standards adherence",
      "Budget efficiency",
      "Community acceptance",
    ],
    phases: [
      {
        name: "Assessment",
        doing: [
          "Evaluating public needs",
          "Reviewing regulations",
          "Assessing current state",
        ],
        thinking: [
          "What's the public impact?",
          "How to meet all requirements?",
        ],
        saying: [
          "We need community input",
          "Must meet all standards",
        ],
      },
      {
        name: "Planning",
        doing: [
          "Budget allocation",
          "Stakeholder engagement",
          "Procurement process",
        ],
        thinking: [
          "Is this the best use of funds?",
          "Will the public approve?",
        ],
        saying: [
          "Let's review all options",
          "Need public feedback",
        ],
      },
      {
        name: "Implementation",
        doing: [
          "Public communication",
          "Phased rollout",
          "Progress monitoring",
        ],
        thinking: [
          "Are we meeting timeline?",
          "How's public response?",
        ],
        saying: [
          "Keep the public informed",
          "Monitor all feedback",
        ],
      },
      {
        name: "Review",
        doing: [
          "Effectiveness assessment",
          "Public feedback analysis",
          "Compliance verification",
        ],
        thinking: [
          "Are we achieving goals?",
          "Is the public satisfied?",
        ],
        saying: [
          "Show me the impact data",
          "What's the public saying?",
        ],
      },
    ],
    opportunities: [
      "Develop public communication plans",
      "Create compliance documentation",
      "Establish monitoring protocols",
      "Design feedback systems",
    ],
    internalOwnership: [
      "Public Works: Implementation",
      "Communications: Public outreach",
      "Legal: Compliance oversight",
      "Finance: Budget management",
    ],
  },
};
