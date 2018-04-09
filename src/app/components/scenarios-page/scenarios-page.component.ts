import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Scenario } from '../../model/types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-scenarios-page',
  templateUrl: './scenarios-page.component.html',
  styleUrls: ['./scenarios-page.component.css']
})
export class ScenariosPageComponent implements OnInit {

  @select('scenarios') scenarios: Observable<Scenario[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
