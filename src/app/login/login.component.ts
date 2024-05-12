import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/app.layout.service'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{

  valCheck: string[] = ['remember'];
  

  password!: string;
  selectedRole!: string; 
  roles:any[]= [];


  constructor(public layoutService: LayoutService, public __http:HttpClient ) { }

  ngOnInit(): void {
     this.getUsers();
     this.roles = [
      { name: 'Administrateur', value: "Admin" },
      { name: 'Enseignant', value: "Enseignant" },
      { name: 'Etudiant', value: "Etudiant" }
  ];
}

 getUsers(){
     this.__http.get("http://localhost:3000/users").subscribe(res=>{console.log(res)})
 }

}
