import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/core/servicios.service';

@Component({
  selector: 'app-espisodios',
  templateUrl: './espisodios.component.html',
  styleUrls: ['./espisodios.component.css']
})
export class EspisodiosComponent implements OnInit {

  public episodios: [];
  public personajes: [];
  public episodio:any;
  showModal: boolean = false;

  constructor(private serviciosService: ServiciosService) { 
    this.serviciosService.obtenerEpisodios().subscribe((data) => {
      if(data)
      {
        this.episodios = data.results;
        console.log(this.episodios);
      }
}, error => {
       console.log(error);
     });
  }

  ngOnInit(): void {
  }

  seleccionarEpisodio(episodio, seMuestra) {
    this.showModal = seMuestra;
    this.episodio = episodio;
    let indicePersonajes = [];
    episodio.characters.forEach(e => {
      indicePersonajes.push(e.replace('https://rickandmortyapi.com/api/character/', ''))
    });
    console.log(indicePersonajes);

    this.serviciosService.obtenerRangoPersonajes(indicePersonajes).subscribe((data) => {
      if(data)
      {
        this.personajes = data;
        console.log(this.personajes);
      }
      }, error => {
            console.log(error);
       });


 }
}