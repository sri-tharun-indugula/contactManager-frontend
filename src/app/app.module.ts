import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { CardContactsManagerComponent } from './card-contacts-manager/card-contacts-manager.component';
import { ContactManagerTableComponent } from './contact-manager-table/contact-manager-table.component';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, LoginPageComponent, CardContactsManagerComponent, ContactManagerTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
