import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ClassesService } from '../services/classes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrl: './add-classe.component.css'
})
export class AddClasseComponent implements OnInit{
   
  
   public clForm:FormGroup;
   public classes:String[]=[];
   constructor(private fb:FormBuilder,private http:HttpClient,
    private _clService:ClassesService,
    private __clService:ClassesService,
    private dialogRef: MatDialogRef<AddClasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){
    this.clForm=this.fb.group({
      
        libelle: ''
       
    
    })}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   
  





   onFormSubmit(): void {
    
      if (this.clForm.valid) {
        this._clService.addClasse(this.clForm.value).subscribe({
          next:(val:any)=>{
            this.dialogRef.close(true);
          },
          error: (err:any)=>{
            console.error(err)
          }
        })
        console.log('Form submitted:', this.clForm.value);


    }
   

  }


cancel(): void {
 
  this.dialogRef.close('cancelled');
}
}
