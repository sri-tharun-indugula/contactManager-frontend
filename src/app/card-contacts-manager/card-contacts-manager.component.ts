import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-contacts-manager',
  templateUrl: './card-contacts-manager.component.html',
  styleUrls: ['./card-contacts-manager.component.scss']
})
export class CardContactsManagerComponent {
  constructor(private router:Router){

  }
  loginRoute(){
    this.router.navigate(['/login']);
  }
}
