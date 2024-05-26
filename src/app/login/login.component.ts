import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/app.layout.service'
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


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



  LoginForm!:FormGroup;
  password!: string;
  type: string="student";
  roles:string[]= [];
  res:any;
  users:any[]=[];


  constructor(private fb:FormBuilder,public layoutService: LayoutService, public __http:HttpClient ,private router:Router,private __auth:AuthService) { }

  ngOnInit(): void {
     this.createForm();

}
createForm(){
    this.LoginForm=this.fb.group({
        type:[this.type],
        email:[''],
        password:['']
    })
 }



 getRole($event: any) {
    this.type= $event.value;

    }

    submit() {
        this.__http.get<any>("http://localhost:3000/"+this.type).subscribe(res=>{

       const user= res.find((a:any)=>{

              res=a;
              return a.email === this.LoginForm.value.email && a.password===this.LoginForm.value.password
       })
       if(user){
        this.__auth.setRole(res.roles);
        this.__auth.setUsername(res.username);
        this.__auth.userId = user.id;
         this.__auth.user = user;
         console.log(res.roles)
        alert("Login Success"+this.roles);

        this.LoginForm.reset();
         if (res.roles.includes('STUDENT')) {
            this.router.navigate(['/admin/passerTest'])
         }
         if (res.roles.includes('ADMIN')) {
            this.router.navigate(['/admin/dashboard'])
         }
         if (res.roles.includes('PROFESSEUR')) {
            this.router.navigate(['/admin/dashboard'])
         }




       }else {
        alert("user not found")
       }

    })


        }

}
