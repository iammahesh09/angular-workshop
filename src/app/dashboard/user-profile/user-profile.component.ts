import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any = {
    firstname:"Mahesh",
    lastname:"Chejarla",
    email:"chejarla.mahesh@gmail.com",
    college:"SVU College",
    city:"Hyd",
    status:"Employee",
    technologie:"Full Stack Developer"
  }

  fullname(){
    return this.user.firstname +" "+ this.user.lastname
  }

  constructor() { }

  ngOnInit() {
  }

}
