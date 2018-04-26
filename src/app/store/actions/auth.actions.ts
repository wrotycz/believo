import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { Auth } from '../../model/types';


export interface SetTokenAction extends Action {
  auth: Auth;
}

export type RemoveTokenAction = Action;

export interface CheckTokenFailure extends Action {
  error: any;
}

export type AuthAction = SetTokenAction | RemoveTokenAction | CheckTokenFailure;

@Injectable()
export class AuthActions {
  static readonly SET_TOKEN = 'AUTH@SET_TOKEN';
  static readonly REMOVE_TOKEN = 'AUTH@REMOVE_TOKEN';
  static readonly CHECK_TOKEN_FAILURE = 'AUTH@CHECK_TOKEN_FAILURE';

  static readonly REMOVE_TOKEN_SUCCESS = 'AUTH@REMOVE_TOKEN_SUCCESS';
  static readonly REMOVE_TOKEN_FAILURE = 'AUTH@REMOVE_TOKEN_FAILURE';

  @dispatch() setToken(auth: Auth): SetTokenAction {
    return { type: AuthActions.SET_TOKEN, auth: auth };
  }

  @dispatch() removeToken(): RemoveTokenAction {
    return { type: AuthActions.REMOVE_TOKEN };
  }
}
