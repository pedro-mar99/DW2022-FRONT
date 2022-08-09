import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onJugadoresClick(){
    this.router.navigate(['jugadores']);
  }
  onNacionalidadesClick(){
    this.router.navigate(['nacionalidades']);
  }
  onDisciplinasClick(){
    this.router.navigate(['disciplinas']);
  }
  onNuevoJugadorClick(){
    this.router.navigate(['nuevo-jugador']);
  }
  onNuevaDisciplinaClick(){
    this.router.navigate(['nueva-disciplina']);
  }
  onNuevaNacionalidadClick(){
    this.router.navigate(['nueva-nacionalidad']);
  }
  
}
