import { Component, OnInit } from '@angular/core';
import {Email} from "../../model/Email";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EmailService} from "../../service/email.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailForm!: FormGroup;
  email!:Email
  uploadedFile!:File

  constructor(private fb:FormBuilder,private emailService:EmailService) {
    this.email=new Email()
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm(){
    this.emailForm=this.fb.group({
      emailId:'',
      subject:'',
      body:'',
      attachment:new FormControl('')
    })
}

  onSubmit() {
    this.email.emailId=this.emailForm.get('emailId')?.value
    this.email.subject=this.emailForm.get('subject')?.value
    this.email.body=this.emailForm.get('body')?.value
    this.email.attachment=this.formData
    console.log(this.emailForm.value)
    console.log(this.uploadedFile)
    // this.emailService.sendMail(this.email).subscribe()

  }


  uploadFiles( file:any ) {
    console.log( 'file', file.files[0].name )
    this.formData.append("file",file.files[0],file.files[0].name)
    this.uploadedFile = file.files[0]

  }
  public formData=new FormData();
}
