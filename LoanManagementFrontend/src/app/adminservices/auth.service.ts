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
   adminChangePassword(val: any): Observable<any>{
    return this.http.put(this.APIurl + "AdminLogin/changepassword", val, { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') },responseType: 'text' });
  }
  allusers(): Observable<any>{
    return this.http.get(this.APIurl + "CustomerHome/users/getall", { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') }});
  }
  allloanapplications(): Observable<any>{
    return this.http.get(this.APIurl + "api/LoanApplications/customerapplications", { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') }});
    
  }
  approveloan(val:any): Observable<any>{
    return this.http.put(this.APIurl + "api/LoanApplications/customerapplications", val, { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') } });
    
  }
  loanrates(): Observable<any>{
    return this.http.get(this.APIurl + "api/LoanRate/loanrates");
   
  }
  editloanrates(val:any): Observable<any>{
    return this.http.put(this.APIurl + "api/LoanRate/loanrates", val, { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') } });
    
  }
  receivepayments(): Observable<any>{
    return this.http.get(this.APIurl + "api/Payment/payments", { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') } });
    
  }
}
