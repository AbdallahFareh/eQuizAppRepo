import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddClasseComponent } from '../add-classe/add-classe.component';
import { ClassesService } from '../services/classes.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent implements OnInit,AfterViewInit  {


  public classes:any;
  public dataSource: any=[];
  public displayedColumns = ["libelle", "action"];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private router:Router,private http: HttpClient,
    private dialog:MatDialog,
    private __clService:ClassesService,
    private __coreService:CoreService,
    ) {
   
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    
   this.getClasseList();
   
  }

  getClasseList(){
    this.__clService.getClasseList().subscribe({
      next: (data) => {
        this.classes = data; 
        this.dataSource = new MatTableDataSource(this.classes);
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.error('Error fetching classes:', error);
      }
    });
  }
  

  applyFilter($event:Event) {
    let value=(event?.target as HTMLInputElement).value;
    this.dataSource.filter=value.trim();
    
    
  }
  openAddClForm(){
    const dialogRef=this.dialog.open(AddClasseComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.__coreService.openSnackBar('Classe Ajouté')
          this.getClasseList();
        }
      }
    })
    
  }

  deleteClasse(id:string){
    this.__clService.deleteClasse(id).subscribe({
      next :(res)=>{
        this.__coreService.openSnackBar('Classe Supprimé')
        this.getClasseList();

      },
      error:console.log,
    })
  }


 


}