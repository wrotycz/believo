import { Injectable } from '@angular/core';
import { Character, CharacterFormDto } from '../../model/types';
import { dispatch } from '@angular-redux/store';
import {
  CreateAction,
  CreateActionFailure,
  CreateActionSuccess,
  EditActiveAction,
  RequestDispatchedAction,
  RequestFailureAction,
  RequestSuccessAction
} from './common.actions';

export type SingleCharacterAction =
  RequestDispatchedAction
  | RequestSuccessAction<Character>
  | RequestFailureAction
  | EditActiveAction
  | CreateAction<CharacterFormDto>
  | CreateActionSuccess
  | CreateActionFailure;

@Injectable()
export class SingleCharacterActions {
  static readonly SINGLE_CHARACTER_REQUEST_DISPATCHED = 'CHAR@SINGLE_CHARACTER_REQUEST_DISPATCHED';
  static readonly SINGLE_CHARACTER_REQUEST_SUCCESS = 'CHAR@SINGLE_CHARACTER_REQUEST_SUCCESS';
  static readonly SINGLE_CHARACTER_REQUEST_FAILURE = 'CHAR@SINGLE_CHARACTER_REQUEST_FAILURE';

  static readonly SINGLE_CHARACTER_EDIT_ACTIVE = 'CHAR@SINGLE_CHARACTER_EDIT_ACTIVE';
  static readonly SINGLE_CHARACTER_EDIT_INACTIVE = 'CHAR@SINGLE_CHARACTER_EDIT_INACTIVE';

  static readonly SINGLE_CHARACTER_EDIT_REQUEST_SUCCESS = 'CHAR@SINGLE_CHARACTER_EDITED';
  static readonly SINGLE_CHARACTER_EDIT_REQUEST_ERROR = 'CHAR@SINGLE_CHARACTER_EDIT_REQUEST_ERROR';

  static readonly CREATE_CHARACTER = 'CHAR@CREATE_CHARACTER';
  static readonly CREATE_CHARACTER_SUCCESS = 'CHAR@CREATE_CHARACTER_SUCCESS';
  static readonly CREATE_CHARACTER_FAILURE = 'CHAR@CREATE_CHARACTER_FAILURE';

  static readonly ADD_SCENARIO_SUCCESS = 'CHAR@ADD_SCENARIO_SUCCESS';
  static readonly ADD_SCENARIO_FAILURE = 'CHAR@ADD_SCENARIO_FAILURE';

  static readonly ADD_USER_SUCCESS = 'CHAR@ADD_USER_SUCCESS';
  static readonly ADD_USER_FAILURE = 'CHAR@ADD_USER_FAILURE';

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
