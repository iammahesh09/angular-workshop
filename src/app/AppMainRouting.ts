import {NgModule }from '@angular/core'; 
import {RouterModule, Routes }from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { EditUserProfileComponent } from './dashboard/edit-user-profile/edit-user-profile.component';
import { DashboardWelcomeComponent } from './dashboard/dashboard-welcome/dashboard-welcome.component';
import { PageErrorComponent } from './page-error/page-error.component';

const appRoutes: Routes = [
    { path: '', component: DashboardWelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'users-list', component: UsersListComponent },
    { path: 'edit-user-profile', component: EditUserProfileComponent },
    { path: '**', component: PageErrorComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)], 
    exports:[RouterModule]
})

export class AppRoutingModule { }