import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../../model/types';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {
  @Input() character: Character;
}
