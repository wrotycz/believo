import {AppState} from './model/state';
import {Action, Reducer} from 'redux';

export const MOCK_STATE: AppState = {
  user: { id: 1, email: 'gm@believo.pl', type: 'GM', username: 'ur_m45t3r' },
  scenarios: [ {id: 1, name: 'Main scenario', description: 'Best scenario ever'} ],
  characters: [
    { id: 1, name: 'Roland the Barbarian', description: 'Ugahhha!', experience: 100, playerName: 'David' },
    { id: 2, name: 'Magretta the Witch', description: 'Burn the Witch they say', experience: 1000, playerName: 'Mike'}
  ],
  traits: [
    {id: 1, name: 'Great lover', description: 'Every time you encounter opposite gender NPC, you get +10 to all diplomacy rolls' +
      ' against that character', cost: 200}
  ]
};

export function rootReducer(state: AppState, action: Action): AppState {
  return state;
}
