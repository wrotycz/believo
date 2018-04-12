import { Injectable } from '@angular/core';
import { Character } from '../../model/types';
import { dispatch } from '@angular-redux/store';
import { RequestDispatchedAction, RequestFailureAction, RequestSuccessAction } from './common.actions';


export type SingleCharacterAction = RequestDispatchedAction | RequestSuccessAction<Character> | RequestFailureAction;

@Injectable()
export class SingleCharacterActions {
  static readonly SINGLE_CHARACTER_REQUEST_DISPATCHED = 'SINGLE_CHARACTER_REQUEST_DISPATCHED';
  static readonly SINGLE_CHARACTER_REQUEST_SUCCESS = 'SINGLE_CHARACTER_REQUEST_SUCCESS';
  static readonly SINGLE_CHARACTER_REQUEST_FAILURE = 'SINGLE_CHARACTER_REQUEST_FAILURE';

  @dispatch() singleCharacterRequestDispatched(): RequestDispatchedAction {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_REQUEST_DISPATCHED };
  }

  @dispatch() singleCharacterRequestSuccess(payload: Character): RequestSuccessAction<Character> {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_REQUEST_SUCCESS, payload: payload };
  }

  @dispatch() singleCharacterRequestFailure(error: string): RequestFailureAction {
    return { type: SingleCharacterActions.SINGLE_CHARACTER_REQUEST_FAILURE, error: error };
  }
}
