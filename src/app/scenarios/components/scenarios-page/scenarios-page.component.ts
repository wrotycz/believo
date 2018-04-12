import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Scenarios } from '../../../model/types';
import { Observable } from 'rxjs/Observable';
import { StateEntity } from '../../../store/state-model';

@Component({
  selector: 'app-scenarios-page',
  templateUrl: './scenarios-page.component.html',
  styleUrls: ['./scenarios-page.component.css']
})
export class ScenariosPageComponent implements OnInit {

  @select() scenarios$: Observable<StateEntity<Scenarios>>;

  constructor() {
  }

  ngOnInit() {
  }

}
