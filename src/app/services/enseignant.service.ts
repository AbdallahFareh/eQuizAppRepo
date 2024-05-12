import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private __http:HttpClient) { }
  addEnseignant(data:any):Observable<any> {
    return this.__http.post('http://127.0.0.1:8080/Enseignant/add',data)
  }

  getEnseignantList():Observable<any> {
    return this.__http.get<any>('http://127.0.0.1:8080/Enseignant/list');
  }

  deleteEnseignant(id:string):Observable<any> {
    return this.__http.delete(`http://127.0.0.1:8080/Enseignant/delete/${id}`);
  }

  updateEnseignant(id:number,data:any):Observable<any> {
    return this.__http.put(`http://127.0.0.1:8080/Enseignant/update/${id}`,data);
  }

}
