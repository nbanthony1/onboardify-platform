
import { PersonasData } from "./types";
import { pco } from "./pco";
import { commercial } from "./commercial";
import { municipality } from "./municipality";
import { corporate } from "./corporate";
import { distributor } from "./distributor";

export const personas: PersonasData = {
  pco,
  commercial,
  municipality,
  corporate,
  distributor,
};

export type PersonaKey = keyof typeof personas;
