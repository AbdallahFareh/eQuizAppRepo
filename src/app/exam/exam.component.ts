import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {examService} from "../services/exam.layout.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent implements OnInit{
  id:any;
  user:any;
  subject:any;
  role:any;
  constructor(private route: ActivatedRoute,
              private service: examService,
              private auth: AuthService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.getSubject();
    this.getUserInfo();
  }

  getSubject(){
    this.service.getSubjectById(this.id).subscribe(res=>{
      this.subject = res;
    })
  }

  delete(index: number) {
    let id = this.subject.questions[index].id;
    this.subject.questions.splice(index, 1);
    this.service.deleteSubject(id).subscribe((res:any) =>{
      alert("Subject supprimer");
    })
  }
  getUserInfo(){
    // this.auth.getRole().subscribe((res:any) =>{
    //   this.user = res;
    // })

    this.role = this.auth.getRole();


  }


}
