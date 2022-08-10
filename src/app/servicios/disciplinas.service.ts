import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {


  
  constructor(private http: HttpClient) { }
  
  getDisciplinas(){
    return this.http.get(environment.apiUrl + '/disciplinas');
  }
  eliminarDisciplina(id: number) {
    return this.http.delete(environment.apiUrl + '/disciplinas/' + id);
  }
}
