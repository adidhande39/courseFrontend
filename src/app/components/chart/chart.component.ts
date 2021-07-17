import { Component, OnInit } from '@angular/core';
import {TrendService} from "../../service/trend.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  skillData!:[]

  constructor(private service:TrendService) { }

  ngOnInit(): void {
    this.getTrendBySkill()
  }
  getTrendBySkill(){

    this.service.getTrendBySkill().subscribe(data=>{
      // console.log(data)
      this.skillData=data
    })
  }

  // const columns = options.map(({ value: name, label: title }) => ({
  //   name,
  //   title,
  // }));
}
