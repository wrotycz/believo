import { Action } from 'redux';

export type RequestDispatchedAction = Action;

export type EditActiveAction = Action;

export interface RequestSuccessAction<T> extends Action {
  payload: T;
}

export interface PopulateFormAction<T> extends Action {
  payload: T;
}

export interface RequestFailureAction extends Action {
  error: string;
}

export interface CreateAction<T> extends Action {
  payload: T;
}
