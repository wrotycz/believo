import { Action } from 'redux';

export type RequestDispatchedAction = Action;

export interface RequestSuccessAction<T> extends Action {
  payload: T;
}

export interface RequestFailureAction extends Action {
  error: string;
}
