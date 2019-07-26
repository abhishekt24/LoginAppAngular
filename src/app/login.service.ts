import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginData:Login[]=[];
  addData(login:Login): string {
      this.loginData.push(login);
      console.log(this.loginData);
      return "success";
  }
  constructor() { }
}
