import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  uri = 'http://localhost:3003/facultad';

  constructor(private http: HttpClient) { }
  addFacultad(nombre , ubicacion , descripcion ) {
    const obj = {
      nombre: nombre,
ubicacion: ubicacion,
descripcion: descripcion

    };
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }
  getFacultad() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editFacultad(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }
  updateFacultad(nombre , ubicacion , descripcion , id) {

    const obj = {
      nombre: nombre,
ubicacion: ubicacion,
descripcion: descripcion

      };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
 deleteFacultad(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
