import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
