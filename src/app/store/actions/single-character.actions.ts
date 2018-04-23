import { Injectable } from '@angular/core';
import { Character, CharacterFormDto } from '../../model/types';
import { dispatch } from '@angular-redux/store';
import { CreateAction, EditActiveAction, RequestDispatchedAction, RequestFailureAction, RequestSuccessAction } from './common.actions';

export type SingleCharacterAction = RequestDispatchedAction | RequestSuccessAction<Character> | RequestFailureAction | EditActiveAction;

@Injectable()
export class SingleCharacterActions {
  static readonly SINGLE_CHARACTER_REQUEST_DISPATCHED = 'SINGLE_CHARACTER_REQUEST_DISPATCHED';
  static readonly SINGLE_CHARACTER_REQUEST_SUCCESS = 'SINGLE_CHARACTER_REQUEST_SUCCESS';
  static readonly SINGLE_CHARACTER_REQUEST_FAILURE = 'SINGLE_CHARACTER_REQUEST_FAILURE';

  static readonly SINGLE_CHARACTER_EDIT_ACTIVE = 'SINGLE_CHARACTER_EDIT_ACTIVE';
  static readonly SINGLE_CHARACTER_EDIT_INACTIVE = 'SINGLE_CHARACTER_EDIT_INACTIVE';

  static readonly SINGLE_CHARACTER_EDIT_REQUEST_SUCCESS = 'SINGLE_CHARACTER_EDITED';
  static readonly SINGLE_CHARACTER_EDIT_REQUEST_ERROR = 'SINGLE_CHARACTER_EDIT_REQUEST_ERROR';

  static readonly CREATE_CHARACTER = 'CREATE_CHARACTER';

  @dispatch() singleCharacterRequestDispatched(): RequestDispatchedAction {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_REQUEST_DISPATCHED };
  }

  @dispatch() singleCharacterRequestSuccess(payload: Character): RequestSuccessAction<Character> {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_REQUEST_SUCCESS, payload: payload };
  }

  @dispatch() singleCharacterRequestFailure(error: string): RequestFailureAction {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_REQUEST_FAILURE, error: error };
  }

  @dispatch() singleCharacterEditActive(): EditActiveAction {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_EDIT_ACTIVE };
  }

  @dispatch() singleCharacterEditInactive(): EditActiveAction {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_EDIT_INACTIVE };
  }

  @dispatch() singleCharacterEditRequestSuccess(payload: Character): RequestSuccessAction<Character> {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_EDIT_REQUEST_SUCCESS, payload: payload };
  }

  @dispatch() singleCharacterEditRequestFailure(error: string): RequestFailureAction {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_EDIT_REQUEST_ERROR, error: error };
  }

  @dispatch() createCharacter(payload: CharacterFormDto): CreateAction<CharacterFormDto> {
    return { type: SingleCharacterActions.CREATE_CHARACTER, payload: payload };
  }
}
