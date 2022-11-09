import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   readonly APIurl = "http://localhost:5248/";


  constructor(private http: HttpClient) { }
   adminLogin(credentials:any) : Observable<any>{
    return this.http.post(this.APIurl + "AdminLogin/login", credentials,{responseType:'text'});
  }

  adminHome(): Observable<any> {
 
    return this.http.get(this.APIurl + "AdminHome/home", { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') }, responseType: 'text' });
  
   
  }

}
