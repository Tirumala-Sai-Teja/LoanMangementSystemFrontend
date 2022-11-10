import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../userservices/userauth.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {

  
   constructor(private userAuthService: SharedService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  interestrate = 0;
  tenure = 0;
  loanamount = 0;
  result = 0;
  OnCalculateEmi(calculate: NgForm) {
    
    this.interestrate = calculate.form.value.interestrate;
    this.tenure = calculate.form.value.tenure;
    this.loanamount = calculate.form.value.loanamount;
    this.result = (this.loanamount * Math.pow((this.interestrate / 12) + 1,
                       (this.tenure)) * this.interestrate / 12) / (Math.pow
                       (this.interestrate / 12 + 1, (this.tenure)) - 1);

      console.log("calculated emi");

  }
}
