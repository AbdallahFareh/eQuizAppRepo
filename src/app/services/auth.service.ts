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
  users:any[]=[];
  username!:string;


  constructor( public __http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
     
  
}



 

 
   setRole(role:any){
        
    this.roles=role;
    console.log(this.roles)
    }

    setUsername(username: any) {
     this.username=username;
  }
    
      
        
}