import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NacionalidadesService } from '../servicios/nacionalidades.service';

@Component({
  selector: 'app-nacionalidades',
  templateUrl: './nacionalidades.component.html',
  styleUrls: ['./nacionalidades.component.css'],
})
export class NacionalidadesComponent implements OnInit {
  nacionalidades: any;
  totalPages: any;
  actualPage: any;
  filterForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    page: 0
  });
  constructor(
    private router: Router,
    private servicioNacionalidades: NacionalidadesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getNacionalidades();
  }

  private getNacionalidades() {
    this.servicioNacionalidades
      .getNacionalidades(this.filterForm.value)
      .subscribe((res: any) => {
        this.nacionalidades = res.content;
        this.totalPages = Array(res.totalPages).fill(0);
        this.actualPage  = res.number;
      });
  }
  onVolverInicio() {
    this.router.navigate(['inicio']);
  }
  editar(id: number) {
    this.router.navigate([`editar-nacionalidad/${id}`]);
  }
  eliminar(id: number) {
    this.servicioNacionalidades.eliminarNacionalidad(id).subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (e) => {
        console.log(e);
        alert('La disciplina no se puede eliminar');
      },
    });
  }
  filter() {
    this.getNacionalidades();
  }
  cleanFilters() {
    this.filterForm.reset();
    this.filter();
  }
  changePage(index:number){
    this.filterForm.get('page')?.setValue(index);
    this.getNacionalidades()
  }
}
