import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { HttpParams } from '@angular/common/http';
import { User } from '../model/types';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private api: ApiRequestService) { }

  getUser(username: string): Observable<User> {
    let params = new HttpParams();
    params = params.append('name', username);
    return this.api.get<User>('users/search/findByName', undefined, params);
  }
}
