import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinasService } from '../servicios/disciplinas.service';
import { NacionalidadesService } from '../servicios/nacionalidades.service';
import { JugadoresService } from '../servicios/jugadores.service';
import { FacultadesService } from '../servicios/facultades.service';
import { RolesService } from '../servicios/roles.service';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css'],
})
export class NuevoJugadorComponent implements OnInit {
  nacionalidades: any;
  disciplinas: any;
  facultades: any;
  roles: any;
  mode: string | undefined;
  jugadorId: any;


  registroForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    legajo: ['', [Validators.required]],
    facultad: ['', [Validators.required]],
    disciplina: ['', [Validators.required]],
    nacionalidad: ['', [Validators.required]],
  });

  constructor(
    private servicioNacionalidades: NacionalidadesService,
    private servicioDisciplinas: DisciplinasService,
    private router: Router,
    private fb: FormBuilder,
    private servicioJugadores: JugadoresService,
    private servicioFacultades: FacultadesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getNacionalidades();
    this.getDisciplinas();
    this.getFacultades();
  }

  private getNacionalidades() {
    this.servicioNacionalidades.getAllNacionalidades().subscribe((rta) => {
      this.nacionalidades = rta;
    });
  }
  private getDisciplinas() {
    this.servicioDisciplinas.getAllDisciplinas().subscribe((rta) => {
      this.disciplinas = rta;
    });
  }
  private getFacultades() {
    this.servicioFacultades.getFacultades().subscribe((rta) => {
      this.facultades = rta;
      this.setMode();
    if (this.isEditMode()) {
      this.setFormData();
    }
    });
  }

  onSubmit() {
    return this.mode === 'edit' ? this.saveJugador() : this.createJugador();
  }
  createJugador() {
    this.servicioJugadores
      .newJugador(this.registroForm.value)
      .subscribe((rta) => {
        window.location.reload();
      });
  }
  saveJugador() {
    this.servicioJugadores
      .editJugador(this.registroForm.value, this.jugadorId)
      .subscribe((rta) => {
        this.router.navigate(['/jugadores']);
      });
  }
  onVolverInicio() {
    this.router.navigate(['inicio']);
  }
  onNuevaDisciplina() {
    this.router.navigate(['/nueva-disciplina']);
  }
  onNuevaNacionalidad() {
    this.router.navigate(['/nueva-nacionalidad']);
  }

  setFormData() {
    this.jugadorId = this.route.snapshot.paramMap.get('id');
    this.servicioJugadores.getJugador(this.jugadorId).subscribe((rta) => {
      const jugador: any = rta;
      this.registroForm.patchValue(rta);
      this.registroForm
        .get('facultad')
        ?.setValue(
          this.facultades.find((f: any) => f.id === jugador.facultad.id)
        );
      this.registroForm
        .get('disciplina')
        ?.setValue(
          this.disciplinas.find((d: any) => d.id === jugador.disciplina.id)
        );
      this.registroForm
        .get('nacionalidad')
        ?.setValue(
          this.nacionalidades.find((d: any) => d.id === jugador.nacionalidad.id)
        );
    });
  }
  isEditMode() {
    return this.mode === 'edit';
  }
  setMode() {
    this.mode = this.route.snapshot.params['id'] ? 'edit' : 'create';
  }
}
