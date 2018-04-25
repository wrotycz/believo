import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Character, CharacterFormDto, Characters } from '../../model/types';
import { ApiRequestService } from '../../services/api-request.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { UserInfoService } from '../../services/user-info.service';
import { of } from 'rxjs/observable/of';
import { HateoasPagedArray } from '../../model/hateoas-model';

@Injectable()
export class CharacterService {

  constructor(private api: ApiRequestService, private userInfo: UserInfoService) { }

  getCharacters(scenarioId: number): Observable<Characters> {
    return this.api.get<HateoasPagedArray<Character>>('characters', undefined, undefined)
      .switchMap(body => {
        return of(body._embedded.characters);
      });
  }

  getSingleCharacter(characterId: number): Observable<Character> {
    return this.api.get<Character>(`characters/${characterId}`, undefined, undefined);
  }

  createCharacter(character: CharacterFormDto): Observable<string> {
    return this.api.create('characters', character);
  }

  addScenario(scenarioId: number, characterLocation: string) {
    const path = characterLocation.substr(characterLocation.indexOf('/api/') + 5) + '/scenario';
    const scenarioUrl = ApiRequestService.RESOURCE_SERVER_ADDRESS + '/api/scenarios/' + scenarioId;
    const headers = [{name: 'Content-Type', value: 'text/uri-list'}];
    return this.api.put(path, scenarioUrl, headers, undefined);
  }

  addOwner(characterLocation: string) {
    const path = characterLocation.substr(characterLocation.indexOf('/api/') + 5) + '/owner';
    const headers = [{name: 'Content-Type', value: 'text/uri-list'}];

    return this.userInfo.user$
      .switchMap(user => of(user._links.self.href))
      .switchMap((userLocation: string) => this.api.put(path, userLocation, headers, undefined));
  }

}
