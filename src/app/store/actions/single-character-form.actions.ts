import { Injectable } from '@angular/core';
import { CharacterFormDto } from '../../model/types';
import { dispatch } from '@angular-redux/store';
import { PopulateFormAction } from './common.actions';


export type SingleCharacterFormAction = PopulateFormAction<CharacterFormDto>;

@Injectable()
export class SingleCharacterFormActions {
  static readonly POPULATE_CHARACTER_FORM = 'CHAR_FORM@POPULATE_CHARACTER_FORM';

  @dispatch() populateCharacterForm(character: CharacterFormDto): PopulateFormAction<CharacterFormDto> {
    return { type: SingleCharacterFormActions.POPULATE_CHARACTER_FORM, payload: character };
  }
}
