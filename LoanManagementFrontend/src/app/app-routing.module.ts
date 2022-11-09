import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent} from './admin/adminhome/adminhome.component';
import { LoanratesComponent } from './admin/loanrates/loanrates.component';
import { AdminpaymentsComponent} from './admin/adminpayments/adminpayments.component';
import {AdminusersComponent } from './admin/adminusers/adminusers.component';
import { LoanapplicationsComponent} from './admin/loanapplications/loanapplications.component';

import { RegisterComponent } from './user/register/register.component';
import { UserloginComponent} from './user/userlogin/userlogin.component';
import {HomeComponent } from './user/home/home.component';
import {MyloansComponent } from './user/myloans/myloans.component';
import { UserapplyloanComponent} from './user/userapplyloan/userapplyloan.component';
import { UserprofileComponent} from './user/userprofile/userprofile.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
  { path: "adminlogin", component: AdminloginComponent },
  {
    path:"change-password",component:ChangepasswordComponent
  },
  { path: "emicalculator" , component: EmicalculatorComponent},

  { path: "adminhome", component: AdminhomeComponent },
  { path: "loanrates", component: LoanratesComponent },
  { path: "payments", component: AdminpaymentsComponent },
  { path: "allusers", component: AdminusersComponent },
  {path:"loanapplications",component:LoanapplicationsComponent},
  
  { path: "register", component: RegisterComponent },
  { path: "myprofile", component: UserprofileComponent },
  { path: "myloans", component: MyloansComponent },
  { path: "userlogin", component: UserloginComponent },
  { path: "userhome", component: HomeComponent },
    {path:"applyloan",component:UserapplyloanComponent},
    // otherwise redirect to welcome page
    { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
