import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/adminservices/auth.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

 constructor(private authService: AuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }


  ngOnInit(): void {
    this.authService.adminHome().subscribe((data) => {
      sessionStorage.setItem("admin-name", data);
      console.log(data);
    }, (error) => {
      // console.log(error.status);
      this.router.navigate(["/"]);
    })
  }
 onLogout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
}

}
