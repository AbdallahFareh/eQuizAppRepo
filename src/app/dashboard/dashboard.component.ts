import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { examService } from '../services/exam.layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roles: any = this.auth.roles;
  nbStudents: number = 0;
  nbProfesseurs: number = 0;
  nbExamens: number = 0;

  constructor(private auth: AuthService, private examService: examService) {}

  ngOnInit() {
    this.auth.getAllStudent().subscribe(
      (response: any) => {
        const students = response as any[];
        this.nbStudents = students.length;
      },
      (error) => {
        console.error('Error fetching student count: ', error);
      }
    );

    this.auth.getAllProfesseur().subscribe(
      (response: any) => {
        const professors = response as any[];
        this.nbProfesseurs = professors.length;
      },
      (error) => {
        console.error('Error fetching professor count: ', error);
      }
    );

    this.examService.getAllSubject().subscribe(
      (response: any) => {
        const subjects = response as any[];
        this.nbExamens = subjects.length;
      },
      (error) => {
        console.error('Error fetching subject count: ', error);
      }
    );
  }
}
