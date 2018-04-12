import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateEntity } from '../../../../store/state-model';
import { Observable } from 'rxjs/Observable';
import { Character } from '../../../../model/types';
import { select } from '@angular-redux/store';
import { SingleCharacterActions } from '../../../../store/actions/single-character.actions';

@Component({
  selector: 'app-character-details-edit',
  templateUrl: './character-details-edit.component.html',
  styleUrls: ['./character-details-edit.component.css']
})
export class CharacterDetailsEditComponent implements OnInit, OnDestroy {

  @select() character$: Observable<StateEntity<Character>>;

  constructor(private actions: SingleCharacterActions) { }

  ngOnInit() {
    this.actions.singleCharacterEditActive();
  }

  ngOnDestroy(): void {
    this.actions.singleCharacterEditInactive();
  }

}
