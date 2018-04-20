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

export interface CharacterFormDto {
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

export interface Auth {
  token: string;
  refreshToken: string;
}

export interface AuthDto {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
}
