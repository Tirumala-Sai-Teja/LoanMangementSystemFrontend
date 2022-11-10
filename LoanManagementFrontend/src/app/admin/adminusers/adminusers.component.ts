import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/adminservices/auth.service';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {


 constructor(private authService: AuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }
  usersList: any = [];


  ngOnInit(): void {
      this.authService.allusers().subscribe((data) => {
      this.usersList = data;
    })
  }



}
