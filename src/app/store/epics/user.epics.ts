import { Injectable } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { User } from '../../model/types';
import { UserActions } from '../actions/user.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEpics {
  constructor(private userService: UserService) {
  }

  getUser = action$ => action$.ofType(UserActions.GET_USER)
    .mergeMap(({ username }) =>
      this.userService.getUser(username)
        .map((user: User) => ({
          type: UserActions.GET_USER_SUCCESS,
          user: user
        }))
        .catch(error => of({
          type: UserActions.GET_USER_FAILURE,
          error: error
        })));
}
