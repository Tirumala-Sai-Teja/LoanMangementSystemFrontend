import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-loanrates',
  templateUrl: './loanrates.component.html',
  styleUrls: ['./loanrates.component.css']
})
export class LoanratesComponent implements OnInit {

  constructor(private service:SharedService) { }
  LoansList: any = [];
  ngOnInit(): void {
    this.getLoansList();

  }

  getLoansList() {
    this.service.getLoanRates().subscribe(data => {
      this.LoansList = data;
        console.log(this.LoansList);
    });
  }
  // editLoanRates(val:any) {
  //   this.service.updateLoanRates(val);
  // }
 


}
