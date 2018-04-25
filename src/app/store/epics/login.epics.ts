import { Injectable } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { of } from 'rxjs/observable/of';
import { AuthActions } from '../actions/auth.actions';
import { LoginService } from '../../services/login.service';
import { CheckTokenDto } from '../../model/types';
import { UserActions } from '../actions/user.actions';

@Injectable()
export class LoginEpics {
  constructor(private loginService: LoginService) {
  }

  postSetToken = action$ => action$.ofType(AuthActions.SET_TOKEN)
    .mergeMap(({ auth }) =>
      this.loginService.checkToken(auth.token)
        .filter((dto: CheckTokenDto) => dto.active)
        .map((dto: CheckTokenDto) => ({
          type: UserActions.GET_USER,
          username: dto.user_name
        }))
        .catch(error => of({
          type: AuthActions.CHECK_TOKEN_FAILURE,
          error: error
        })));

  postRemoveToken = action$ => action$.ofType(AuthActions.REMOVE_TOKEN)
    .mergeMap(action => of({
      type: UserActions.CLEAR_USER
    }))
}
