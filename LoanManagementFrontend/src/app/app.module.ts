import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RegisterComponent } from './user/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';

import {SharedService } from './shared.service';
import { LoanratesComponent } from './admin/loanrates/loanrates.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';

import { UserapplyloanComponent } from './user/userapplyloan/userapplyloan.component';

import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { AdminpaymentsComponent } from './admin/adminpayments/adminpayments.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { LoanapplicationsComponent } from './admin/loanapplications/loanapplications.component';
import { HomeComponent } from './user/home/home.component';
import { MyloansComponent } from './user/myloans/myloans.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    ChangepasswordComponent,
    RegisterComponent,
    WelcomeComponent,
    EmicalculatorComponent,
    AdminhomeComponent,
    LoanratesComponent,
    UserloginComponent,
 
    UserapplyloanComponent,

      UserprofileComponent,
      AdminpaymentsComponent,
      AdminusersComponent,
      LoanapplicationsComponent,
      HomeComponent,
      MyloansComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
