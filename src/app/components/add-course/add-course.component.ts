import {Component, Inject, OnInit} from '@angular/core';
import {Course} from "../../model/Course";
import {CourseService} from "../../service/course.service";
import {FormArray, FormBuilder, FormGroup,} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course!:Course;
  courseForm!:FormGroup

  constructor(private courseService:CourseService,private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.course=new Course();

  }

  ngOnInit(): void {
    this.initializeForm()
  }



  private initializeForm() {
    if (this.data.edit!=null){
      this.onEdit()
    }else{
      this.courseForm=this.fb.group({
        name:'',
        description:'',
        location:'',
        prerequisite:'',
        // skills:this.fb.array([this.fb.control('')]),
        // trainers:this.fb.array([this.fb.control('')])
      })
    }

  }


  onEdit(){
    console.log("called")
    let courseData=this.data.course
    console.log()

    this.courseForm=this.fb.group({
      name:courseData.name,
      description:courseData.description,
      location:courseData.location,
      prerequisite:courseData.prerequisite,
      skills:this.fb.array([this.fb.control('')]),
      // skills:this.fb.array([this.fb.control(courseData.skills)]),
      trainers:this.fb.array([this.fb.control('')])
    })

  }

  get skills():FormArray{
    return this.courseForm.get('skills') as FormArray
  }

  get trainers():FormArray{
    return this.courseForm.get('trainers') as FormArray
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }



  addSkill() {
    this.skills.push(this.fb.control(''))

  }



  removeTrainer(i: any) {
    this.trainers.removeAt(i)
  }

  addTrainer() {
    this.trainers.push(this.fb.control(''))

  }
  onSubmit() {
    this.course.name=this.courseForm.get('name')?.value;
    this.course.location=this.courseForm.get('location')?.value;
    this.course.prerequisite=this.courseForm.get('prerequisite')?.value;
    this.course.description=this.courseForm.get('description')?.value;
    this.course.skills=this.courseForm.get('skills')?.value;
    this.course.trainers=this.courseForm.get('trainers')?.value;
    // this.courseService.addCourse(this.course).subscribe()

    console.log(this.courseForm)

  }

}
