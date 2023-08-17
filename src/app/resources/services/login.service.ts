import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResponseLogin } from '../models/ResposeLogin';
import { AppConstants } from '../models/AppConstants'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient, private atuhService: AuthService) { }

  login(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(AppConstants.urlLogin, requestLogin)
      .pipe(
        tap((loginResponse) => (this.atuhService.loginResponse = loginResponse))
      );
  }
}
