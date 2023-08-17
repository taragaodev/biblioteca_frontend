import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserToken } from '../models/UserToken';
import { AppConstants } from '../models/AppConstants'
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private readonly http: HttpClient, private atuhService: AuthService) { }

  
}
