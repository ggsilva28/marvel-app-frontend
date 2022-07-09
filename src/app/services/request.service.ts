import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, params?: any, headers?: any) {
    return this.request('GET', url, params, headers);
  }

  post(url: string, params?: any, headers?: any) {
    return this.request('POST', url, params, headers);
  }

  put(url: string, params?: any, headers?: any) {
    return this.request('PUT', url, params, headers);
  }

  delete(url: string, params?: any, headers?: any) {
    return this.request('DELETE', url, params, headers);
  }

  private request(method: string, url: string, params?: any, headers?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      }),
      params: new HttpParams()
    };

    if (params) {
      Object.keys(params).forEach(key => {
        httpOptions.params = httpOptions.params.set(key, params[key]);
      });
    }

    if (headers) {
      Object.keys(headers).forEach(key => {
        httpOptions.headers = httpOptions.headers.set(key, headers[key]);
      });
    }

    return this.http.request(method, url, httpOptions);
  }
}
