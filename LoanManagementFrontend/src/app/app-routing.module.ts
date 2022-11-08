import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { WelcomeComponent} from './welcome/welcome.component';
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
    { path: '', component: WelcomeComponent },
  { path: "adminlogin", component: AdminloginComponent },
  {
    path:"change-password",component:ChangepasswordComponent
  },
  { path: "emi-calculate" , component: EmicalculatorComponent},
  { path: "register", component: RegisterComponent },
    // otherwise redirect to welcome page
    { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
