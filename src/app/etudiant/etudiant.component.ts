import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddEtudiantComponent } from '../add-etudiant/add-etudiant.component';
import { EtudiantService } from '../services/etudiant.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit,AfterViewInit  {


  public students:any;
  public dataSource: any=[];
  public displayedColumns = ["id", "nom", "prenom","Email","Classe","action"];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private router:Router,private http: HttpClient,
    private dialog:MatDialog,
    private __etService:EtudiantService,
    private __coreService:CoreService
    ) {
   
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    
   this.getEtudiantList();
   
  }

  getEtudiantList(){
    this.__etService.getEtudiantList().subscribe({
      next: (data) => {
        this.students = data; 
        this.dataSource = new MatTableDataSource(this.students);
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
      }
    });
  }
  

  applyFilter($event:Event) {
    let value=(event?.target as HTMLInputElement).value;
    this.dataSource.filter=value.trim();
    
    
  }
  openAddEtForm(){
    const dialogRef=this.dialog.open(AddEtudiantComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.__coreService.openSnackBar('Etudiant Ajouté')
          this.getEtudiantList();
        }
      }
    })
    
  }

  deleteEtudiant(id:string){
    this.__etService.deleteEtudiant(id).subscribe({
      next :(res)=>{
        this.__coreService.openSnackBar('Etudiant Supprimé')
        this.getEtudiantList();

      },
      error:console.log,
    })
  }


  openEditEtForm(data:any){
    const dialogRef=this.dialog.open(AddEtudiantComponent,{
      data:data
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.__coreService.openSnackBar('Etudiant Modifié')
          this.getEtudiantList();
        }
      }
    })
    
  }


}