import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Course} from "../../model/Course";
import {NgForm} from "@angular/forms";
import {CourseService} from "../../service/course.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  course!:Course
  @ViewChild('f') form!:NgForm


  constructor(private service:CourseService,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.course=new Course()
    if (this.data!=null){
      this.initialize(this.data.course)

    }
  }

  ngOnInit(): void {
    // console.log(this.data.course)
  }

  initialize(course:Course){
    console.log("init")
      this.course.id=course.id
      this.course.name=course.name
      this.course.location=course.location
      this.course.description=course.description
      this.course.prerequisite=course.prerequisite
      this.course.createdAt=course.createdAt
      this.course.skills=course.skills
      this.course.trainers=course.trainers

    console.log(this.course)


  }

  onSubmit() {
    console.log(this.form.value)
    this.course.name=this.form.value.name
    this.course.location=this.form.value.location
    this.course.description=this.form.value.description
    this.course.prerequisite=this.form.value.prerequisite


    if (this.data!=null){
      if (typeof this.form.value.skills ==='string'){
        this.course.skills=this.form.value.skills.split(',').map((skill:string)=>skill.trim())
        // console.log("string")
      }else{
        this.course.skills=this.form.value.skills.join().split(',').map((skill:string)=>skill.trim())
      }
      if (typeof this.form.value.trainers==='string'){
        this.course.trainers=this.form.value.trainers.split(',').map((trainer:string)=>trainer.trim())
      }
      else{
        this.course.trainers=this.form.value.trainers.join().split(',').map((trainer:string)=>trainer.trim())
      }

      this.service.updateCourse(this.course).subscribe()
    }else{
      this.course.skills=this.form.value.skills.split(',').map((skill:string)=>skill.trim())
      this.course.trainers=this.form.value.trainers.split(',').map((trainer:string)=>trainer.trim())
      this.service.addCourse(this.course).subscribe();

    }
    console.log(this.course)
  }
}
