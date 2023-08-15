import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/ResposeLogin';
import { AppConstants } from '../models/AppConstants'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  login(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(AppConstants.urlLogin, requestLogin);
  }
}
