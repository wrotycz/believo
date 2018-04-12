import { Reducer } from 'redux';
import { StateEntity } from '../state-model';
import { Character } from '../../model/types';
import { SingleCharacterAction, SingleCharacterActions } from '../actions/single-character.actions';
import { RequestFailureAction, RequestSuccessAction } from '../actions/common.actions';

const INITIAL_STATE = { payload: undefined, isFetching: false };

export const singleCharacterReducer: Reducer<StateEntity<Character>> =
  (state: StateEntity<Character> = INITIAL_STATE, action: SingleCharacterAction): StateEntity<Character> => {
    switch (action.type) {
      case SingleCharacterActions.SINGLE_CHARACTER_REQUEST_DISPATCHED:
        return { ...state, isFetching: true };
      case SingleCharacterActions.SINGLE_CHARACTER_REQUEST_SUCCESS:
        return { ...state, payload: (action as RequestSuccessAction<Character>).payload, isFetching: false };
      case SingleCharacterActions.SINGLE_CHARACTER_REQUEST_FAILURE:
        return { ...state, isFetching: false, error: (action as RequestFailureAction).error };
      case SingleCharacterActions.SINGLE_CHARACTER_EDIT_ACTIVE:
        return {...state, isEditActive: true };
      case SingleCharacterActions.SINGLE_CHARACTER_EDIT_INACTIVE:
        return {...state, isEditActive: false };
    }
    return state;
  };
