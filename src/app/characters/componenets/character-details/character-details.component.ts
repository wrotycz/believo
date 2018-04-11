import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../model/types';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailsComponent {

  @Input() character: Character;

  constructor() { }

}
