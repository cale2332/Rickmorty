import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspisodiosComponent } from './page/espisodios/espisodios.component';
import { PersonajesComponent } from './page/personajes/personajes.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { RegistroComponent } from './page/registro/registro.component';


const  routes:  Routes  = [
  { path: '', component:InicioComponent},
  { path: 'episodios', component:EspisodiosComponent},
  { path: 'personajes', component:PersonajesComponent},
  { path: 'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
