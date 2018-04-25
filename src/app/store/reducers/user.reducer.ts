import { Reducer } from 'redux';
import { User } from '../../model/types';
import { GetUserSuccessAction, UserAction, UserActions } from '../actions/user.actions';

const INITIAL_STATE: User = { name: undefined, email: undefined, locked: undefined };

export const userReducer: Reducer<User> =
  (state: User = INITIAL_STATE, action: UserAction): User => {
    switch (action.type) {
      case UserActions.GET_USER_SUCCESS:
        return (action as GetUserSuccessAction).user;
      case UserActions.CLEAR_USER:
        return INITIAL_STATE;
    }
    return state;
  };
