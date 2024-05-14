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


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  
  {path:"admin",component:AdminTemplateComponent,children:[
    {path:"etudiants",component:EtudiantComponent},
    {path:"enseignants",component:EnseignantComponent},
    {path:"classes",component:ClasseComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"ajouterTest",component:NewExamComponent},
    {path:"passerTest",component:PassExamComponent},

]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
