import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { UserInfoService } from './user-info.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userInfoService: UserInfoService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.userInfoService.isUserLoggedIn()) {
      console.log('User logged in!');
      return true;
    }

    console.log('User NOT logged in...');
    this.loginService.landingPage = url;
    this.router.navigate(['/login']);
    return false;
  }

}
