import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinasService } from '../servicios/disciplinas.service';

@Component({
  selector: 'app-nueva-disciplina',
  templateUrl: './nueva-disciplina.component.html',
  styleUrls: ['./nueva-disciplina.component.css']
})
export class NuevaDisciplinaComponent implements OnInit {

  mode: string | undefined;
  disciplinaId: any;

  registroForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]]
  });


  constructor(
    private fb: FormBuilder,
    private servicioDisciplinas: DisciplinasService,
    private router: Router,
    private route: ActivatedRoute,

    ) { }

  ngOnInit(): void {
    this.setMode();
    if (this.isEditMode()) {
      this.setFormData()
    }
  }

  onSubmit() {
    return this.mode === 'edit' ? this.saveDisciplina() : this.createJugador()
  }
  createJugador() {
    this.servicioDisciplinas.newDisciplina(this.registroForm.value).subscribe((rta) => {
      console.log("Success", rta);
      window.location.reload();
    });
  }
  saveDisciplina() {
    this.servicioDisciplinas.editDisciplina(this.registroForm.value, this.disciplinaId).subscribe((rta) => {
      console.log("Success", rta);
    });
  }
  onVolverInicio() {
    this.router.navigate(['inicio']);
  }

  setFormData() {
    this.disciplinaId = this.route.snapshot.paramMap.get('id');
    this.servicioDisciplinas.getDisciplina(this.disciplinaId).subscribe(rta => {
      const disciplina: any = rta
      this.registroForm.patchValue(rta)
    });
  }
  isEditMode() {
    return this.mode === 'edit';
  }
  setMode() {
    this.mode = this.route.snapshot.params['id'] ? 'edit' : 'create';
  }

}
