import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { InicioComponent } from './inicio/inicio.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { NacionalidadesComponent } from './nacionalidades/nacionalidades.component';
import { NuevaDisciplinaComponent } from './nueva-disciplina/nueva-disciplina.component';
import { NuevaNacionalidadComponent } from './nueva-nacionalidad/nueva-nacionalidad.component';
import { NuevoJugadorComponent } from './nuevo-jugador/nuevo-jugador.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'nuevo-jugador',component:NuevoJugadorComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'jugadores', component:JugadoresComponent},
  {path: 'nuevo-jugador', component:NuevoJugadorComponent},
  {path: 'editar-jugador/:id', component:NuevoJugadorComponent},
  {path: 'nueva-disciplina', component:NuevaDisciplinaComponent},
  {path: 'editar-disciplina/:id', component:NuevaDisciplinaComponent},
  {path: 'editar-nacionalidad/:id', component:NuevaNacionalidadComponent},
  {path: 'nueva-nacionalidad', component:NuevaNacionalidadComponent},
  {path: 'disciplinas', component:DisciplinasComponent},
  {path: 'nacionalidades', component:NacionalidadesComponent},

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
