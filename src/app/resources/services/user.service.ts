import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UserToken } from '../models/UserToken';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RequestLogin } from '../models/RequestLogin';
import { AppConstants } from '../models/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private tokenSubject: BehaviorSubject<UserToken>
  public token: Observable<UserToken>

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) { 
    const userJson = localStorage.getItem('user-token')
    this.tokenSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user-token')!));
    this.token = this.tokenSubject.asObservable();
  }

  public get tokenValue(): UserToken {
    return this.tokenSubject.value
  }

  login(requestLogin: RequestLogin): Observable<UserToken> {
    return this.http.post<UserToken>(AppConstants.urlLogin, requestLogin)
      .pipe(
        map((token) =>{
          const userToken: UserToken = token
          localStorage.setItem('user-token', JSON.stringify(userToken))
          this.tokenSubject.next(userToken)

          return userToken
        })
      );
  }

  logout() {
    localStorage.removeItem('user-token');
    this.tokenSubject.next(null!)
    this.router.navigate([''])
  }

}
