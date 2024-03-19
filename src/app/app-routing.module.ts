import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CardContactsManagerComponent } from './card-contacts-manager/card-contacts-manager.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: CardContactsManagerComponent },
  {path:'cardContact',component:CardContactsManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
