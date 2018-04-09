import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgRedux, NgReduxModule} from '@angular-redux/store';

import {AppComponent} from './app.component';
import {AppState} from './model/state';
import {MOCK_STATE, rootReducer} from './store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, MOCK_STATE);
  }
}
