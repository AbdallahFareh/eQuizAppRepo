import {Component, OnInit} from '@angular/core';
import {examService} from "../services/exam.layout.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-pass-exam',
  templateUrl: './pass-exam.component.html',
  styleUrl: './pass-exam.component.css'
})
export class PassExamComponent implements OnInit {

  public subjects : any[] = [];
  public user : any = {};
  role:any;
  constructor(private service:examService,
              private auth:AuthService){

  }
  ngOnInit(){
    this.getSubjects();
    this.getUserInfo();
  }


  getSubjects(){
    this.service.getAllSubject().subscribe((res : any) =>{
      this.subjects = res;
    })
  }

  getUserInfo(){
    // this.auth.getRole().subscribe((res:any) =>{
    //   this.user = res;
    // })

    this.role = this.auth.getRole();


  }


  delete(index: number) {
    let id = this.subjects[index].id;
    this.subjects.splice(index, 1);
    this.service.deleteSubject(id).subscribe((res:any) =>{
      alert("Subject supprimer");
    })
  }

}
