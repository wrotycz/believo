import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Character, Characters } from '../../model/types';
import { ApiRequestService } from '../../services/api-request.service';
import 'rxjs/add/operator/switchMap';

export interface ICharacterService {
  getCharacters(scenarioId: number): Observable<Characters>;
  getSingleCharacter(characterId: number): Observable<Character>;
}

@Injectable()
export class CharacterService implements ICharacterService {

  constructor(private api: ApiRequestService) { }

  getCharacters(scenarioId: number): Observable<Characters> {
    return this.api.get('characters', undefined, undefined);
  }

  getSingleCharacter(characterId: number): Observable<Character> {
    return this.api.get(`characters/${characterId}`, undefined, undefined);
  }

  createCharacter(character: Character): Observable<string> {
    return this.api.create('characters', character);
  }

}
