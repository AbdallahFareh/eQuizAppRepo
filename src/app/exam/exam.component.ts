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
  total:number = 0;
  resultget:boolean = false;
  subjectTotal:number = 0;
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
    let id = this.subject.id;
    this.subject.questions.splice(index, 1);
    const model = {
      name: this.subject.name,
      questions: this.subject.questions
    }
    this.service.deleteQuestion(model, id).subscribe((res:any)=>{
      alert("Question supprime");
    })
  }
  getUserInfo(){
    // this.auth.getRole().subscribe((res:any) =>{
    //   this.user = res;
    // })

    this.role = this.auth.getRole();


  }


  getAnswer(event: any) {
    let data = event.value;
    let questionIndex = event.source.name;
    // console.log(questionIndex)
      this.subject.questions[questionIndex].studentAnswer = data
     console.log(this.subject.questions)
     //console.log(event)

  }

  getResult() {
    this.resultget = true;
    this.total = 0;
    this.subjectTotal = 0;
    for(let x in this.subject.questions){
      this.subjectTotal = this.subjectTotal + this.subject.questions[x].note;
      if(this.subject.questions[x].studentAnswer == this.subject.questions[x].correctAnswer){
        this.total = this.total + this.subject.questions[x].note;
      }
    }
    console.log(this.total)

  }
}
