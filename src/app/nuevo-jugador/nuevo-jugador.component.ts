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
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {

  nacionalidades: any;
  disciplinas: any;
  facultades: any;
  roles: any;
  mode: string | undefined;
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
  ) { }

  ngOnInit(): void {
    this.servicioNacionalidades.getNacionalidades().subscribe((rta) => {
      this.nacionalidades = rta;
    });
    this.servicioDisciplinas.getDisciplinas().subscribe((rta) => {
      this.disciplinas = rta;
    });
    this.servicioFacultades.getFacultades().subscribe((rta) => {
      this.facultades = rta;
    });
    
    this.setMode();
    
    if(this.isEditMode()){
      this.setFormData()
    } 
  }

  onSubmit() {
    return this.mode === 'edit'? this.saveJugador(): this.createJugador()
  }
  createJugador(){
    this.servicioJugadores.newJugador(this.registroForm.value).subscribe((rta) => {
      console.log("Success", rta);
    });
  }
  saveJugador(){
    this.servicioJugadores.editJugador(this.registroForm.value).subscribe((rta) => {
      console.log("Success", rta);
    });
  }
  onVolverInicio() {
    this.router.navigate(['inicio']);
  }

  setFormData(){
    const id = this.route.snapshot.params['id'];
    this.servicioJugadores.getJugador(id).subscribe(rta =>{
      const jugador: any = rta
      this.registroForm.patchValue(rta)
      this.registroForm.get('facultad')?.setValue(
        this.facultades.find((f: any) => f.id === jugador.facultad.id)
      )
      this.registroForm.get('disciplina')?.setValue(
        this.disciplinas.find((d: any) => d.id === jugador.disciplina.id)
      )
      this.registroForm.get('nacionalidad')?.setValue(
        this.nacionalidades.find((d: any) => d.id === jugador.nacionalidad.id)
      )
    });
  }
  isEditMode(){
    return this.mode === 'edit';
  }
  setMode(){
    this.mode = this.route.snapshot.params['id']?'edit':'create';
  }
}