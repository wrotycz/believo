import { Component, Input } from '@angular/core';
import { Scenario } from '../../model/types';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent {

  @Input() scenario: Scenario;
  background: string;

  constructor() {
    this.setBackground();
  }

  private setBackground() {
    this.background = 'md-card' + Math.floor(Math.random() * 5 + 1);
  }
}
