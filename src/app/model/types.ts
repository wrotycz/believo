import { HateoasEntity } from './hateoas-model';

export interface User {
  name: string;
  email: string;
  locked: boolean;
}

export interface Scenario {
  id: number;
  name: string;
  description?: string;
}

export type Scenarios = Scenario[];

export interface Character extends HateoasEntity {
  name: string;
  description?: string;
  experience: number;
  player: string;
}

export interface CharacterFormDto {
  name: string;
  description?: string;
  experience: number;
  player: string;
  scenarioId?: number;
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

export interface CheckTokenDto {
  user_name: string;
  scope: string[];
  active: boolean;
  exp: number;
  authorities: string[];
  jti: string;
  client_id: string;
}
