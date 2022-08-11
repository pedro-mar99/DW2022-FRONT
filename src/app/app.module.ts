import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NuevoJugadorComponent } from './nuevo-jugador/nuevo-jugador.component';
import { InicioComponent } from './inicio/inicio.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { NacionalidadesComponent } from './nacionalidades/nacionalidades.component';
import { NuevaNacionalidadComponent } from './nueva-nacionalidad/nueva-nacionalidad.component';
import { NuevaDisciplinaComponent } from './nueva-disciplina/nueva-disciplina.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PaginatorComponent } from './componentes/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoJugadorComponent,
    InicioComponent,
    JugadoresComponent,
    DisciplinasComponent,
    NacionalidadesComponent,
    NuevaNacionalidadComponent,
    NuevaDisciplinaComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
