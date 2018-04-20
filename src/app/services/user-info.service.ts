import { Injectable } from '@angular/core';
import { Auth } from '../model/types';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInfoService {

  @select() auth$: Observable<Auth>;

  private auth_: Auth;

  constructor() {
    this.auth$.subscribe(value => {
      console.log('UserInfoService subscription fired');
      this.auth_ = value;
    });

  }

  getToken(): string {
    if (this.auth_) {
      return this.auth_.token;
    }
  }

  getRefreshToken(): string {
    if (this.auth_) {
      return this.auth_.refreshToken;
    }
  }

  isUserLoggedIn(): boolean {
    return !!(this.auth_ && this.auth_.token);
  }

}
