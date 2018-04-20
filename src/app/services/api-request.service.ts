import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserInfoService } from './user-info.service';
import { Router } from '@angular/router';

export interface Header {
  name: string;
  value: string;
}

@Injectable()
export class ApiRequestService {
  private static readonly resourceServerAddress = 'http://localhost:8082';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userInfo: UserInfoService
  ) {
  }

  get<T>(path: any, additionalHeaders: Header[], params: HttpParams) {
    const url = this.createApiUrl(path);
    const headers = this.createHeaders(additionalHeaders);

    return this.http.get<T>(url, {
      headers: headers,
      params: params,
      responseType: 'json'
    });
  }

  post<T>(path: string, body: any, additionalHeaders: Header[], params: HttpParams) {
    const url = this.createApiUrl(path);
    const headers = this.createHeaders(additionalHeaders);

    return this.http.post<T>(url, body, {
      headers: headers,
      params: params,
      responseType: 'json'
    });
  }

  private createApiUrl(path: string) {
    return ApiRequestService.resourceServerAddress + '/' + path;
  }

  private createHeaders(additionalHeaders: Header[]): HttpHeaders {
    let headers = new HttpHeaders();

    const token = this.userInfo.getToken();
    if (token) {
      headers = headers.append('Authorization', 'Bearer' + token);
    }

    return additionalHeaders.reduce((headers_, header) => headers_.append(header.name, header.value), headers);
  }
}
