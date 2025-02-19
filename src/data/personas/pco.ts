import { PersonaData } from "./types";

export const pcoData: PersonaData = {
  persona: {
    image: "/assets/michael.jpg",
    name: "Michael",
    age: 45,
    occupation: "Pest Control Operations Manager",
    status: "Full-time",
    location: "Denver, CO",
    life: "Married, Industry veteran",
    traits: [
      { name: "Results-driven" },
      { name: "Skeptical of new tech" },
      { name: "Cost-conscious" },
      { name: "Practical" },
      { name: "Detail-oriented" },
      { name: "Customer-focused" },
    ],
    goals: [
      "Find effective bird deterrent solutions",
      "Reduce customer complaints",
      "Minimize operational costs",
      "Differentiate from competitors",
    ],
    frustrations: [
      "High costs of ineffective bird deterrents",
      "Recurring customer complaints",
      "Lack of reliable long-term solutions",
      "Time wasted on temporary fixes",
    ],
    motivation: "As an Operations Manager at a leading pest control company, Michael needs to find reliable, cost-effective solutions for his clients' bird problems. He's skeptical of new technology but open to solutions that can demonstrate clear ROI and proven effectiveness.",
    quote: "I need a bird deterrent solution that actually works and keeps my customers happy.",
  },
  journeyMap: {
    persona: "Pest Control Operator",
    scenario: "Evaluating and implementing new bird deterrent solutions",
    expectations: [
      "Proven effectiveness in real-world conditions",
      "Clear return on investment",
      "Easy implementation and maintenance",
      "Reliable technical support",
    ],
    phases: [
      {
        name: "Awareness",
        doing: [
          "Researching new solutions",
          "Reading industry publications",
          "Attending trade shows",
        ],
        thinking: [
          "Current solutions aren't effective enough",
          "Need to find better alternatives",
        ],
        saying: [
          "We need a more reliable solution",
          "Our customers aren't satisfied",
        ],
      },
      {
        name: "Consideration",
        doing: [
          "Comparing different solutions",
          "Calculating potential ROI",
          "Consulting with peers",
        ],
        thinking: [
          "Will this solution be cost-effective?",
          "How will it affect our operations?",
        ],
        saying: [
          "Show me the proof it works",
          "What's the total cost of ownership?",
        ],
      },
      {
        name: "Decision",
        doing: [
          "Conducting pilot tests",
          "Reviewing performance data",
          "Getting team buy-in",
        ],
        thinking: [
          "This could improve our service offering",
          "Need to ensure proper implementation",
        ],
        saying: [
          "Let's try it in a test location",
          "We need training for our team",
        ],
      },
      {
        name: "Implementation",
        doing: [
          "Training service teams",
          "Updating service packages",
          "Monitoring results",
        ],
        thinking: [
          "How can we maximize effectiveness?",
          "Need to track customer satisfaction",
        ],
        saying: [
          "Our teams need to understand this fully",
          "Let's document the results",
        ],
      },
    ],
    opportunities: [
      "Provide comprehensive training materials",
      "Develop case studies with ROI data",
      "Create implementation guides",
      "Establish dedicated support channels",
    ],
    internalOwnership: [
      "Sales: ROI calculator and pricing tools",
      "Training: Technical certification program",
      "Support: Installation and maintenance guides",
      "Marketing: Success stories and testimonials",
    ],
  },
};
