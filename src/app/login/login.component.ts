import {Component} from'@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.services';
import {User} from '../models/user.model'

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})

export class LoginComponent {
    public user : User;
 
  constructor(private loginService: LoginService, private router: Router) {
      this.user = new User();
  }
 
  validateLogin() {
    if(this.user.username && this.user.password) {
        this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/home']);
        } else {
          alert('Wrong username password');
        }
         
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter user name and password');
    }
  }

  goRegister(){
    this.router.navigate(['/register']);
  }

}