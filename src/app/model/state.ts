import { Character, Characters, Scenarios, Traits, User } from './types';

export interface AppState {
  user?: StateEntity<User>;
  scenarios?: StateEntity<Scenarios>;
  characters?: StateEntity<Characters>;
  traits?: StateEntity<Traits>;
  characterForm?: Character;
}

export interface StateEntity<T> {
  payload: T;
  isFetching: boolean;
  error?: string;
}
