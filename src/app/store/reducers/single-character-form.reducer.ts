import { Reducer } from 'redux';
import { CharacterFormDto } from '../../model/types';
import { PopulateFormAction } from '../actions/common.actions';
import { SingleCharacterFormActions } from '../actions/single-character-form.actions';

const INITIAL_STATE = { name: '', playerName: '', experience: 0 };

export const singleCharacterFormReducer: Reducer<CharacterFormDto> =
  (state: CharacterFormDto = INITIAL_STATE, action: PopulateFormAction<CharacterFormDto>): CharacterFormDto => {
    switch (action.type) {
      case SingleCharacterFormActions.POPULATE_CHARACTER_FORM:
        return action.payload;
    }
    return state;
  };
