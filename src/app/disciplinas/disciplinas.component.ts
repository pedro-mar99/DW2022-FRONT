import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DisciplinasService } from '../servicios/disciplinas.service';
import { JugadoresService } from '../servicios/jugadores.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  disciplinas: any;
  totalPages: any;
  actualPage: any;
  filterForm = this.fb.group({
    nombre: [null, [Validators.minLength(3)]],
    page: 0
  });
  constructor(
    private router: Router,
    private servicioDisciplinas: DisciplinasService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getDisciplinas();
  }

  private getDisciplinas(){
    this.servicioDisciplinas.getDisciplinas(this.filterForm.value).subscribe((res:any) => {
      this.disciplinas = res.content;
      this.totalPages = Array(res.totalPages).fill(4);
      this.actualPage  = res.number;
    });
  }
  onVolverInicio() {
    this.router.navigate(['inicio']);
  }
  editar(id: number) {
    this.router.navigate([`editar-disciplina/${id}`]);
  }
  eliminar(id: number) {
    this.servicioDisciplinas.eliminarDisciplina(id).subscribe({
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
    this.getDisciplinas();
  }
  cleanFilters() {
    this.filterForm.reset();
    this.filter();
  }
  changePage(index:number){
    this.filterForm.get('page')?.setValue(index);
    this.getDisciplinas()
  }
}
