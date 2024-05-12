import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private __http:HttpClient) { }
  addEtudiant(data:any):Observable<any> {
    return this.__http.post('http://127.0.0.1:8080/Etudiant/add',data)
  }

  getEtudiantList():Observable<any> {
    return this.__http.get<any>('http://127.0.0.1:8080/Etudiant/list');
  }

  deleteEtudiant(id:string):Observable<any> {
    return this.__http.delete(`http://127.0.0.1:8080/Etudiant/delete/${id}`);
  }

  updateEtudiant(id:number,data:any):Observable<any> {
    return this.__http.put(`http://127.0.0.1:8080/Etudiant/update/${id}`,data);
  }

}
