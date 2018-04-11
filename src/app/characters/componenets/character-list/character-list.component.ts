import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Characters } from '../../../model/types';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent implements OnInit {

  @Input() characters: Characters;

  constructor() {
  }

  ngOnInit() {
  }

}
