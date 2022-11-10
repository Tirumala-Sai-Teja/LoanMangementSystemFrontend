import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor() { }
  urs: any = sessionStorage.getItem('user');
  Userdetails = JSON.parse(this.urs);
  ngOnInit(): void {
   
  }


}
