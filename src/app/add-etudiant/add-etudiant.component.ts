import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { EtudiantService } from '../services/etudiant.service';
import { ClassesService } from '../services/classes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.css'
})
export class AddEtudiantComponent implements OnInit{
   
  
   public etForm:FormGroup;
   public classes:String[]=[];
   constructor(private fb:FormBuilder,private http:HttpClient,
    private _etService:EtudiantService,
    private __clService:ClassesService,
    private dialogRef: MatDialogRef<AddEtudiantComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){
    this.etForm=this.fb.group({
      
        id: '',
        nom: '',
        prenom: '',
        email: '',
        dateDeNaissance:''
    
    })}
   
  
    
  

   
    ngOnInit() {
      this.loadClasses();
      this.etForm.patchValue(this.data);
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




   onFormSubmit(): void {
    if(this.data){
      this._etService.updateEtudiant(this.data.id,this.etForm.value).subscribe({
        next:(val:any)=>{
          this.dialogRef.close(true);
        },error:(err:any)=>{
          console.error(err);
        },
      })
    }else{
      if (this.etForm.valid) {
        this._etService.addEtudiant(this.etForm.value).subscribe({
          next:(val:any)=>{
            this.dialogRef.close(true);
          },
          error: (err:any)=>{
            console.error(err)
          }
        })
        console.log('Form submitted:', this.etForm.value);


    }
   




      
  }
}


cancel(): void {
 
  this.dialogRef.close('cancelled');
}
}
