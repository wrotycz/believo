import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { AuthDto, CheckTokenDto } from '../model/types';
import { AuthActions } from '../store/actions/auth.actions';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

export interface AuthForm {
  grant_type: string;
  client_id: string;
  username: string;
  password: string;
}

@Injectable()
export class LoginService {
  private static readonly clientId = 'believo';
  private static readonly clientSecret = 'YmVsaWV2bzpzZWNyZXQ='; // TODO it's just wrong - need to setup proxy for that

  landingPage = '';

  constructor(
    private api: ApiRequestService,
    private authActions: AuthActions,
    private router: Router
  ) {
  }

  login(username: string, password: string) {
    const additionalHeaders = [
      { name: 'Content-Type', value: 'application/x-www-form-urlencoded' },
      { name: 'Authorization', value: 'Basic ' + LoginService.clientSecret }
    ];

    const body = this.createLoginBody(username, password);

    this.api.outsidePost<AuthDto>('oauth/token', body, additionalHeaders, undefined)
      .subscribe((auth: AuthDto) => {
        this.authActions.setToken({ token: auth.access_token, refreshToken: auth.refresh_token });
        this.navigateToLandingPage(true);
      }, this.handleError);
  }

  checkToken(token: string): Observable<CheckTokenDto | void> {
    const additionalHeaders = [
      { name: 'Authorization', value: 'Basic ' + LoginService.clientSecret }
    ];

    let params = new HttpParams();
    params = params.append('token', token);

    return this.api.outsideGet<CheckTokenDto>('oauth/check_token', additionalHeaders, params)
      .catch(error => of(this.handleError(error)));
  }

  logout() {
    this.authActions.removeToken();
    this.landingPage = 'login';
    this.navigateToLandingPage();
  }

  private navigateToLandingPage(fromLogin = false) {
    if (fromLogin && this.landingPage === 'login') {
      this.router.navigateByUrl('');
    } else {
      this.router.navigateByUrl(this.landingPage);
    }
  }

  private createLoginBody(username: string, password: string): string {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('client_id', LoginService.clientId);
    body.set('grant_type', 'password');
    return body.toString();
  }

  private handleError(error: HttpErrorResponse): void {
    if (error.status === 401 || (error.error && error.error.error === 'invalid_grant')) {
      this.router.navigate(['/login']);
    } else if (error.status === 403) {
      this.router.navigate(['/forbidden']);
    } else if (error.status.toString().charAt(0) === '5') {
      this.router.navigate(['/error']);
    }
  }
}
