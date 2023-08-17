import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private readonly authService: AuthService, private router: Router) { }
  
  canActivate(): boolean {
    return Boolean(this.authService.isAuthenticated)
  }
}
 
  
