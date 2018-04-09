import { Component, Input, OnInit } from '@angular/core';
import { Scenario } from '../../model/types';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  @Input() scenarios: Scenario[];

  constructor() {
  }

  ngOnInit() {
  }

}
