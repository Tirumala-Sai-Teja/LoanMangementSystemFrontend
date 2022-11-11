import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/userservices/userauth.service';

@Component({
  selector: 'app-userapplyloan',
  templateUrl: './userapplyloan.component.html',
  styleUrls: ['./userapplyloan.component.css']
})
export class UserapplyloanComponent implements OnInit {

   constructor(private userAuthService: UserAuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
  
  }
  user = sessionStorage.getItem('user');
  Userdetails = JSON.parse("" + this.user);
  
  OnSubmitApply(applyloan: NgForm) {
     applyloan.form.value.custId=this.Userdetails.id
      this.userAuthService.userApplyLoan(applyloan.form.value).subscribe((data) => {
        alert("Applied for loan successfully!!");
        this.router.navigate(["/userhome"]);
      }, (error) => {
        alert("Failed to apply!!");
    })
  }
}
