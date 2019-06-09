import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  uri = 'http://localhost:3003/programa';

  constructor(private http: HttpClient) { }
  addPrograma(nombre , facultad ) {
    const obj = {
      nombre: nombre,
facultad: facultad

    };
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }
  getPrograma() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editPrograma(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }
  updatePrograma(nombre , facultad , id) {

    const obj = {
      nombre: nombre,
facultad: facultad

      };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
 deletePrograma(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
