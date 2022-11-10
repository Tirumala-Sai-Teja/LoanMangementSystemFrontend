import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/adminservices/auth.service';
@Component({
  selector: 'app-loanrates',
  templateUrl: './loanrates.component.html',
  styleUrls: ['./loanrates.component.css']
})
export class LoanratesComponent implements OnInit {

 constructor(private authService: AuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }
  LoansList: any = [];
  interestRate: any = [];
  newloanrate: number=0;
  ngOnInit(): void {
    this.getLoansList();
    this.newloanrate = 0;


  }

  getLoansList() {
    this.authService.loanrates().subscribe(data => {
      this.LoansList = data;
    });
  }
  editLoanRates(loanType:string, interestRate:number) {

    let reqdata = { "loanType": loanType, "interestRate": interestRate }
    console.log(reqdata);
    this.authService.editloanrates(reqdata).subscribe((data) => {
      alert("Loan Rate changed successfully!!");
      //this.ngOnInit();
 })
  }
 


}
