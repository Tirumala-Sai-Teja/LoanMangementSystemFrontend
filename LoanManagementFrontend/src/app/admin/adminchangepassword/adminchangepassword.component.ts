import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/adminservices/auth.service';

@Component({
  selector: 'app-adminchangepassword',
  templateUrl: './adminchangepassword.component.html',
  styleUrls: ['./adminchangepassword.component.css']
})
export class AdminchangepasswordComponent implements OnInit {

   constructor(private userAuthService: AuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }
  ngOnInit(): void {
  }
  reqdata = {'username':"",'password':""};
  admin = sessionStorage.getItem('admin-name')+"";

  onChange(changepwd: NgForm) {
    this.reqdata['username'] = this.admin;
    this.reqdata['password'] = changepwd.form.value.password;
    if (this.reqdata.password === changepwd.form.value.password ) {
      this.userAuthService.adminChangePassword(this.reqdata).subscribe((data) => {
     
      this.router.navigate(["/adminhome"]);
  
      
    })
    }
    else {
      alert("plaese enter valid password!!");
    }
   
    
}


}
