import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainContactService } from './main-contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactManager-frontend';
  constructor(private mainContact:MainContactService){
  }

 
}
