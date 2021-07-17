import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrendService {
  url:string

  constructor(private http:HttpClient) {
    this.url="http://localhost:8081/api/trend"
  }

  getTrendBySkill():Observable<any>{
    return this.http.get<any>(this.url)
  }
}
