import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainContactService {

  constructor() { }

  loginValidator(values:any){
    console.log(values,'111:service')
    if(values.email=='123@gmail.com' && values.password=='123@'){
      console.log('111:true logi')
      return false
    }
    return true
  }
}
