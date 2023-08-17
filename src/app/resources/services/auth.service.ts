import { Injectable } from '@angular/core';
import { UserToken } from '../models/UserToken';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  public loginResponse: UserToken

  public clear():void {
    this.loginResponse.token = ''
  }

  public isAuthenticated(): boolean {       
    return Boolean(!this.loginResponse?.token)                
  }

}
