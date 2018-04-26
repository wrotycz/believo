import { Injectable } from '@angular/core';
import { Auth, User } from '../model/types';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInfoService {

  @select() auth$: Observable<Auth>;
  @select() user$: Observable<User>;

  private auth_: Auth;
  private user_: User;

  constructor() {
    this.auth$.subscribe(value => this.auth_ = value);
    this.user$.subscribe(value => this.user_ = value);
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

  getCurrentUser(): User {
    return this.user_;
  }

}
