import { Injectable } from '@angular/core';
import { SingleCharacterActions } from '../actions/single-character.actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CharacterService } from '../../characters/services/character.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SingleCharacterEpics {
  constructor(private characterService: CharacterService) {
  }

  create = action$ => action$.ofType(SingleCharacterActions.CREATE_CHARACTER)
    .mergeMap(({ payload }) =>
      this.characterService.createCharacter(payload)
        .map(location => ({
          type: SingleCharacterActions.CREATE_CHARACTER_SUCCESS,
          payload: { scenarioId: payload.scenarioId },
          location: location
        }))
        .catch(error => of({
          type: SingleCharacterActions.CREATE_CHARACTER_FAILURE,
          error: error
        })));

  addScenarioAfterCreate = action$ => action$.ofType(SingleCharacterActions.CREATE_CHARACTER_SUCCESS)
    .mergeMap(({ payload, location }) =>
      this.characterService.addScenario(payload.scenarioId, location))
    .map(resp => ({
      type: SingleCharacterActions.ADD_SCENARIO_SUCCESS
    }))
    .catch(error => of({
      type: SingleCharacterActions.ADD_SCENARIO_FAILURE,
      error: error
    }))

  addUserAfterCreate = action$ => action$.ofType(SingleCharacterActions.CREATE_CHARACTER_SUCCESS)
    .mergeMap(({ location }) =>
      this.characterService.addOwner(location))
    .map(resp => ({
      type: SingleCharacterActions.ADD_USER_SUCCESS
    }))
    .catch(error => of({
      type: SingleCharacterActions.ADD_USER_FAILURE,
      error: error
    }))
}
