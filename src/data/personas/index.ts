
import { pcoData } from "./pco";
import { commercialData } from "./commercial";
import { municipalityData } from "./municipality";
import { corporateData } from "./corporate";
import { distributorData } from "./distributor";
import { PersonaKey } from "./types";

export const personas = {
  pco: pcoData,
  commercial: commercialData,
  municipality: municipalityData,
  corporate: corporateData,
  distributor: distributorData,
};

export type { PersonaKey };
export * from "./types";
