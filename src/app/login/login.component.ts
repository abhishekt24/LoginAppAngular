import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  loginService:LoginService;

  constructor(loginService:LoginService) {
      this.loginService=loginService;
   }

  ngOnInit() {
    this.login.userName="admin";
    this.login.password="admin";
  }

  onSubmit(){
    console.log(JSON.stringify(this.login));
    this.loginService.addData(this.login);
    this.login=new Login();
  }
}
