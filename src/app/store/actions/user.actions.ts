import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { User } from '../../model/types';

export interface GetUserAction extends Action {
  username: string;
}

export interface GetUserSuccessAction extends Action {
  user: User;
}

export interface GetUserFailureAction extends Action {
  error: any;
}

export type ClearUser = Action;

export type UserAction = GetUserAction | GetUserSuccessAction | GetUserFailureAction | ClearUser;

@Injectable()
export class UserActions {
  static readonly GET_USER = 'USER@GET_USER';
  static readonly GET_USER_FAILURE = 'USER@GET_USER_FAILURE';
  static readonly GET_USER_SUCCESS = 'USER@GET_USER_SUCCESS';
  static readonly CLEAR_USER = 'USER@CLEAR_USER';
}
