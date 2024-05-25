import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClasseComponent } from './classe/classe.component';
import { NewExamComponent } from './new-exam/new-exam.component';
import {PassExamComponent} from "./pass-exam/pass-exam.component";
import {EtudiantExamComponent} from "./etudiant-exam/etudiant-exam.component";
import { AuGuard } from './guards/auth.guard';
import { Authorisationguard } from './guards/authorisation.guard';
import {ExamComponent} from "./exam/exam.component";


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},

  {path:"admin",component:AdminTemplateComponent,canActivate:[AuGuard],
  children:[
    {
    path:"etudiants",component:EtudiantComponent},
    {path:"enseignants",component:EnseignantComponent},
    {path:"classes",component:ClasseComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"ajouterTest",component:NewExamComponent},
    {path:"passerTest",component:PassExamComponent},
    {path:"exam/:id",component:ExamComponent},
    {path:"etudiantExam",component:EtudiantExamComponent},

]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
