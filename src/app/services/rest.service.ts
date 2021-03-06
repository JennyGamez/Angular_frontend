import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://192.168.113.177/api_skinatech/api/web/version1/';
  //apiUrl = ' http://192.168.1.77/api_skinatech/api/web/version1/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  }
  
  getDefault(): Observable<Response> {
    return this.http.get<Response>(this.apiUrl + 'default', this.httpOptions)
  }

  requestPassword(data): Observable<Response> {
    return this.http.post<Response>(this.apiUrl + 'site/request-password-reset', 'jsonSend=' + JSON.stringify(data), this.httpOptions)
  }

  requestTokenPasswordPost(data): Observable<Response> {
    return this.http.post<Response>(this.apiUrl + 'site/reset-password', 'jsonSend=' + JSON.stringify(data), this.httpOptions)
  }

  requestValidateToken(data): Observable<Response> {
    return this.http.post<Response>(this.apiUrl + 'site/validate-token-password', 'jsonSend=' + JSON.stringify(data), this.httpOptions)
  }

}
