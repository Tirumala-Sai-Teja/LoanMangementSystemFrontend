import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/adminservices/auth.service';

@Component({
  selector: 'app-loanapplications',
  templateUrl: './loanapplications.component.html',
  styleUrls: ['./loanapplications.component.css']
})
export class LoanapplicationsComponent implements OnInit {

 constructor(private authService: AuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }
  userapplicationList: any = [];
//  "id": 1,
//         "loanType": "Personal Loan",
//         "loanAmount": 10000,
//         "custId": 1,
        "isApproved": 0
  ngOnInit(): void {
      this.authService.allloanapplications().subscribe((data) => {
        this.userapplicationList = data;
        // console.log(this.userapplicationList);
    })
  }
 
  approveloan(id: number, type: string, amount: number, custId: number, isApproved: number) {
    let reqdata = { "id": 0, "LoanType": "", "loanAmount": 0, "custId": 0, "isApproved": 1 };
    reqdata.id = id;
    reqdata.LoanType = type;
    reqdata.loanAmount = amount;
    reqdata.custId = custId;
    // console.log(reqdata);
 


      this.authService.approveloan(reqdata).subscribe((data) => {
        // console.log(data);
        // this.router.navigate(["/adminhome/loanapplications"]);
        this.ngOnInit();
    })
  }
}
