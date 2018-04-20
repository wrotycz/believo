import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Scenario, Scenarios } from '../../../model/types';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScenarioListComponent implements OnInit {

  @Input() scenarios: Scenarios;

  constructor() {
  }

  ngOnInit() {
  }

}
