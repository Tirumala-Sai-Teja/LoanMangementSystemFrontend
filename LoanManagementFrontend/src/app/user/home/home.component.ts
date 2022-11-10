import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/userservices/userauth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {

   constructor(private userAuthService: UserAuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }
  Userdata: any="";
 


  ngOnInit(): void {
    this.userAuthService.userHome().subscribe((data) => {
      this.Userdata =JSON.parse(data);
      
      sessionStorage.setItem("user", data);//storing user details in session storage
      // console.log(this.Userdata);
      
    },(error) => {
      // console.log(error.status);
      this.router.navigate(["/"]);
    })

 
  }
  onLogout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
}

}


