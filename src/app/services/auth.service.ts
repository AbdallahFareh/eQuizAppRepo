import { Injectable, OnInit } from '@angular/core';
import { LayoutService } from './app.layout.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {



  roles:string[]= [];
  res:any;
  user:any={};
  username!:string;
  isAuthenticated:boolean=false;
  userId:any;


  constructor( public __http:HttpClient ,private router:Router) { }

  ngOnInit(): void {


}




  getRole(){
    return this.roles;
  }

  getStudent(){
    return this.user;
  }
  updateStudent(id:any, model:any){
    return this.__http.put('http://localhost:3000/student/' + id, model)
  }

   setRole(role:any){
    this.isAuthenticated=true;
    this.roles=role;
    console.log(this.roles)
    }

    setUsername(username: any) {
     this.username=username;
  }
   logout(){
    this.isAuthenticated=false;
    this.roles=[];
    this.username="";
  }



}
