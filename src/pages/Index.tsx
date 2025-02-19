
import CustomerPersona from "@/components/onboarding/CustomerPersona";
import CustomerJourneyMap from "@/components/onboarding/CustomerJourneyMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Commercial Enterprise Persona
  const commercialPersona = {
    image: "/placeholder.svg",
    name: "Sarah",
    age: 42,
    occupation: "Facilities Manager",
    status: "Full-time",
    location: "Chicago, IL",
    life: "Married, MBA Graduate",
    traits: [
      { name: "Efficiency-focused" },
      { name: "ESG-conscious" },
      { name: "Brand-aware" },
      { name: "Strategic thinker" },
      { name: "ROI-driven" },
      { name: "Process-oriented" },
    ],
    goals: [
      "Maintain pristine facility conditions",
      "Reduce maintenance costs",
      "Ensure regulatory compliance",
      "Improve operational efficiency",
    ],
    frustrations: [
      "Bird-related property damage",
      "High maintenance costs",
      "Environmental compliance challenges",
      "Recurring pest issues",
    ],
    motivation: "As a Facilities Manager for a major commercial property, Sarah needs to maintain pristine conditions while balancing costs and environmental responsibilities. She seeks solutions that align with corporate sustainability goals and provide clear ROI.",
    quote: "We need a solution that protects our property while meeting our sustainability commitments.",
  };

  // Municipality Persona
  const municipalityPersona = {
    image: "/placeholder.svg",
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
  };

  // Large End-User Persona
  const corporatePersona = {
    image: "/placeholder.svg",
    name: "Lisa",
    age: 45,
    occupation: "Corporate Sustainability Director",
    status: "Full-time",
    location: "Boston, MA",
    life: "Married, Environmental Science background",
    traits: [
      { name: "Data-driven" },
      { name: "Innovation-focused" },
      { name: "Sustainability champion" },
      { name: "Strategic" },
      { name: "Results-oriented" },
      { name: "Collaborative" },
    ],
    goals: [
      "Meet ESG targets",
      "Reduce environmental impact",
      "Optimize facility operations",
      "Enhance corporate reputation",
    ],
    frustrations: [
      "Non-sustainable solutions",
      "Poor service reliability",
      "High maintenance costs",
      "PR concerns",
    ],
    motivation: "As a Corporate Sustainability Director, Lisa leads initiatives to meet ambitious ESG goals while maintaining operational excellence. She seeks innovative, sustainable solutions that align with corporate values and demonstrate environmental leadership.",
    quote: "We're looking for sustainable solutions that align with our ESG commitments.",
  };

  // Distributor Persona
  const distributorPersona = {
    image: "/placeholder.svg",
    name: "David",
    age: 48,
    occupation: "Distribution Company Owner",
    status: "Full-time",
    location: "Dallas, TX",
    life: "Married, Business owner",
    traits: [
      { name: "Profit-focused" },
      { name: "Market-savvy" },
      { name: "Growth-oriented" },
      { name: "Relationship-builder" },
      { name: "Solution-provider" },
      { name: "Competitive" },
    ],
    goals: [
      "Expand product portfolio",
      "Increase profit margins",
      "Build market share",
      "Strengthen vendor relationships",
    ],
    frustrations: [
      "Unproven products",
      "Low profit margins",
      "Implementation complexity",
      "Limited market demand",
    ],
    motivation: "As a Distribution Company Owner, David seeks innovative products that offer strong margins and clear market demand. He needs solutions that are easy to implement and provide sustainable revenue streams.",
    quote: "Show me the proven market demand and margin potential.",
  };

  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Customer Research</h1>
        <p className="text-muted-foreground">
          Understanding Symterra's target market through personas and journey mapping
        </p>
      </div>

      <Tabs defaultValue="pco" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-4">
          <TabsTrigger value="pco">PCO</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="municipality">Municipality</TabsTrigger>
          <TabsTrigger value="corporate">Corporate</TabsTrigger>
          <TabsTrigger value="distributor">Distributor</TabsTrigger>
        </TabsList>

        <TabsContent value="pco" className="space-y-8">
          <CustomerPersona {...pcoPersona} />
          <CustomerJourneyMap {...pcoJourneyMap} />
        </TabsContent>

        <TabsContent value="commercial" className="space-y-8">
          <CustomerPersona {...commercialPersona} />
        </TabsContent>

        <TabsContent value="municipality" className="space-y-8">
          <CustomerPersona {...municipalityPersona} />
        </TabsContent>

        <TabsContent value="corporate" className="space-y-8">
          <CustomerPersona {...corporatePersona} />
        </TabsContent>

        <TabsContent value="distributor" className="space-y-8">
          <CustomerPersona {...distributorPersona} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
