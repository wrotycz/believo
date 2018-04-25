import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { UserInfoService } from './user-info.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export interface Header {
  name: string;
  value: string;
}

@Injectable()
export class ApiRequestService {
  public static readonly RESOURCE_SERVER_ADDRESS = 'http://localhost:8082';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userInfo: UserInfoService
  ) {
  }

  get<T>(path: string, additionalHeaders: Header[], params: HttpParams) {
    const url = this.createUrl(path);
    const headers = this.createHeaders(additionalHeaders);

    return this.http.get<T>(url, {
      headers: headers,
      params: params,
      responseType: 'json'
    });
  }

  post<T>(path: string, body: any, additionalHeaders: Header[], params: HttpParams) {
    const url = this.createUrl(path);
    const headers = this.createHeaders(additionalHeaders);

    return this.http.post<T>(url, body, {
      headers: headers,
      params: params,
      responseType: 'json'
    });
  }

  put<T>(path: string, body: any, additionalHeaders: Header[], params: HttpParams) {
    const url = this.createUrl(path);
    const headers = this.createHeaders(additionalHeaders);

    return this.http.put<T>(url, body, {
      headers: headers,
      params: params,
      responseType: 'json'
    });
  }

  create<T>(path: string, body: T): Observable<string> {
    const url = this.createUrl(path);
    const headers = this.createHeaders(undefined);

    return this.http.post<T>(url, body, {
      headers: headers,
      responseType: 'json',
      observe: 'response'
    }).switchMap((resp: HttpResponse<T>) => {
      console.log('headers: ' + resp.headers.keys());
      return of(resp.headers.get('location'));
    });
  }

  outsideGet<T>(path: string, additionalHeaders: Header[], params: HttpParams) {
    const url = this.createUrl(path, true);
    const headers = this.createHeaders(additionalHeaders, true);

    return this.http.get<T>(url, {
      headers: headers,
      params: params,
      responseType: 'json'
    });
  }

  outsidePost<T>(path: string, body: any, additionalHeaders: Header[], params: HttpParams) {
    const url = this.createUrl(path, true);
    const headers = this.createHeaders(additionalHeaders, true);

    return this.http.post<T>(url, body, {
      headers: headers,
      params: params,
      responseType: 'json'
    });
  }

  private createUrl(path: string, outside = false) {
    const suffix = outside ? '/' : '/api/';
    return ApiRequestService.RESOURCE_SERVER_ADDRESS + suffix + path;
  }

  private createHeaders(additionalHeaders: Header[] = [], outside = false): HttpHeaders {
    let headers = new HttpHeaders();

    const token = this.userInfo.getToken();
    if (token && !outside) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }

    return additionalHeaders.reduce((headers_, header) => headers_.append(header.name, header.value), headers);
  }
}
