import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CardContactsManagerComponent } from './card-contacts-manager/card-contacts-manager.component';
import { ContactManagerTableComponent } from './contact-manager-table/contact-manager-table.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: CardContactsManagerComponent },
  {path:'cardContact',component:CardContactsManagerComponent},
  {path:'contact-list',component:ContactManagerTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
