import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000"

  login(data:any){
    const optionHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        //'Access-Control-Allow-Origin': '*'
      })
    };
      return this.http.post<any>(this.baseUrl+"/api/v1/customer/login",data,optionHeader);
   }

   register(email:any, password:any){
    return this.http.post<any>(this.baseUrl+"signup",[email,password]).pipe();
 }

  forgotpassword(email:any, password:any, firstname:any, lastname:any){
  return this.http.put<any>(this.baseUrl+"update",[firstname,lastname,email,password]).pipe();
}

};
