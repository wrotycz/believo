import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenariosRoutingModule } from './scenarios-routing.module';
import { ScenariosPageComponent } from './components/scenarios-page/scenarios-page.component';
import { ScenarioListComponent } from './components/scenario-list/scenario-list.component';
import { ScenarioComponent } from './components/scenario/scenario.component';

@NgModule({
  imports: [
    CommonModule,
    ScenariosRoutingModule
  ],
  declarations: [
    ScenarioListComponent,
    ScenarioComponent,
    ScenariosPageComponent
  ]
})
export class ScenariosModule { }
