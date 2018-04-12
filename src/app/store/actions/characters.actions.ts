import { Injectable } from '@angular/core';
import { Characters } from '../../model/types';
import { dispatch } from '@angular-redux/store';
import { RequestDispatchedAction, RequestFailureAction, RequestSuccessAction } from './common.actions';


export type CharactersAction = RequestDispatchedAction | RequestSuccessAction<Characters> | RequestFailureAction;

@Injectable()
export class CharactersActions {
  static readonly CHARACTERS_REQUEST_DISPATCHED = 'CHARACTERS_REQUEST_DISPATCHED';
  static readonly CHARACTERS_REQUEST_SUCCESS = 'CHARACTERS_REQUEST_SUCCESS';
  static readonly CHARACTERS_REQUEST_FAILURE = 'CHARACTERS_REQUEST_FAILURE';

  @dispatch() charactersRequestDispatched(): RequestDispatchedAction {
    return { type: CharactersActions.CHARACTERS_REQUEST_DISPATCHED };
  }

  @dispatch() charactersRequestSuccess(payload: Characters): RequestSuccessAction<Characters> {
    return { type: CharactersActions.CHARACTERS_REQUEST_SUCCESS, payload: payload };
  }

  @dispatch() charactersRequestFailure(error: string): RequestFailureAction {
    return { type: CharactersActions.CHARACTERS_REQUEST_FAILURE, error: error };
  }
}
