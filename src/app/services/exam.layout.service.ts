import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, effect, signal } from '@angular/core';
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
}
