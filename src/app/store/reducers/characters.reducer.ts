import { Reducer } from 'redux';
import { StateEntity } from '../state-model';
import { Characters } from '../../model/types';
import { CharactersAction, CharactersActions } from '../actions/characters.actions';
import { RequestFailureAction, RequestSuccessAction } from '../actions/common.actions';

const INITIAL_STATE = { payload: [], isFetching: false };

export const charactersReducer: Reducer<StateEntity<Characters>> =
  (state: StateEntity<Characters> = INITIAL_STATE, action: CharactersAction): StateEntity<Characters> => {
    switch (action.type) {
      case CharactersActions.CHARACTERS_REQUEST_DISPATCHED:
        return { ...state, isFetching: true };
      case CharactersActions.CHARACTERS_REQUEST_SUCCESS:
        return { ...state, payload: (action as RequestSuccessAction<Characters>).payload, isFetching: false };
      case CharactersActions.CHARACTERS_REQUEST_FAILURE:
        return { ...state, isFetching: false, error: (action as RequestFailureAction).error };
    }
    return state;
  };
