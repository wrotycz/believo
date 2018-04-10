import { Injectable, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../model/state';
import { createLogger } from 'redux-logger'
import { rootReducer } from '../app.store';

@Injectable()
export class LocalPersistenceService implements OnInit {

  constructor(private localStorage: LocalStorage, private redux: NgRedux<AppState>) {
  }

  ngOnInit(): void {
    this.loadStore();
  }

  persistStore() {
    const state = this.redux.getState();
    this.localStorage.setItem('store', state);
  }

  private loadStore() {
    this.localStorage.getItem('store').subscribe((state: AppState) => {
      this.redux.configureStore(rootReducer, state, [ createLogger() ]);
    }, () => {
      console.log('Cannot retrieve store from localStorage');
    });
  }

}
