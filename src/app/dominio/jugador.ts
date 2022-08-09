import { Disciplina } from './disciplina';
import { Facultad } from './facultad';

export class Jugador {
  nombre: string;
  apellido: string;
  dni: number;
  facultad: Facultad;
  fechaNacimiento: Date;
  disciplina: Disciplina;
  nacionalidad: string;
  constructor(
    nombre: string,
    apellido: string,
    dni: number,
    facultad: Facultad,
    fechaNacimiento: Date,
    disciplina: Disciplina,
    nacionalidad: string,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.facultad = facultad;
    this.fechaNacimiento = fechaNacimiento;
    this.disciplina = disciplina;
    this.nacionalidad = nacionalidad;
  }

  public getFullName(): string {
    return this.apellido + ', ' + this.nombre;
  }
}
