import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NacionalidadesService } from '../servicios/nacionalidades.service';

@Component({
  selector: 'app-nacionalidades',
  templateUrl: './nacionalidades.component.html',
  styleUrls: ['./nacionalidades.component.css']
})
export class NacionalidadesComponent implements OnInit {
  nacionalidades: any;

  constructor(
    private router: Router,
    private servicioNacionalidades: NacionalidadesService,
  ) { }

  ngOnInit(): void {
    this.servicioNacionalidades.getNacionalidades().subscribe(res =>{
      this.nacionalidades = res
    })
  }
  onVolverInicio(){
    this.router.navigate(['inicio']);
  }
  editar(id: number){}
  eliminar(id: number){}
}
