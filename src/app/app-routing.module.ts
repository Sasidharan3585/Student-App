import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentComponent } from './components/student/student.component';
import { AuthService } from './services/auth.service';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

const routes: Routes = [
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Student', component: StudentComponent },
  { path: 'Home', component: HomeComponent },
  {path:'Create',component:StudentCreateComponent},
  {path: 'Edit/:studentId', component:StudentEditComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
