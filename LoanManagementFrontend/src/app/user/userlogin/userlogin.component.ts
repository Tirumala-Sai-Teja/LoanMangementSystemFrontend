import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  sharedService: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  OnLoginSubmit(userlogin: any) {
    console.log(userlogin);
    // this.sharedService.adminLogin(userlogin.form.value).subscribe((data) => {
    //   console.log(data);
    //   sessionStorage.setItem('token', data);
      
    //   this.router.navigate(["./admin-home"]);
    // })
}
}
