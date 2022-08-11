import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NacionalidadesService {
  constructor(private http: HttpClient) {}

  getAllNacionalidades() {
    return this.http.get(environment.apiUrl + '/nacionalidades');
  }
  getNacionalidades(params: any) {
    return this.http.get(
      `${environment.apiUrl}/nacionalidades?nombre=${
        params.nombre ? params.nombre : ''
      }&page=${params.page ? params.page : 0}`
    );
  }
  getNacionalidad(id: number) {
    return this.http.get(environment.apiUrl + '/nacionalidades/' + id);
  }
  newNacionalidad(nacionalidad: any) {
    return this.http.post(environment.apiUrl + '/nacionalidades', nacionalidad);
  }
  editNacionalidad(nacionalidad: any, id: any) {
    nacionalidad.id = id;
    return this.http.put(environment.apiUrl + '/nacionalidades', nacionalidad);
  }
  eliminarNacionalidad(id: number) {
    return this.http.delete(environment.apiUrl + '/nacionalidades/' + id);
  }
}
