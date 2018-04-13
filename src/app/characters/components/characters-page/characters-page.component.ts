import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ActivatedRoute, Params } from '@angular/router';
import { Characters } from '../../../model/types';
import { Observable } from 'rxjs/Observable';
import { CharacterMockService } from '../../services/character-mock.service';
import { AppState, StateEntity } from '../../../store/state-model';
import { CharactersActions } from '../../../store/actions/characters.actions';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements OnInit {
  @select() characters$: Observable<StateEntity<Characters>>;

  constructor(
    private route: ActivatedRoute,
    private redux: NgRedux<AppState>,
    private characterService: CharacterMockService,
    private actions: CharactersActions) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.actions.charactersRequestDispatched();
      this.characterService.getCharacters(+params['scenario_id']).subscribe(payload => {
        this.actions.charactersRequestSuccess(payload);
      }, error => this.actions.charactersRequestFailure(error));
    });
  }
}
