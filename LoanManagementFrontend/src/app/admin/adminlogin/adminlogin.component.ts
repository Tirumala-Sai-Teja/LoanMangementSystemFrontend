import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Console } from 'console';
import { AuthService } from 'src/app/adminservices/auth.service';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private authService: AuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  OnLoginSubmit(adminlogin:NgForm) {
    console.log(adminlogin);
    this.authService.adminLogin(adminlogin.form.value).subscribe((data) => {
      // console.log(data);
      sessionStorage.setItem('token', data);
      
      this.router.navigate(["./adminhome"]);
    }, (error) => {
      // console.log(error.status);
      alert("Invalid Credentials!!");
    })
  }

}
