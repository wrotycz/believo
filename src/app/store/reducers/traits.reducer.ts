import { Reducer } from 'redux';
import { StateEntity } from '../state-model';
import { Traits } from '../../model/types';

const INITIAL_STATE = {
  payload: [{
    id: 1, name: 'Great lover', description: 'Every time you encounter opposite gender NPC, you get +10 to all diplomacy rolls' +
    ' against that character', cost: 200
  }], isFetching: false
};

export const traitsReducer: Reducer<StateEntity<Traits>> =
  (state: StateEntity<Traits> = INITIAL_STATE, action): StateEntity<Traits> => {
    return state;
  };
