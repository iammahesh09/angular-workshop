import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {

  username:any = "Mahesh Chejarla";
  constructor() { }

  ngOnInit() {
  }

}