import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000/"

  login(email:any, password:any){
      return this.http.post<any>(this.baseUrl+"login",[email,password]).pipe();
   }

   register(email:any, password:any){
    return this.http.post<any>(this.baseUrl+"signup",[email,password]).pipe();
 }

  forgotpassword(email:any, password:any, firstname:any, lastname:any){
  return this.http.put<any>(this.baseUrl+"update",[firstname,lastname,email,password]).pipe();
}

};
