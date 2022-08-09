import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from '../servicios/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  jugadores: any;
  disciplinas: any[] = [];
  facultades: any[] = [];

  constructor(
    private router: Router,
    private servicioJugadores: JugadoresService,
  ) { }

  ngOnInit(): void {
    this.servicioJugadores.getJugadores().subscribe(res => {
      console.log(res);
      this.jugadores = res
    });
    // this.disciplinas = this.servicioDisciplinas.getDisciplinas();
    // this.facultades = this.servicioFacultades.getFacultades();
  }
  onVolverInicio() {
    this.router.navigate(['inicio']);
  }
  editar(id: number) {
    this.router.navigate([`editar-jugador/${id}`])
  }
  eliminar(id: number) {
    this.servicioJugadores.eliminarJugador(id).subscribe(res => {
      window.location.reload();
    });
  }
}
