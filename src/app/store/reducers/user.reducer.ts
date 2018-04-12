import { Reducer } from 'redux';
import { StateEntity } from '../state-model';
import { User } from '../../model/types';

const INITIAL_STATE = { payload: { id: 1, email: 'gm@believo.pl', type: 'GM', username: 'ur_m45t3r' }, isFetching: false };

export const userReducer: Reducer<StateEntity<User>> =
  (state: StateEntity<User> = INITIAL_STATE, action): StateEntity<User> => {
    return state;
  };
