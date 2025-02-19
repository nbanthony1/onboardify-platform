
import CustomerPersona from "@/components/onboarding/CustomerPersona";
import CustomerJourneyMap from "@/components/onboarding/CustomerJourneyMap";

const Index = () => {
  // Example data for Jordan's persona
  const jordanPersona = {
    image: "/lovable-uploads/26c697a8-2f40-458b-964f-88f8a37ee13a.png",
    name: "Jordan",
    age: 28,
    occupation: "Graphic Designer",
    status: "Full-time",
    location: "Work from home",
    life: "Married, Mom of two",
    traits: [
      { name: "Tech Savvy" },
      { name: "Spontaneous" },
      { name: "Risk Taker" },
      { name: "Passionate" },
      { name: "Successful" },
      { name: "Finance Novice" },
    ],
    goals: [
      "Create beautifully designed client invoices",
      "Track invoice payments",
      "Sync with her business PayPal account",
      "Understand payment trends over time",
    ],
    frustrations: [
      "Most online invoicing tools are clunky and outdated",
      "Other than PayPal income, it's hard to determine how her business is really doing financially",
      "Feels like she is operating invoice to invoice",
    ],
    motivation: "Jordan is content working as a solo freelancer because it gives her the flexibility to stay at home with her kids. She's worked hard to create a successful brand and wants to enjoy what's she earned. She's looking to spend less time on routine business tasks and take more control of her business finances.",
    quote: "I want my brand to look beautiful across all client touch points.",
  };

  // Example data for Jamie's journey map
  const jamieJourneyMap = {
    persona: "JUMPING JAMIE",
    scenario: "Jamie needs to switch her current mobile plan. She wants a plan that can save her money without having to sacrifice usage limits.",
    expectations: [
      "Clear online information",
      "Ability to compare plan breakdowns",
      "Friendly and helpful customer support",
    ],
    phases: [
      {
        name: "DEFINE",
        doing: [
          "Review current plan",
          "Define parameters for new plan",
        ],
        thinking: [
          "I wonder if I can pay less.",
        ],
        saying: [
          "That offer seems like a better deal.",
        ],
      },
      {
        name: "COMPARE",
        doing: [
          "Watches commercial on TV",
          "Researches companies and offers on consumer reports website",
          "Uses current carrier website tool to compare options",
        ],
        thinking: [
          "That offer seems like a better deal.",
        ],
        saying: [
          "Ugh, why is this so difficult?!",
        ],
      },
      {
        name: "NEGOTIATE",
        doing: [
          "Calls current carrier to tell them she is shopping around",
          "Calls competitors to see what they can offer",
        ],
        thinking: [
          "Over it. I'm switching providers.",
        ],
        saying: [
          "Over it. I'm switching providers.",
        ],
      },
      {
        name: "SELECT",
        doing: [
          "Decides on a new plan and calls customer service to switch service",
        ],
        thinking: [
          "Well, I guess that was all worth it.",
        ],
        saying: [
          "Well, I guess that was all worth it.",
        ],
      },
    ],
    opportunities: [
      "Compare alternate companys' offers for her",
      "Breakdown current plan into $ amounts",
      "Customer support via text messaging/chat",
    ],
    internalOwnership: [
      "Customer Support Team: reduce average call time to 2 minutes",
      "Web Team: add functionality to allow Jamie to compare plans within our site",
      "Marketing Team: track competing offers to create competitor database",
    ],
  };

  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Customer Research</h1>
        <p className="text-muted-foreground">
          Understanding our users through personas and journey mapping
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Customer Persona</h2>
        <CustomerPersona {...jordanPersona} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Customer Journey Map</h2>
        <CustomerJourneyMap {...jamieJourneyMap} />
      </div>
    </div>
  );
};

export default Index;
