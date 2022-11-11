import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/adminservices/auth.service';

@Component({
  selector: 'app-adminpayments',
  templateUrl: './adminpayments.component.html',
  styleUrls: ['./adminpayments.component.css']
})
export class AdminpaymentsComponent implements OnInit {

   constructor(private authService: AuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }
  Payments: any = [];

  ngOnInit(): void {
    this.getPayments();
  }
  getPayments() {
    this.authService.receivepayments().subscribe(data => {
      this.Payments = data;
      console.log(this.Payments);
      
    });
  }
}
