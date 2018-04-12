import { Reducer } from 'redux';
import { StateEntity } from '../state-model';
import { Scenarios } from '../../model/types';

const INITIAL_STATE = { payload: [{ id: 1, name: 'Main scenario', description: 'Best scenario ever' }], isFetching: false };

export const scenariosReducer: Reducer<StateEntity<Scenarios>> =
  (state: StateEntity<Scenarios> = INITIAL_STATE, action): StateEntity<Scenarios> => {
    return state;
  };
