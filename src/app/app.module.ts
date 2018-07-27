import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserProfileComponent } from './dashboard/edit-user-profile/edit-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    MailConfirmComponent,
    CreatePasswordComponent,
    SetPasswordComponent,
    RegistrationComponent,
    UserProfileComponent,
    DashboardComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
