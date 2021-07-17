import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Email} from "../model/Email";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url:string

  constructor(private http:HttpClient) {
    this.url="http://localhost:8081/api/email"
  }
  public sendMail(email:Email):Observable<any>{
    console.log(email)
    return this.http.post(this.url,email)
  }
}
