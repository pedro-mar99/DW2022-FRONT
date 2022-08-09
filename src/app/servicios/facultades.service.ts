import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {


  constructor(private http: HttpClient) { }

  getFacultades() {
    return this.http.get(environment.apiUrl + '/facultades');
  }
}
