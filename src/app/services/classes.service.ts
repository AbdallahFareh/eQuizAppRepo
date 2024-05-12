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
    return this.http.get<Classe[]>('http://127.0.0.1:8080/Classe/list').pipe(
      map(classes => classes.map(classe => classe.libelle)), // Extract only the libelle values
      catchError(error => {
        console.log('Error loading classes', error);
        throw error; // Rethrow the error to propagate it to the caller
      })
    );
  }
}
