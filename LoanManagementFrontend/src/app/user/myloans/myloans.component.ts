import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/userservices/userauth.service';

@Component({
  selector: 'app-myloans',
  templateUrl: './myloans.component.html',
  styleUrls: ['./myloans.component.css']
})
export class MyloansComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private activeRoute: ActivatedRoute, private router: Router) {
    
  }
  UserLoansList: any = [];
  urs: any = sessionStorage.getItem('user');
  Userdetails = JSON.parse(this.urs);
  ngOnInit(): void {
    
    this.userAuthService.userLoans(this.Userdetails.id).subscribe((data) => {
      this.UserLoansList = data;  
     
      
      
    },(error) => {
      // console.log(error.status);
      this.router.navigate(["/"]);
    })

    

  }
}
