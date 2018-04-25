import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateEntity } from '../../../../store/state-model';
import { Observable } from 'rxjs/Observable';
import { Character, CharacterFormDto } from '../../../../model/types';
import { select } from '@angular-redux/store';
import { SingleCharacterActions } from '../../../../store/actions/single-character.actions';
import { SingleCharacterFormActions } from '../../../../store/actions/single-character-form.actions';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-details-edit',
  templateUrl: './character-details-edit.component.html',
  styleUrls: ['./character-details-edit.component.css']
})
export class CharacterDetailsEditComponent implements OnInit, OnDestroy {
  @select() character$: Observable<StateEntity<Character>>;
  @select() characterForm$: Observable<CharacterFormDto>;

  constructor(
    private singleCharacterActions: SingleCharacterActions,
    private formActions: SingleCharacterFormActions
  ) {
  }

  ngOnInit() {
    this.singleCharacterActions.singleCharacterEditActive();
    this.character$.switchMap(stateEntity => of(stateEntity.payload))
    .subscribe(character => {
      const charDto = Object.assign({}, character);
      if (charDto) {
        charDto.id = undefined;
        this.formActions.populateCharacterForm(charDto);
      }
    });
  }

  ngOnDestroy(): void {
    this.singleCharacterActions.singleCharacterEditInactive();
  }

  onSubmit() {
    // TODO make rest request, handle success and failure
    // this.singleCharacterActions.singleCharacterEditRequestSuccess()
    // this.singleCharacterActions.singleCharacterEditRequestFailure()
  }

}
