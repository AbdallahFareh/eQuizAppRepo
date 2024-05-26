import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
interface Classe {
  libelle: string;
}


@Injectable({
  providedIn: 'root'
})
export class ClassesService {



  constructor(private http: HttpClient) { }

  loadClasses(): Observable<string[]> {
    return this.http.get<Classe[]>('http://127.0.0.1:3000/classes').pipe(
      map(classes => classes.map(classe => classe.libelle)), // Extract only the libelle values
      catchError(error => {
        console.log('Error loading classes', error);
        throw error; // Rethrow the error to propagate it to the caller
      })
    );
  }

  addClasse(data:any):Observable<any> {
    return this.http.post('http://127.0.0.1:8080/Classe/add',data)
  }

  getClasseList():Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8080/Classe/list');
  }

  deleteClasse(id:string):Observable<any> {
    return this.http.delete(`http://127.0.0.1:8080/Classe/delete/${id}`);
  }

}
