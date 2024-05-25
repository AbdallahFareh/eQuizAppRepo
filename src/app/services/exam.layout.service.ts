import { HttpClient } from '@angular/common/http';
import {EnvironmentInjector, Injectable, effect, signal, model} from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environment/environment';


@Injectable({
    providedIn: 'root',
})
export class examService {
    constructor(private http:HttpClient){

    }
    createSubject(model:any){
        return this.http.post('http://localhost:3000/subjects',model)
    }

  getAllSubject(){
    return this.http.get('http://localhost:3000/subjects')
  }
  getSubjectById(id:number){
    return this.http.get('http://localhost:3000/subjects/' + id)
  }

  deleteSubject(id:number){
    return this.http.delete('http://localhost:3000/subjects/' + id)
  }

  deleteQuestion(model:any, id:number){
    return this.http.put('http://localhost:3000/subjects/' + id, model)
  }

}
