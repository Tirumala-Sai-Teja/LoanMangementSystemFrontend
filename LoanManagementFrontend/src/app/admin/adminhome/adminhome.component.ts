import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

 constructor(private sharedService: SharedService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }


  ngOnInit(): void {
    this.sharedService.adminHome().subscribe((data) => {
      sessionStorage.setItem("username", data);
      console.log(data);
    })
  }


}
