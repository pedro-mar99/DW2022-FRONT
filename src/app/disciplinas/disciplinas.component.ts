import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinasService } from '../servicios/disciplinas.service';
import { JugadoresService } from '../servicios/jugadores.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  disciplinas: any;

  constructor(
    private router: Router,
    private servicioDisciplinas: DisciplinasService,
  ) { }

  ngOnInit(): void {
    this.servicioDisciplinas.getDisciplinas().subscribe(res =>{
      this.disciplinas = res
    })
  }
  onVolverInicio(){
    this.router.navigate(['inicio']);
  }
  editar(id: number){}
  eliminar(id: number){}
}
