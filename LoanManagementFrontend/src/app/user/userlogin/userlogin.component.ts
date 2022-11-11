import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserAuthService } from 'src/app/userservices/userauth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 

 constructor(private userauthService: UserAuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  OnLoginSubmit(userlogin: any) {
    // console.log(userlogin);
    this.userauthService.userLogin(userlogin.form.value).subscribe((data) => {
      console.log(data);
      sessionStorage.setItem('usertoken', data);
     
      this.router.navigate(["./userhome"]);
    }, (error) => {
      // console.log(error.status);
      alert("Plaese enter valid credentials!!");
    })
}
}
