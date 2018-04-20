import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { AppState } from './state-model';
import { combineReducers, Reducer } from 'redux';
import { charactersReducer } from './reducers/characters.reducer';
import { userReducer } from './reducers/user.reducer';
import { scenariosReducer } from './reducers/scenarios.reducer';
import { traitsReducer } from './reducers/traits.reducer';
import { singleCharacterReducer } from './reducers/single-character.reducer';
import { singleCharacterFormReducer } from './reducers/single-character-form.reducer';
import { authReducer } from './reducers/auth.reducer';

export const rootReducer: Reducer<AppState> = composeReducers(
  defaultFormReducer(),
  combineReducers({
      user: userReducer,
      auth: authReducer,
      scenarios: scenariosReducer,
      characters: charactersReducer,
      traits: traitsReducer,
      character: singleCharacterReducer,
      characterForm: singleCharacterFormReducer
  })
);


