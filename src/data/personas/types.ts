
export interface Trait {
  name: string;
}

export interface Persona {
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

export interface JourneyPhase {
  name: string;
  doing: string[];
  thinking: string[];
  saying: string[];
}

export interface JourneyMap {
  persona: string;
  scenario: string;
  expectations: string[];
  phases: JourneyPhase[];
  opportunities: string[];
  internalOwnership: string[];
}

export interface PersonaData {
  persona: Persona;
  journeyMap: JourneyMap;
}

export interface PersonasData {
  pco: PersonaData;
  commercial: PersonaData;
  municipality: PersonaData;
  corporate: PersonaData;
  distributor: PersonaData;
}
