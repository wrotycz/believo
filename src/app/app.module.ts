import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { createLogger } from 'redux-logger'

import { AppComponent } from './app.component';
import { AppState } from './model/state';
import { MOCK_STATE, rootReducer } from './app.store';
import { RouterModule, Routes } from '@angular/router';
import { ScenarioListComponent } from './components/scenario-list/scenario-list.component';
import { ScenarioComponent } from './components/scenario/scenario.component';
import { ScenariosPageComponent } from './components/scenarios-page/scenarios-page.component';

const routes: Routes = [
  { path: '', component: ScenariosPageComponent },
  { path: 'scenarios', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ScenarioListComponent,
    ScenarioComponent,
    ScenariosPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgReduxModule,
    LocalStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(redux: NgRedux<AppState>) {
    redux.configureStore(rootReducer, MOCK_STATE, [ createLogger() ]);
  }
}
