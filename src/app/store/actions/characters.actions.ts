import { Action } from 'redux';
import { Injectable } from '@angular/core';
import { Characters } from '../../model/types';
import { dispatch } from '@angular-redux/store';

export type RequestDispatchedAction = Action;

export interface RequestSuccessAction<T> extends Action {
  payload: T;
}

export interface RequestFailureAction extends Action {
  error: string;
}

export type CharactersAction = RequestDispatchedAction | RequestSuccessAction<Characters> | RequestFailureAction;

@Injectable()
export class CharacterActions {
  static readonly CHARACTERS_REQUEST_DISPATCHED = 'CHARACTERS_REQUEST_DISPATCHED';
  static readonly CHARACTERS_REQUEST_SUCCESS = 'CHARACTERS_REQUEST_SUCCESS';
  static readonly CHARACTERS_REQUEST_FAILURE = 'CHARACTERS_REQUEST_FAILURE';

  @dispatch() charactersRequestDispatched(): RequestDispatchedAction {
    return { type: CharacterActions.CHARACTERS_REQUEST_DISPATCHED };
  }

  @dispatch() charactersRequestSuccess(payload: Characters): RequestSuccessAction<Characters> {
    return { type: CharacterActions.CHARACTERS_REQUEST_SUCCESS, payload: payload };
  }

  @dispatch() charactersRequestFailure(error: string): RequestFailureAction {
    return { type: CharacterActions.CHARACTERS_REQUEST_FAILURE, error: error };
  }
}
