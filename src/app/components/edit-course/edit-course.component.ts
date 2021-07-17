import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../service/course.service";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courseId:number

  constructor(private route:ActivatedRoute,private courseService:CourseService) {
    this.courseId=route.snapshot.params.id
  }

  ngOnInit(): void {
  }

  // public editCourse(){
  //   return this.courseService.editCourse(this.courseId).subscribe(data=>{
  //     console.log(data)
  //   })
  //
  // }

}
