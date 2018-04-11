import { Reducer } from 'redux';
import { StateEntity } from '../../model/state';
import { Characters } from '../../model/types';
import { CharacterActions, CharactersAction, RequestFailureAction, RequestSuccessAction } from '../actions/characters.actions';

const INITIAL_STATE = { payload: [], isFetching: false };

export const charactersReducer: Reducer<StateEntity<Characters>> =
  (state: StateEntity<Characters> = INITIAL_STATE, action: CharactersAction): StateEntity<Characters> => {
    switch (action.type) {
      case CharacterActions.CHARACTERS_REQUEST_DISPATCHED:
        return { ...state, isFetching: true };
      case CharacterActions.CHARACTERS_REQUEST_SUCCESS:
        return { payload: (action as RequestSuccessAction<Characters>).payload, isFetching: false };
      case CharacterActions.CHARACTERS_REQUEST_FAILURE:
        return { ...state, isFetching: false, error: (action as RequestFailureAction).error };
    }
    return state;
  };
