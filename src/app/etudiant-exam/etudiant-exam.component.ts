import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";



@Component({
  selector: 'app-etudiant-exam',
  templateUrl: './etudiant-exam.component.html',
  styleUrl: './etudiant-exam.component.css'
})
export class EtudiantExamComponent implements OnInit{
  displayedColumns:any;
  dataSource:any;
  dataTable:any;

  constructor(private auth : AuthService) {
    this.displayedColumns = ['position', 'name', 'subjectName', 'degree']
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.auth.getAllStudent().subscribe((res:any)=>{
      this.dataSource = res?.map((student:any)=>{
        if(student?.subjects) {
          return student?.subjects?.map((sub:any)=>{
            return {
              name:student.username,
              subjectName:sub.name,
              degree:sub.degree
            }
          })
        }
        else {
          return [{
            name:student.username,
            subjectName:"-",
            degree:"-"
          }]
        }

      })
      this.dataTable = [];
      this.dataSource.forEach((item:any)=>{
        item.forEach((subItem:any)=>{
          this.dataTable.push(
            {
              name:subItem.name,
              subjectName:subItem.subjectName,
              degree:subItem.degree
            }
          )
        })

      })
    console.log(this.dataTable)
    })
  }

}
