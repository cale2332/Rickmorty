import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './page/personajes/personajes.component';
import { EspisodiosComponent } from './page/espisodios/espisodios.component';
import { RegistroComponent } from './page/registro/registro.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    EspisodiosComponent,
    RegistroComponent,
    InicioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
