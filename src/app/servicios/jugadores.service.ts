import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  constructor(private http: HttpClient) {}

  getJugadores(params: any) {
    return this.http.get(
      `${environment.apiUrl}/jugadores?nombre=${
        params.nombre ? params.nombre : ''
      }&facultad=${params.facultad ? params.facultad.nombre : ''}&disciplina=${
        params.disciplina ? params.disciplina.nombre : ''
      }&nacionalidad=${
        params.nacionalidad ? params.nacionalidad.nombre : ''
      }&page=${params.page? params.page: 0}`
    );
  }
  getJugador(id: number) {
    return this.http.get(environment.apiUrl + '/jugadores/' + id);
  }
  newJugador(jugador: any) {
    return this.http.post(environment.apiUrl + '/jugadores', jugador);
  }
  editJugador(jugador: any, id: any) {
    jugador.id = id;
    return this.http.put(environment.apiUrl + '/jugadores', jugador);
  }
  eliminarJugador(id: number) {
    return this.http.delete(environment.apiUrl + '/jugadores/' + id);
  }
}
