import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from '../../services/login.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  requestLogin: any

  constructor(private readonly loginService: LoginService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin(); //requisição ao backend
  }

  public login(): void {   
    this.loginService.login(this.requestLogin).subscribe(data => {
      this.alertService.info('Funcionalidade ainda não implementada.') //sucesso      
      location.reload()
    },
    error => {
      const msg = error.error.message
      if(msg[0] === "email must be an email" || msg[1] === "password must be a string"){
        this.alertService.info('Email ou senha inválidos')          
      }          
    })   
    this.requestLogin = ''    
  }  
}
