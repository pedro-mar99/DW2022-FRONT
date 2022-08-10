import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { url } from 'inspector';
import { environment } from 'src/environments/environment';
import { Jugador } from '../dominio/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private _jugadores: [{
    nombre: string,
    apellido: string,
    dni: number,
    fechaNacimiento: string,
    facultad: object,
    disciplina: object,
    nacionalidad: string,
  }] = [{
    nombre: 'Matias',
    apellido: 'Cassani',
    dni: 1234567,
    fechaNacimiento: "12-12-1212",
    facultad: { codigo: 'VMA', nombre: 'Villa María' },
    disciplina: { codigo: 'FTB', nombre: 'Fútbol' },
    nacionalidad: 'Argentina',
  }];

  constructor(private http: HttpClient) { }
  get jugadores() {
    return this._jugadores;
  }
  agregarNuevoJugador(jugador: any) {
    this._jugadores.push(jugador);
  }
  getJugadores() {
    return this.http.get(environment.apiUrl + '/jugadores')
  }
  getJugador(id: number) {
    return this.http.get(environment.apiUrl + '/jugadores/' + id)
  }
  newJugador(jugador: any) {
    return this.http.post(environment.apiUrl + '/jugadores', jugador)
  }
  editJugador(jugador: any, id: any) {
    jugador.id = id;
    return this.http.put(environment.apiUrl + '/jugadores', jugador)
  }
  eliminarJugador(id: number){
    return this.http.delete(environment.apiUrl + '/jugadores/' + id);
  }
  

}
