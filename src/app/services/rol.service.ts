import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  uri = 'http://localhost:3003/rol';

  constructor(private http: HttpClient) { }
  addRol(nombre , perfil , permisos ) {
    const obj = {
      nombre: nombre,
perfil: perfil,
permisos: permisos

    };
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }
  getRol() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editRol(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }
  updateRol(nombre , perfil , permisos , id) {

    const obj = {
      nombre: nombre,
perfil: perfil,
permisos: permisos

      };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
 deleteRol(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
