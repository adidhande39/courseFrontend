import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/Course";
import {SocialUser} from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:8081/api/course";
  }

  // public getCourses():Observable<Course[]>{
  //   return this.http.get<Course[]>(this.url);
  // }
  public getCourses():Observable<Course[]>{

    return this.http.get<Course[]>(this.url+"/");
  }


  public addCourse(course:Course):Observable<any>{
    console.log(course)
    return this.http.post(this.url,course)
  }

  public updateCourse(course:Course):Observable<any>{
    console.log("update")
    console.log(course)
    return this.http.put(this.url,course)
  }

  deleteCourse(courseId:number):Observable<any> {
      return this.http.delete<any>(this.url+"/"+courseId)
  }

  getCourseByName(value: string):Observable<Course[]> {
    return this.http.get<Course[]>(this.url)
  }
  getCourseByLocation(value:string):Observable<Course[]>{
    console.log(this.url+"/location"+"/"+value)
    return this.http.get<Course[]>(this.url+"/location"+"/"+value)
  }
  getCourseByTrainer(value:string):Observable<Course[]>{
    return this.http.get<Course[]>(this.url+"/trainer"+"/"+value)
  }
  getCourseBySkill(value:string):Observable<Course[]>{
    return this.http.get<Course[]>(this.url+"/skill"+"/"+value)
  }

  // getLatestCourse(value:string):Observable<Course[]>{
  //   return this.http.get<Course[]>(this.url+"/recent")
  // }

  login(user: SocialUser):Observable<any> {
    console.log("service",user)
      return this.http.post("http://localhost:8081/api/student/login",user)
  }
}
