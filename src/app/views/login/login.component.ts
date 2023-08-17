import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public requestLogin: RequestLogin = { email: '', password: '' }

  constructor(private loginService: LoginService, private alertService: AlertService, private router: Router){}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin()
  }

  public login(): void {
    this.loginService.login(this.requestLogin).subscribe(
      (data) => {            
        this.router.navigate(['home'])        
    },
    (error) => {
      console.log(error)
      if(error.error.error === 'Bad Request' || error.error.error === 'Unauthorized'){
        this.alertService.error('Verifique os dados de login e tente novamente')
      }      
    }
    )
  }
}
