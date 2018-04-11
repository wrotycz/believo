import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Characters } from '../../model/types';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../model/state';

@Injectable()
export class CharacterService {

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
}
