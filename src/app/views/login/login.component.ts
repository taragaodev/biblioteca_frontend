import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { AuthService } from 'src/app/resources/services/auth.service';
import { LoginService } from 'src/app/resources/services/login.service';
import { UserService } from 'src/app/resources/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = { email: '', password: '' }

  constructor(private loginService: UserService, private alertService: AlertService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin()
  }

  public login(): any {
    this.loginService.login(this.requestLogin).subscribe({
      next: () => {        
        console.log(localStorage.getItem('user-token'))   
        this.router.navigate(['home'])            
      },
      error: (error) => {
        if (error.error.error === 'Bad Request' || error.error.error === 'Unauthorized') {
          this.alertService.error('Verifique os dados de login e tente novamente')
        }
      }
    })   
  }
}
