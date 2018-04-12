import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Character, Characters } from '../../model/types';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store/state-model';

@Injectable()
export class CharacterMockService {

  constructor(private redux: NgRedux<AppState>) {
  }

  getCharacters(scenarioId: number): Observable<Characters> {
    if (scenarioId === 1) {
      return of([
        { id: 1, name: 'Roland the Barbarian', description: 'Ugahhha!', experience: 100, playerName: 'David' },
        { id: 2, name: 'Magretta the Witch', description: 'Burn the Witch they say', experience: 1000, playerName: 'Mike' }
      ]);
    }
    return of([]);
  }

  getSingleCharacter(characterId: number): Observable<Character> {
    let character;
    switch (characterId) {
      case 1:
        character = { id: 1, name: 'Roland the Barbarian', description: 'Ugahhha!', experience: 100, playerName: 'David' };
        break;
      case 2:
        character = { id: 2, name: 'Magretta the Witch', description: 'Burn the Witch they say', experience: 1000, playerName: 'Mike' };
        break;
    }
    return of(character);
  }
}
