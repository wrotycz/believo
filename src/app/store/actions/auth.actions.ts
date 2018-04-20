import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { Auth } from '../../model/types';


export interface SetTokenAction extends Action {
  auth: Auth;
}

export type RemoveTokenAction = Action;

export type AuthAction = SetTokenAction | RemoveTokenAction;

@Injectable()
export class AuthActions {
  static readonly SET_TOKEN = 'SET_TOKEN';
  static readonly REMOVE_TOKEN = 'REMOVE_TOKEN';

  @dispatch() setToken(auth: Auth): SetTokenAction {
    return { type: AuthActions.SET_TOKEN, auth: auth };
  }

  @dispatch() removeToken(): RemoveTokenAction {
    return { type: AuthActions.REMOVE_TOKEN };
  }
}
