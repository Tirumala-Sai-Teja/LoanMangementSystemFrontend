import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from '../models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  readonly APIurl = "http://localhost:5248/";


  constructor(private http: HttpClient) { }
  userRegister(cred: UserRegister): Observable<any>{
     return this.http.post(this.APIurl + "api/NewCustomerRegistration/register", cred,{responseType:'text'});
  }

   userLogin(credentials:any) : Observable<any>{
    return this.http.post(this.APIurl + "CustomerLogin/login", credentials,{responseType:'text'});
  }

  userHome(): Observable<any> {
 
    return this.http.get(this.APIurl + "CustomerHome/home", { headers: { "Authorization": "Bearer " + sessionStorage.getItem('usertoken') }, responseType: 'text' });
  
   
  }
  userLoans(id: number): Observable<any>{
  
    return this.http.get(this.APIurl + "api/LoanApplications/customerapplications/"+id.toString(), { headers: { "Authorization": "Bearer " + sessionStorage.getItem('usertoken') } });
  }
  userApplyLoan(val:any): Observable<any>{
    return this.http.post(this.APIurl + "api/LoanApplications/customerapplications", val, { headers: { "Authorization": "Bearer " + sessionStorage.getItem('usertoken') } });
  }
  userChangePassword(val: any): Observable<any>{
    return this.http.put(this.APIurl + "CustomerLogin/changepassword", val, { headers: { "Authorization": "Bearer " + sessionStorage.getItem('usertoken') },responseType: 'text' });
  }

}
