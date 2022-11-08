import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    ChangepasswordComponent,
    RegisterComponent,
    WelcomeComponent,
    EmicalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
