import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/Observable/of';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "http://localhost:5248/";
  // readonly LoanUrl = "http://localhost:5248/api/LoanRate/getLoanRate";
  

  constructor(private http: HttpClient) { }
  
  getLoanRates(): Observable<any[]>{
    return this.http.get<any>(this.APIurl+"LoanRate/getLoanRate")
  }


 adminLogin(credentials:any) : Observable<any>{
    return this.http.post(this.APIurl + "AdminLogin/login", credentials,{responseType:'text'});
  }

  adminHome(): Observable<any> {
    // return this.http.get(this.APIurl + "AdminHome/home",{headers:{"authentication":""+sessionStorage.getItem("Token")}});
    return this.http.get(this.APIurl + "AdminHome/home", { headers: { "Authorization": "Bearer " + sessionStorage.getItem('token') }, responseType: 'text' });
  }
  emicalculate(val:any): Observable<any>{
     return this.http.post(this.APIurl + "api/Emi/calculateemi", val,{responseType:'text'});
  }
}
