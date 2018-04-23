import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rootReducer } from './root-reducer';
import { DevToolsExtension, NgRedux } from '@angular-redux/store';
import { AppState } from './state-model';
import { createLogger } from 'redux-logger';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StoreModule {
  constructor(private redux: NgRedux<AppState>, private devTools: DevToolsExtension) {
    const middleware = [createLogger()];

    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers = [...enhancers, devTools.enhancer()];
    }

    redux.configureStore(rootReducer, {}, middleware, enhancers);
  }
}
