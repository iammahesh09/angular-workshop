import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  @Output() getTitleName = new EventEmitter();
  
  editname:any = "Edit Profile";
  user = {
    name:"Mahesh Chejarla",
    college:"SVU",
    specalization:"MCA",
    organization:"Digital",
    technologies:"Full Stack Developer",
    email:"mahesh@gmail.com",
    city:"Hyderabad",
    yearPass:"2013",
    workExp:"5"
  }
  inNotUpdate:boolean = false ;
  inUpdate:boolean = true;
  isCheckOrg:boolean = true;
  nameUpdate: boolean = true;
  nameNotUpdate: boolean = false;
  collegeUpdate: boolean= true;
  collegeNotUpdate: boolean = false;
  specalizationUpdate: boolean= true;
  specalizationNotUpdate: boolean = false;
  organizationUpdate: boolean= true;
  organizationNotUpdate: boolean = false;
  technologiesUpdate: boolean= true;
  technologiesNotUpdate: boolean = false;
  emailUpdate: boolean= true;
  emailNotUpdate: boolean = false;
  cityUpdate: boolean= true;
  cityNotUpdate: boolean = false;
  yearPassUpdate: boolean = true;
  yearPassNotUpdate: boolean= false;
  workExpUpdate: boolean= true;
  workExpNotUpdate: boolean = false;

  
  
  constructor() { }

  ngOnInit() {
    this.getTitleName.emit(this.editname)
  }

  isSave(){
    this.nameUpdate = true;
    this.nameNotUpdate = false;
    this.collegeUpdate = true;
    this.collegeNotUpdate = false;
    this.specalizationUpdate = true;
    this.specalizationNotUpdate = false;
    this.organizationUpdate = true;
    this.organizationNotUpdate = false;
    this.technologiesUpdate = true;
    this.technologiesNotUpdate = false;
    this.emailUpdate = true;
    this.emailNotUpdate = false;
    this.cityUpdate = true;
    this.cityNotUpdate = false;
    this.yearPassUpdate = true;
    this.yearPassNotUpdate = false;
    this.workExpUpdate = true;
    this.workExpNotUpdate = false;
  }

  updateName(){
    this.nameUpdate = false;
    this.nameNotUpdate = true;
  }

  updateCollege(){
    this.collegeUpdate = false;
    this.collegeNotUpdate =true ;
  }

  updateSpecalization(){
    this.specalizationUpdate = false;
    this.specalizationNotUpdate = true;
  }

  updateOrganization(){
    this.organizationUpdate = false;
    this.organizationNotUpdate = true;
  }

  updateTechnologies(){
    this.technologiesUpdate= false;
    this.technologiesNotUpdate = true;
  }

  updateEmail(){
    this.emailUpdate = false;
    this.emailNotUpdate = true;
  }

  updateCity(){    
    this.cityUpdate = false;
    this.cityNotUpdate = true;
  }

  updateYearofPass(){
    this.yearPassUpdate = false;
    this.yearPassNotUpdate = true;
  }
  updateWorkExperience(){
    this.workExpUpdate = false;
    this.workExpNotUpdate = true;
  }

  isOrg(isChecked) {
    if (isChecked) {
      this.isCheckOrg = false; 
    }else {
      this.isCheckOrg = true; 
    }
  }

}
