import {Character, Scenario, Trait, User} from './types';

export interface AppState {
  user: User;
  scenarios: Scenario[];
  characters: Character[];
  traits: Trait[];
}
