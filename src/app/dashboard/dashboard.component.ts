import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  d_title: any;

  constructor() { }

  menu_title(name){
    this.d_title = name
  }

  ngOnInit() {
  }

}
