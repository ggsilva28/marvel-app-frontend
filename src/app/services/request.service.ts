import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface requestResponse {
  isOk: boolean;
  code: number;
  message: string;
  error?: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, params?: any, headers?: any) {
    return this.request('get', url, params, headers);
  }

  post(url: string, params?: any, headers?: any) {
    return this.request('post', url, params, headers);
  }

  put(url: string, params?: any, headers?: any) {
    return this.request('put', url, params, headers);
  }

  delete(url: string, params?: any, headers?: any) {
    return this.request('delete', url, params, headers);
  }

  private async request(method: string, url: string, params?: any, headers?: any): Promise<requestResponse> {
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

    try {

      const response: any = await this.http.post(environment.apiUrl + url, params, httpOptions).toPromise();

      if (!response) {
        throw {
          code: 0,
          message: 'Não foi possível conectar ao servidor'
        }
      }

      if (response.error) {
        throw response
      }

      return { ...response, isOk: true };

    } catch (e: any) {

      return {
        isOk: false,
        code: e.code || 500,
        message: e.error || e.message || 'Ocorreu um erro inesperado',
      }
    }

  }
}
