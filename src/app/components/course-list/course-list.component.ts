import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CourseService} from "../../service/course.service";
import {Course} from "../../model/Course";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {TestformComponent} from "../testform/testform.component";
import {AddCourseComponent} from "../add-course/add-course.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {EmailComponent} from "../email/email.component";
import {AddTestComponent} from "../add-test/add-test.component";
import {SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // @ViewChild('buttonElement') buttonElement!: ElementRef<HTMLElement>;
  courses: Course[];
  selectedFilter!: string;
  filterList: string[] = ["Name", "Skill", "Trainer", "Location"]
  value!: string


  constructor(private courseService: CourseService, private router: Router, private toastr: ToastrService, public dialog: MatDialog, private bottomSheet: MatBottomSheet,public socialAuthServive: SocialAuthService) {
    this.courses = []
    console.log(socialAuthServive.authState)
  }

  ngOnInit(): void {
    this.getCourses();

    // this.toastr.success('Hello world!', 'Toastr fun!');

  }

  private getCourses() {
    this.courseService.getCourses().subscribe(data => {
      // console.log(data)
      this.courses=data
    })
    console.log(this.courses)
  }

  editCourse(course: Course) {
    console.log(course.id)
    // this.router.navigate(["course", "edit", course.id])
    let dialogRef = this.dialog.open(AddTestComponent, {disableClose: true, autoFocus: true,data:{course:course,edit:true}})

  }

  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id).subscribe(() => {

    },error => {
        // this.home()
    })
  }

  // openDialog() {
  //   let  name="aditya"
  //   let dialogRef=this.dialog.open(TestformComponent,{ disableClose: true ,autoFocus:true,data:{name:name}})
  //   dialogRef.afterClosed().subscribe(result=>{
  //     if(result){
  //       // this.deleteCourse()
  //     }
  //   })
  //
  // }

  openDialog2() {
    let dialogRef = this.dialog.open(AddTestComponent, {disableClose: true, autoFocus: true})
    // let el: HTMLElement = this.buttonElement.nativeElement;
    // el.click();
    // this.home()

  }

  openDeleteDialog(course: Course) {
    console.log(course)
    let dialogRef = this.dialog.open(TestformComponent, {
      disableClose: true,
      autoFocus: true,
      data: {name: course.name}
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        console.log(result)
        this.deleteCourse(course);
      }
    })

  }

  openBottomSheet() {
    this.dialog.open(EmailComponent)

  }


  onSearch() {
    // console.log(this.value)
    // console.log(this.selectedFilter)
    let value = this.value.toLowerCase().trim();
    if (this.selectedFilter === "Name") {
      this.courseService.getCourseByName(this.value).subscribe(data=>this.courses=data)
    } else if (this.selectedFilter === "Location") {
      this.courseService.getCourseByLocation(value).subscribe(data=>this.courses=data)
    } else if (this.selectedFilter === "Skill") {
      this.courseService.getCourseBySkill(this.value).subscribe(data=>this.courses=data)
    }else if (this.selectedFilter === "Trainer") {
      this.courseService.getCourseByTrainer(this.value).subscribe(data=>this.courses=data)
    }
    // this.value = ''

  }
  // try(){
  //   let el: HTMLElement = this.buttonElement.nativeElement;
  //   el.click();
  // }

  home() {

    window.location.reload();
    // console.log("clicked")
    // this.router.navigate(['/']).then(() => { this.router.navigate([this.router.url ]); })
  }

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
    localStorage.clear()

  }
}
