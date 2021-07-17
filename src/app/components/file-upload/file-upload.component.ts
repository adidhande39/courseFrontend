import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() id!:number

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }



  fileChange(event: Event) {
    // @ts-ignore
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file.name)
      let formData:FormData = new FormData();
      formData.append('file', file, file.name);
      let headers =  {headers: new  HttpHeaders({})};
      let url="http://localhost:8081/api/material/upload/"+this.id
      this.http.post(`${url}`, formData,headers)

        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        )
    }
  }
}
