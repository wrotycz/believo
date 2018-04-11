import { AppState } from '../model/state';
import { combineReducers, Reducer } from 'redux';
import { charactersReducer } from './reducers/characters.reducer';
import { userReducer } from './reducers/user.reducer';
import { scenariosReducer } from './reducers/scenarios.reducer';
import { traitsReducer } from './reducers/traits.reducer';

export const rootReducer: Reducer<AppState> = combineReducers({
  user: userReducer,
  scenarios: scenariosReducer,
  characters: charactersReducer,
  traits: traitsReducer
});


