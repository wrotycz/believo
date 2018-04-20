import { Auth, Character, CharacterFormDto, Characters, Scenarios, Traits, User } from '../model/types';

export interface AppState {
  user?: User;
  auth?: Auth;
  scenarios?: StateEntity<Scenarios>;
  characters?: StateEntity<Characters>;
  traits?: StateEntity<Traits>;
  character?: StateEntity<Character>;
  characterForm?: CharacterFormDto;
}

export interface StateEntity<T> {
  payload: T;
  isFetching: boolean;
  error?: string;
  isEditActive?: boolean;
}
