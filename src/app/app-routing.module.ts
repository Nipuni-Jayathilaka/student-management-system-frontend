import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from "./view/add-student/add-student.component";
import {ViewStudentComponent} from "./view/view-students/view-student.component";
import {WelcomeComponent} from "./view/welcome/welcome.component";
import {NotFoundComponent} from "./view/not-found/not-found.component";

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'add',
    component:AddStudentComponent
  },
  {
    path:'search',
    component:ViewStudentComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
