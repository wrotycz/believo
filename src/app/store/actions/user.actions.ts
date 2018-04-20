import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { User } from '../../model/types';

interface SetUserAction extends Action {
  user: User;
}

export type UserAction = SetUserAction;

@Injectable()
export class UserActions {
  static readonly SET_USER = 'SET_USER';

  @dispatch() setUser(user: User): SetUserAction {
    return { type: UserActions.SET_USER, user: user };
  }
}
