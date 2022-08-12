import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinasService } from '../servicios/disciplinas.service';
import { NacionalidadesService } from '../servicios/nacionalidades.service';

@Component({
  selector: 'app-nueva-nacionalidad',
  templateUrl: './nueva-nacionalidad.component.html',
  styleUrls: ['./nueva-nacionalidad.component.css']
})
export class NuevaNacionalidadComponent implements OnInit {

  mode: string | undefined;
  nacionalidadId: any;

  registroForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder,
    private servicioNacionalidades: NacionalidadesService,
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
      return this.mode === 'edit' ? this.saveNacionalidad() : this.createNacionalidad()
    }
    createNacionalidad() {
      this.servicioNacionalidades.newNacionalidad(this.registroForm.value).subscribe((rta) => {
        console.log("Success", rta);
        window.location.reload();
      });
    }
    saveNacionalidad() {
      this.servicioNacionalidades.editNacionalidad(this.registroForm.value, this.nacionalidadId).subscribe((rta) => {
        console.log("Success", rta);
      });
    }
    onVolverInicio() {
      this.router.navigate(['inicio']);
    }
  
    setFormData() {
      this.nacionalidadId = this.route.snapshot.paramMap.get('id');
      this.servicioNacionalidades.getNacionalidad(this.nacionalidadId).subscribe(rta => {
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
