import { Reducer } from 'redux';
import { User } from '../../model/types';
import { UserAction, UserActions } from '../actions/user.actions';

const INITIAL_STATE: User = { id: undefined, type: undefined, email: undefined, username: undefined };

export const userReducer: Reducer<User> =
  (state: User = INITIAL_STATE, action: UserAction): User => {
    switch (action.type) {
      case UserActions.SET_USER:
        return action.user;
    }
    return state;
  };
