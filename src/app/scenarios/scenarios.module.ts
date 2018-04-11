import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenariosRoutingModule } from './scenarios-routing.module';
import { ScenariosPageComponent } from './components/scenarios-page/scenarios-page.component';
import { ScenarioListComponent } from './components/scenario-list/scenario-list.component';
import { ScenarioComponent } from './components/scenario/scenario.component';
import { StoreModule } from '../store/store.module';

@NgModule({
  imports: [
    CommonModule,
    ScenariosRoutingModule,
    StoreModule
  ],
  declarations: [
    ScenarioListComponent,
    ScenarioComponent,
    ScenariosPageComponent
  ]
})
export class ScenariosModule { }
