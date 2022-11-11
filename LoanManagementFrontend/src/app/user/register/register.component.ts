import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegister } from 'src/app/models/userdetails';
import { UserAuthService } from 'src/app/userservices/userauth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private authService: UserAuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }


  ngOnInit(): void {
  }
  OnRegisterSubmit(userregister:NgForm) {
    console.log(userregister);
    let user=userregister.form.value
 
    this.authService.userRegister(user).subscribe((data) => {
      console.log(data);
      alert("registered successfully!!!")
      this.router.navigate(["./userlogin"]);
    }, (error) => {
      console.log("Failed to register!!");
    })
  }

}
