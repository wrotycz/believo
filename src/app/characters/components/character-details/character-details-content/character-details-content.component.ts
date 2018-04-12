import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Character } from '../../../../model/types';
import { Observable } from 'rxjs/Observable';
import { StateEntity } from '../../../../store/state-model';
import { SingleCharacterActions } from '../../../../store/actions/single-character.actions';

@Component({
  selector: 'app-character-details-content',
  templateUrl: './character-details-content.component.html',
  styleUrls: ['./character-details-content.component.css']
})
export class CharacterDetailsContentComponent implements OnInit {

  @select() character$: Observable<StateEntity<Character>>;

  constructor(private actions: SingleCharacterActions) {
  }

  ngOnInit() {
    this.actions.singleCharacterEditInactive();
  }

}
