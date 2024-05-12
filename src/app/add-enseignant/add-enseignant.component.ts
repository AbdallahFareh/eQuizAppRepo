import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { EnseignantService} from '../services/enseignant.service';
import { ClassesService } from '../services/classes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrl: './add-enseignant.component.css'
})
export class AddEnseignantComponent implements OnInit{
   
  
   public enForm:FormGroup;
   public classes:String[]=[];
   constructor(private fb:FormBuilder,private http:HttpClient,
    private _enService:EnseignantService,
    private __clService:ClassesService,
    private dialogRef: MatDialogRef<AddEnseignantComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){
    this.enForm=this.fb.group({
      
        id: '',
        nom: '',
        prenom: '',
        email: ''
    
    })}
   
  
    
  

   
    ngOnInit() {
      this.loadClasses();
      this.enForm.patchValue(this.data);
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
      this._enService.updateEnseignant(this.data.id,this.enForm.value).subscribe({
        next:(val:any)=>{
          this.dialogRef.close(true);
        },error:(err:any)=>{
          console.error(err);
        },
      })
    }else{
      if (this.enForm.valid) {
        this._enService.addEnseignant(this.enForm.value).subscribe({
          next:(val:any)=>{
            this.dialogRef.close(true);
          },
          error: (err:any)=>{
            console.error(err)
          }
        })
        console.log('Form submitted:', this.enForm.value);


    }
   




      
  }
}


cancel(): void {
 
  this.dialogRef.close('cancelled');
}
}
