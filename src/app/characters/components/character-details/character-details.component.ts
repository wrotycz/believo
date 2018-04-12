import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Character } from '../../../model/types';
import { CharacterMockService } from '../../services/character-mock.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AppState, StateEntity } from '../../../store/state-model';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { SingleCharacterActions } from '../../../store/actions/single-character.actions';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailsComponent implements OnInit {

  @select() character$: Observable<StateEntity<Character>>;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterMockService,
    private actions: SingleCharacterActions) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.actions.singleCharacterRequestDispatched();
      this.characterService.getSingleCharacter(+params['character_id']).subscribe(payload => {
        this.actions.singleCharacterRequestSuccess(payload);
      }, error => this.actions.singleCharacterRequestFailure(error));
    });
  }
}
