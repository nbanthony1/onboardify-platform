
import CustomerPersona from "@/components/onboarding/CustomerPersona";
import CustomerJourneyMap from "@/components/onboarding/CustomerJourneyMap";

const Index = () => {
  // PCO Persona data
  const pcoPersona = {
    image: "/placeholder.svg",
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
  };

  // PCO Journey Map
  const pcoJourneyMap = {
    persona: "PEST CONTROL OPERATOR",
    scenario: "Michael is evaluating new bird deterrent solutions for his company's service offerings.",
    expectations: [
      "Proven effectiveness",
      "Clear cost-benefit analysis",
      "Easy implementation",
      "Strong technical support",
    ],
    phases: [
      {
        name: "RESEARCH",
        doing: [
          "Reviewing current solutions",
          "Researching new technologies",
          "Calculating current costs",
        ],
        thinking: [
          "Most solutions don't last long enough.",
        ],
        saying: [
          "We need something more effective than what we're using.",
        ],
      },
      {
        name: "EVALUATE",
        doing: [
          "Comparing solution costs",
          "Reading case studies",
          "Consulting industry peers",
        ],
        thinking: [
          "Will this actually deliver ROI?",
        ],
        saying: [
          "Show me proof that this works.",
        ],
      },
      {
        name: "TEST",
        doing: [
          "Running pilot program",
          "Monitoring results",
          "Gathering client feedback",
        ],
        thinking: [
          "Initial results look promising.",
        ],
        saying: [
          "Let's see how it performs in real conditions.",
        ],
      },
      {
        name: "IMPLEMENT",
        doing: [
          "Training service teams",
          "Updating service offerings",
          "Rolling out to clients",
        ],
        thinking: [
          "This could be a game-changer.",
        ],
        saying: [
          "Our clients will appreciate this solution.",
        ],
      },
    ],
    opportunities: [
      "Provide detailed ROI calculators",
      "Create comprehensive training programs",
      "Develop case studies and testimonials",
      "Offer technical support and implementation guidance",
    ],
    internalOwnership: [
      "Sales Team: Create ROI presentation materials",
      "Training Team: Develop implementation guides",
      "Support Team: Establish technical support program",
      "Marketing Team: Produce case studies",
    ],
  };

  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Customer Research</h1>
        <p className="text-muted-foreground">
          Understanding Symterra's target market through personas and journey mapping
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Customer Persona</h2>
        <CustomerPersona {...pcoPersona} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Customer Journey Map</h2>
        <CustomerJourneyMap {...pcoJourneyMap} />
      </div>
    </div>
  );
};

export default Index;
