export interface User {
  id: number;
  type: string;
  email: string;
  username: string;
}

export interface Scenario {
  id: number;
  name: string;
  description?: string;
}

export type Scenarios = Scenario[];

export interface Character {
  id: number;
  name: string;
  description?: string;
  experience: number;
  playerName: string;
}

export type Characters = Character[];

export interface Trait {
  id: number;
  name: string;
  description?: string;
  cost: number;
}

export type Traits = Trait[];
