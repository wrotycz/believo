import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CharacterFormDto } from '../../../model/types';
import { SingleCharacterFormActions } from '../../../store/actions/single-character-form.actions';
import { SingleCharacterActions } from '../../../store/actions/single-character.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCreateComponent implements OnInit {

  @select() characterForm$: Observable<CharacterFormDto>;
  constructor(
    private singleCharacterActions: SingleCharacterActions,
    private formActions: SingleCharacterFormActions
  ) {
  }

  onSubmit() {
  }

  ngOnInit(): void {
    this.formActions.populateCharacterForm({ name: '', playerName: '', description: '', experience: 0 });
  }

}
