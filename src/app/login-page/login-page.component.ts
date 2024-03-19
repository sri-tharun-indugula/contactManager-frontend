import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MainContactService } from '../main-contact.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  loginConformation=false;

  constructor(private maincontact: MainContactService) {

  }



  getErrorMessage(type: any) {
    if (type == 'email') {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    if (type == 'pass') {
      if (this.password.hasError('required')) {
        return 'You must enter a value';
      }
      return '';
    }
    return ''
  }

  login(){
    if(!this.email.invalid&&!this.password.invalid){
      const loginData={email:this.email.value,password:this.password.value}
      this.loginConformation=this.maincontact.loginValidator(loginData)
    }
    console.log(this.loginConformation)
  }
}
