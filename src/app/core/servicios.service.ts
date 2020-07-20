import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(public httpClient: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    return this.httpClient.get<any[]>(`https://rickandmortyapi.com/api/character/`);
  }

  obtenerEpisodios(): Observable<any> {
    return this.httpClient.get<any[]>(`https://rickandmortyapi.com/api/episode/`);
  }

  obtenerRangoPersonajes(rango: any): Observable<any> {
    return this.httpClient.get<any[]>(`https://rickandmortyapi.com/api/character/${rango.join()}`);
  }
}
