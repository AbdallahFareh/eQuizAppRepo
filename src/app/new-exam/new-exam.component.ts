import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { examService } from '../services/exam.layout.service';
import { ClassesService } from '../services/classes.service';


@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.scss']
})
export class NewExamComponent implements OnInit {




  name= new FormControl();
  questions:any[]=[];
  questionsForm!:FormGroup;
  correctNum:any;
  startAdd:boolean=false;
  previewView:boolean=false;
  subjectName:String="";
  stepperIndex=0;
  public classes:String[]=[];



  constructor(private fb:FormBuilder,private service:examService,private __clService:ClassesService) { }

  ngOnInit(): void {
      this.createForm();

  }
  createForm(){
     this.questionsForm=this.fb.group({
      question:['',[Validators.required]],
      answer1:['',[Validators.required]],
      answer2:['',[Validators.required]],
      answer3:['',[Validators.required]],
      answer4:['',[Validators.required]],
       note:['',[Validators.required]],
      correctAnswer:['']

     })

  }
  creatQuestion() {
   if (this.correctNum){
   const model={
    question:this.questionsForm.value.question,
    answer1:this.questionsForm.value.answer1,
    answer2:this.questionsForm.value.answer2,
    answer3:this.questionsForm.value.answer3,
    answer4:this.questionsForm.value.answer4,
     note:this.questionsForm.value.note,
    correctAnswer:this.questionsForm.value[this.correctNum]

  }
    this.questions.push(model);
    this.questionsForm.reset();
} else {
  console.log("enter valid answer")
}
console.log(this.questions);

  }

  getCorrect(event: MatRadioChange) {
    this.correctNum=event.value;
    console.log(event.value);
    }

    start() {
      if(this.name.value==""){
        console.log("enter your matiere")

      }else
      {
        this.subjectName=this.name.value;

         this.startAdd=true;

      }
      if(this.startAdd){
        this.stepperIndex=1;
     }

}
clearForm() {
     this.questionsForm.reset();
}
cancel() {
  this.questionsForm.reset();
  this.questions=[];
  this.subjectName="";




  }
  submit(){
     const model={
      name:this.subjectName,
      questions:this.questions
     }
     this.service.createSubject(model).subscribe(res=>{this.previewView=true;})
     if(this.previewView){
        this.stepperIndex=2;
     }
  }
  loadClasses() {
    this.__clService.loadClasses().subscribe(
      libelles => {
        this.classes = libelles;
      },
      error => {
        console.error('Error loading classes', error);
      }
    );
  }

}
