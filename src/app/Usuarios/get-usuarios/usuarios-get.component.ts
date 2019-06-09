import { Component, OnInit } from '@angular/core';
import Usuarios from '../../models/Usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-usuarios-get',
  templateUrl: './usuarios-get.component.html',
  styleUrls: ['./usuarios-get.component.css']
})

export class UsuariosGetComponent implements OnInit {

  usuarios: Usuarios[];

  constructor( private bs: UsuariosService, public toastr: ToastrManager) {}

  ngOnInit() {
    this.bs
      .getUsuarios()
      .subscribe((data: Usuarios[]) => {
        this.usuarios = data;
    });
  }

  deleteUsuarios(id) {
    this.bs.deleteUsuarios(id).subscribe(res => {
      console.log('Deleted');
      this.bs
      .getUsuarios()
      .subscribe((data: Usuarios[]) => {
        this.usuarios = data;
    });
      this.showDeleted();
    });
  }
  showSuccess() {
    this.toastr.successToastr('This is success toast.', 'Success!');
}

showDeleted() {
    this.toastr.errorToastr('El registro fue borrado correctamente', 'Borrado');
}

showWarning() {
    this.toastr.warningToastr('This is warning toast.', 'Alert!');
}

showInfo() {
    this.toastr.infoToastr('This is info toast.', 'Info');
}



showToast(position: any = 'top-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
        position: position
    });
}
}

