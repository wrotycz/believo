import { Reducer } from 'redux';
import { Auth } from '../../model/types';
import { AuthAction, AuthActions, SetTokenAction } from '../actions/auth.actions';

const INITIAL_STATE: Auth = { token: undefined, refreshToken: undefined };

export const authReducer: Reducer<Auth> =
  (state = INITIAL_STATE, action: AuthAction): Auth => {
    switch (action.type) {
      case AuthActions.SET_TOKEN:
        return (action as SetTokenAction).auth;
      case AuthActions.REMOVE_TOKEN:
        return INITIAL_STATE;
    }
    return state;
  };
