import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DisciplinasService } from '../servicios/disciplinas.service';
import { FacultadesService } from '../servicios/facultades.service';
import { JugadoresService } from '../servicios/jugadores.service';
import { NacionalidadesService } from '../servicios/nacionalidades.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  jugadores: any;
  disciplinas: any;
  facultades: any;
  nacionalidades: any;

  filterForm = this.fb.group({
    nombre: [null, [Validators.minLength(3)]],
    facultad: null,
    disciplina: null,
    nacionalidad: null,
  });

  constructor(
    private router: Router,
    private servicioJugadores: JugadoresService,
    private servicioNacionalidades: NacionalidadesService,
    private servicioDisciplinas: DisciplinasService,
    private servicioFacultades: FacultadesService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getNacionalidades();
    this.getDisciplinas();
    this.getFacultades();
    this.getJugadores();
  }

  private getJugadores() {
    this.servicioJugadores.getJugadores(this.filterForm.value).subscribe((res: any) => {
      this.jugadores = res.content;
    });
  }
  private getNacionalidades() {
    this.servicioNacionalidades.getNacionalidades().subscribe((rta) => {
      this.nacionalidades = rta;
    });
  }
  private getDisciplinas() {
    this.servicioDisciplinas.getDisciplinas().subscribe((rta) => {
      this.disciplinas = rta;
    });
  }
  private getFacultades() {
    this.servicioFacultades.getFacultades().subscribe((rta) => {
      this.facultades = rta;
    });
  }
  onVolverInicio() {
    this.router.navigate(['inicio']);
  }
  editar(id: number) {
    this.router.navigate([`editar-jugador/${id}`]);
  }
  eliminar(id: number) {
    this.servicioJugadores.eliminarJugador(id).subscribe((res) => {
      window.location.reload();
    });
  }
  filter() {
    this.getJugadores()
  }
  cleanFilters(){
    this.filterForm.reset();
    this.filter();
  }
}
