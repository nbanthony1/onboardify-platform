
interface Trait {
  name: string;
}

interface Phase {
  name: string;
  doing: string[];
  thinking: string[];
  saying: string[];
}

interface Persona {
  image: string;
  name: string;
  age: number;
  occupation: string;
  status: string;
  location: string;
  life: string;
  traits: Trait[];
  goals: string[];
  frustrations: string[];
  motivation: string;
  quote: string;
}

interface JourneyMap {
  persona: string;
  scenario: string;
  expectations: string[];
  phases: Phase[];
  opportunities: string[];
  internalOwnership: string[];
}

export interface PersonaData {
  persona: Persona;
  journeyMap: JourneyMap;
}

export type PersonaKey = "pco" | "commercial" | "municipality" | "corporate" | "distributor";
