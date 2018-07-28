import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

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
import { UsersListComponent } from './dashboard/users-list/users-list.component';

import {AppRoutingModule} from './AppMainRouting';
import { DashboardWelcomeComponent } from './dashboard/dashboard-welcome/dashboard-welcome.component';
import { PageErrorComponent } from './page-error/page-error.component';

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
    EditUserProfileComponent,
    UsersListComponent,
    DashboardWelcomeComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
