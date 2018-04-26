import { Injectable } from '@angular/core';
import { Auth, User } from '../model/types';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AuthActions } from '../store/actions/auth.actions';

@Injectable()
export class UserInfoService {

  @select() auth$: Observable<Auth>;
  @select() user$: Observable<User>;

  private auth_: Auth;
  private user_: User;

  constructor(private authActions: AuthActions) {
    this.auth$.subscribe(value => {
      this.auth_ = value;
      localStorage.setItem('token', value.token);
      localStorage.setItem('refreshToken', value.refreshToken);
      if (!this.user_) {
        this.authActions.setToken(this.auth_);
      }
    });
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
    return (this.auth_ && this.auth_.token && (this.auth_.token !== 'null'));
  }

  getCurrentUser(): User {
    return this.user_;
  }

}
