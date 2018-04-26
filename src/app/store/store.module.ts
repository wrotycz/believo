import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rootReducer } from './root-reducer';
import { DevToolsExtension, NgRedux } from '@angular-redux/store';
import { createEpicMiddleware } from 'redux-observable';
import { AppState } from './state-model';
import { createLogger } from 'redux-logger';
import { SingleCharacterEpics } from './epics/single-character.epics';
import { CharacterService } from '../characters/services/character.service';
import { LoginEpics } from './epics/login.epics';
import { UserEpics } from './epics/user.epics';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CharacterService,
    SingleCharacterEpics,
    LoginEpics,
    UserEpics
  ]
})
export class StoreModule {
  constructor(
    private redux: NgRedux<AppState>,
    private devTools: DevToolsExtension,
    private singleCharacterEpics: SingleCharacterEpics,
    private loginEpics: LoginEpics,
    private userEpics: UserEpics
  ) {
    const middleware = [
      createEpicMiddleware(this.singleCharacterEpics.create),
      createEpicMiddleware(this.loginEpics.postSetToken),
      createEpicMiddleware(this.loginEpics.clearUserAfterRemoveToken),
      createEpicMiddleware(this.loginEpics.clearLocalStorageAfterRemoveToken),
      createEpicMiddleware(this.userEpics.getUser),
      createLogger()
    ];

    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers = [...enhancers, devTools.enhancer()];
    }

    redux.configureStore(rootReducer, {}, middleware, enhancers);
  }
}
