import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:AdminTemplateComponent},
  {path:"admin",component:AdminTemplateComponent,children:[
    {path:"etudiants",component:EtudiantComponent},
    {path:"enseignants",component:EnseignantComponent},
    {path:"dashboard",component:DashboardComponent},

]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
