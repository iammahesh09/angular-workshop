import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:any[] = [
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"},
      { firstname:"Mahesh", lastname:"Chejarla", email:"chejarla.mahesh@gmail.com", college:"SVU College", city:"Hyd", status:"Employee", technologie:"Full Stack Developer"}
    ]

  constructor() { }

  ngOnInit() {
  }

}
