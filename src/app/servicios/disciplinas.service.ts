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
  getDisciplina(id: number) {
    return this.http.get(environment.apiUrl + '/disciplinas/' + id)
  }
  newDisciplina(disciplina: any){
    return this.http.post(environment.apiUrl + '/disciplinas', disciplina)
  }
  editDisciplina(disciplina: any, id: any) {
    disciplina.id = id;
    return this.http.put(environment.apiUrl + '/disciplinas', disciplina)
  }
  eliminarDisciplina(id: number){
    return this.http.delete(environment.apiUrl + '/disciplinas/' + id);
  }
}
