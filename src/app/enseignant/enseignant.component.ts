import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddEnseignantComponent } from '../add-enseignant/add-enseignant.component';
import { EnseignantService } from '../services/enseignant.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrl: './enseignant.component.css'
})
export class EnseignantComponent implements OnInit,AfterViewInit  {


  public professors:any;
  public dataSource: any=[];
  public displayedColumns = ["id", "nom", "prenom","Email","action"];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private router:Router,private http: HttpClient,
    private dialog:MatDialog,
    private __enService:EnseignantService,
    private __coreService:CoreService,
    ) {
   
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    
   this.getEnseignantList();
   
  }

  getEnseignantList(){
    this.__enService.getEnseignantList().subscribe({
      next: (data) => {
        this.professors = data; 
        this.dataSource = new MatTableDataSource(this.professors);
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.error('Error fetching professors:', error);
      }
    });
  }
  

  applyFilter($event:Event) {
    let value=(event?.target as HTMLInputElement).value;
    this.dataSource.filter=value.trim();
    
    
  }
  openAddEnForm(){
    const dialogRef=this.dialog.open(AddEnseignantComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.__coreService.openSnackBar('Enseignant Ajouté')
          this.getEnseignantList();
        }
      }
    })
    
  }

  deleteEnseignant(id:string){
    this.__enService.deleteEnseignant(id).subscribe({
      next :(res)=>{
        this.__coreService.openSnackBar('Enseignant Supprimé')
        this.getEnseignantList();

      },
      error:console.log,
    })
  }


  openEditEnForm(data:any){
    const dialogRef=this.dialog.open(AddEnseignantComponent,{
      data:data
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.__coreService.openSnackBar('Enseignant Modifié')
          this.getEnseignantList();
        }
      }
    })
    
  }


}