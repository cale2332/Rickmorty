import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/core/servicios.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes: [];
  public personaje:any;
  showModal: boolean = false;

  constructor(private serviciosService: ServiciosService) { 
    this.serviciosService.obtenerPersonajes().subscribe((data) => {
      if(data)
      {
        this.personajes = data.results;
        console.log(this.personajes);
      }
}, error => {
       console.log(error);
     });
  }

  ngOnInit(): void {
  }

  seleccionarPersonaje(personaje, seMuestra) {
    this.showModal = seMuestra;
    this.personaje = personaje;
 }
}
