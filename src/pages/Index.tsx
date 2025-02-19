
import CustomerPersona from "@/components/onboarding/CustomerPersona";
import CustomerJourneyMap from "@/components/onboarding/CustomerJourneyMap";

const Index = () => {
  // Example data for Jordan's persona
  const jordanPersona = {
    image: "/placeholder.svg",
    name: "Jordan",
    age: 28,
    occupation: "Software Developer",
    status: "Full-time Remote",
    location: "San Francisco, CA",
    life: "Single, Lives with roommates",
    traits: [
      { name: "Tech Enthusiast" },
      { name: "Early Adopter" },
      { name: "Problem Solver" },
      { name: "Team Player" },
      { name: "Creative" },
      { name: "Detail-oriented" },
    ],
    goals: [
      "Streamline development workflow",
      "Learn new technologies efficiently",
      "Contribute to open source",
      "Build innovative solutions",
    ],
    frustrations: [
      "Outdated documentation",
      "Complex setup processes",
      "Poor developer experience",
    ],
    motivation: "Jordan is passionate about creating efficient and elegant solutions. They value clean code and seamless developer experiences. Always looking to improve their skills and help others learn.",
    quote: "The best code is code that's easy to understand and maintain.",
  };

  // Example data for Jamie's journey map
  const jamieJourneyMap = {
    persona: "JOURNEY JAMIE",
    scenario: "Jamie is setting up a new development environment and needs to integrate various tools and services.",
    expectations: [
      "Clear documentation",
      "Quick setup process",
      "Reliable integration",
      "Good community support",
    ],
    phases: [
      {
        name: "RESEARCH",
        doing: [
          "Reading documentation",
          "Checking community forums",
          "Comparing alternatives",
        ],
        thinking: [
          "Which solution best fits our needs?",
        ],
        saying: [
          "I need something reliable and well-documented.",
        ],
      },
      {
        name: "SETUP",
        doing: [
          "Installing dependencies",
          "Configuring environment",
          "Running initial tests",
        ],
        thinking: [
          "Hope this doesn't break anything.",
        ],
        saying: [
          "The setup steps seem straightforward.",
        ],
      },
      {
        name: "INTEGRATE",
        doing: [
          "Connecting services",
          "Writing configuration files",
          "Testing connections",
        ],
        thinking: [
          "Is everything properly connected?",
        ],
        saying: [
          "Let's make sure all systems work together.",
        ],
      },
      {
        name: "VALIDATE",
        doing: [
          "Running end-to-end tests",
          "Checking all features",
          "Documenting process",
        ],
        thinking: [
          "Everything seems to be working.",
        ],
        saying: [
          "Time to document this for the team.",
        ],
      },
    ],
    opportunities: [
      "Automate setup process",
      "Improve documentation clarity",
      "Create tutorial videos",
      "Build interactive guides",
    ],
    internalOwnership: [
      "DevOps: Create setup scripts",
      "Documentation Team: Update guides",
      "QA Team: Validate process",
      "Support Team: Monitor common issues",
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
