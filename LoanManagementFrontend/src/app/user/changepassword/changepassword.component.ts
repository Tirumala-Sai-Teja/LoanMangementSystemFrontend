import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/userservices/userauth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }
  ngOnInit(): void {
  }
 reqdata = {'username':"",'password':""};
  user = sessionStorage.getItem('user');
  Userdetails = JSON.parse("" + this.user);
  onChange(changepwd: NgForm) {
    this.reqdata['username'] = this.Userdetails.username;
    this.reqdata['password'] = changepwd.form.value.password;
    // console.log(changepwd.form.value.newpassword,changepwd.form.value.password);
    
    if (changepwd.form.value.newpassword === changepwd.form.value.password && changepwd.form.value.oldpassword == this.Userdetails.password) {
      this.userAuthService.userChangePassword(this.reqdata).subscribe((data) => {
        alert("Password changed successfully!!");
        this.router.navigate(["/userhome"]);
       
      })
    }
    else {
      alert("Entered password is wrong!!");
      
    }
  }
}
