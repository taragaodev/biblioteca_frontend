import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/resources/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLogged: boolean

  constructor(
    private readonly userService: UserService,
    private http: HttpClient
  ){
    this.isLogged = this.userService.tokenValue ? true : false
  }
  ngOnInit(): void {    
  }

  getProfile(){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.stringify(this.userService.tokenValue)
      })
    }
    this.http.get('me', httpOptions)
  }


  logout() {
    this.userService.logout()
  }
}
