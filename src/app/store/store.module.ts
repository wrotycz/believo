import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rootReducer } from './store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState } from '../model/state';
import { createLogger } from 'redux-logger';

@NgModule({
  imports: [
    CommonModule, NgReduxModule
  ],
  declarations: []
})
export class StoreModule {
  constructor(redux: NgRedux<AppState>) {
    redux.configureStore(rootReducer, {}, [ createLogger() ]);
  }
}
