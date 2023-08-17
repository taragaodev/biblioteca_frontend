import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResposeLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse: ResponseLogin | undefined;
  

  public clear():void {
    this.loginResponse = undefined
  }

  public isAuthenticated(): boolean {    
    // return Boolean(this.loginResponse?.jwt)    
    if(this.loginResponse){
      console.log(this.loginResponse)
      return true
    }
    return false
  }
}
