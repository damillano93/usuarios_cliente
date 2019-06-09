import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  uri = 'http://localhost:3003/usuarios';

  constructor(private http: HttpClient) { }
  addUsuarios(nombre , codigo_usuario , email , programa , rol , estado ) {
    const obj = {
      nombre: nombre,
codigo_usuario: codigo_usuario,
email: email,
programa: programa,
rol: rol,
estado: estado

    };
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }
  getUsuarios() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editUsuarios(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }
  updateUsuarios(nombre , codigo_usuario , email , programa , rol , estado , id) {

    const obj = {
      nombre: nombre,
codigo_usuario: codigo_usuario,
email: email,
programa: programa,
rol: rol,
estado: estado

      };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
 deleteUsuarios(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
