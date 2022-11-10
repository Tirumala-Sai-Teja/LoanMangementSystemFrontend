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
      //  "receiptId": 2,
      //   "custId": 1,
      //   "receiptDate": "22/07/2019",
      //   "emiDate": "22/07/2019",
      //   "emiAmount": 5000,
      //   "lateFineCharge": 0,
        // "totalAmount": 5000
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
